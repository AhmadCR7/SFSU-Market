/*
This file is meant to serve as the logic behind logging a user in
*/
import { Response } from 'express'
import argon2 from 'argon2'
import { User } from '../../database/entities/User'
import { getConnection } from 'typeorm'
import { CustomRequest } from '../../types/ExpressExtensions'

export const loginUser = async (req: CustomRequest, res: Response) => {
  // typeorm connection
  const connection = getConnection()

  // make sure correct body data is present
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400)
    res.send({
      user: null,
      errors: [{ title: 'register user', message: 'incorrect parameters given' }],
    })
    return
  }
  const { email, password } = req.body

  // search for the user in database
  const user: User = await User.findOne({ where: { email } })

  // user was not found
  if (!user) {
    res.status(400)
    res.send({
      user: null,
      errors: [{ title: 'login user', message: 'user does not exist' }],
    })
    return
  }

  // make sure password is corrent
  const validatedPassword = await argon2.verify(user.password, password)

  // incorrect password used
  if (!validatedPassword) {
    res.status(400)
    res.send({
      user: null,
      errors: [{ title: 'login user', message: 'incorrect password' }],
    })
    return
  }

  // log in user via session
  if (req.session) {
    req.session.userId = user.id
  }

  res.send({ user: user, erorrs: [] })
}
