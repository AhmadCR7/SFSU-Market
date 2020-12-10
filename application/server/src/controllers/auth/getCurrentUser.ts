/*
This file is meant to serve as the logic behind retrieving the currently logged
in user (will be used for authentication purposes on frontend)
*/
import { Response } from 'express'
import { User } from '../../database/entities/User'
import { CustomRequest } from '../../types/ExpressExtensions'

export const getCurrentUser = async (req: CustomRequest, res: Response) => {
  if (req.session) {
    // check if user is logged in via session
    if (!req.session.userId) {
      return res.send({
        user: null,
        errors: [],
      })
    }
  }

  // get user from database
  let user: User
  try {
    user = await User.findOne(req.session.userId)
  } catch (e) {
    res.status(500)
    return res.send({
      user: null,
      errors: [{ title: 'get current user', message: 'error getting user.' }],
    })
  }
  // user is logged in so return that users data
  res.send({
    user: { email: user.email, admin: user.admin, banned: user.banned, id: user.id },
    errors: [],
  })
}
