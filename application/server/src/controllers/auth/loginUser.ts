/*
This file is meant to serve as the logic behind logging a user in
*/
import { Response } from 'express'
import argon2 from 'argon2'
import { User } from '../../database/entities/User'
import { CustomRequest } from '../../types/ExpressExtensions'

export const loginUser = async (req: CustomRequest, res: Response) => {
  // make sure correct body data is present
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400)
    return res.send({
      user: null,
      errors: [{ title: 'register user', message: 'incorrect parameters given' }],
    })
  }
  const { email, password } = req.body

  // search for the user in database
  let user: User
  try {
    user = await User.findOneOrFail({
      where: { email },
    })
  } catch (e) {
    if (e.message.includes('Could not find any entity')) {
      res.status(400)
      return res.send({
        user: null,
        errors: [{ title: 'login user', message: 'user does not exist' }],
      })
    }
    res.status(500)
    return res.send({
      user: null,
      errors: [{ title: 'login user', message: 'error logging in' }],
    })
  }

  // make sure password is corrent
  const validatedPassword = await argon2.verify(user.password, password)

  // incorrect password used
  if (!validatedPassword) {
    res.status(400)
    return res.send({
      user: null,
      errors: [{ title: 'login user', message: 'incorrect password' }],
    })
  }

  // log in user via session
  if (req.session) {
    req.session.userId = user.id
  }

  res.send({
    user: { email: user.email, admin: user.admin, banned: user.banned, id: user.id },
    erorrs: [],
  })
}
