/*
This file is meant to serve as the logic behind creating a new standard user
*/
import { Response } from 'express'
import argon2 from 'argon2'
import { User } from '../../database/entities/User'
import { getConnection } from 'typeorm'
import { CustomRequest } from '../../types/ExpressExtensions'

export const registerUser = async (req: CustomRequest, res: Response) => {
  // typeorm connection
  const connection = getConnection()

  // make sure correct body data is present
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400)
    return res.send({
      user: null,
      errors: [{ title: 'register user', message: 'incorrect parameters given' }],
    })
  }
  const { email, password } = req.body

  // make sure sfsu email is being used
  if (!email.includes('@sfsu.edu') || !email.includes('@mail.sfsu.edu')) {
    res.status(400)
    return res.send({
      user: null,
      errors: [
        {
          title: 'register user',
          message: 'user must be an sfsu student',
        },
      ],
    })
  }

  // hash user password
  const hashedPassword = await argon2.hash(password)

  // create user in database
  let newUser: User
  try {
    newUser = new User()
    newUser.email = email
    newUser.banned = false
    newUser.admin = false
    newUser.password = hashedPassword // storing hashed password
    await connection.manager.save(newUser)
  } catch (e) {
    // user already exists
    if (e.message.includes('Duplicate')) {
      res.status(400)
      return res.send({
        user: null,
        errors: [
          {
            title: 'register user',
            message: 'that user already exists',
          },
        ],
      })
    }
    // fallback error message
    res.status(500)
    return res.send({
      user: null,
      errors: [
        {
          title: 'register user',
          message: 'error when creating new user: error given = ' + e.message,
        },
      ],
    })
  }

  // log in user via session
  if (req.session) {
    req.session.userId = newUser.id
  }

  res.send({ user: { email: newUser.email, id: newUser.id }, erorrs: [] })
}
