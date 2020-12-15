/*
This file is meant to serve as the logic behind retrieving the currently logged
in user (will be used for authentication purposes on frontend)
*/
import { Response, Request } from 'express'
import { User } from '../../database/entities/User'

export const getAllNormalUsers = async (req: Request, res: Response) => {
  // get users from database, skipping all admins
  let users: User[]
  try {
    users = await User.find({
      select: ['createdAt', 'admin', 'banned', 'email', 'id'],
      where: {
        admin: false,
      },
    })
  } catch (e) {
    res.status(500)
    return res.send({
      user: null,
      errors: [{ field: 'all', message: 'error getting users.' }],
    })
  }
  // user is logged in so return that users data
  res.send({
    users: users,
    errors: [],
  })
}
