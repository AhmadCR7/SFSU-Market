import { NextFunction, Response } from 'express'
import { User } from '../database/entities/User'
import { CustomRequest } from '../types/ExpressExtensions'

// a middleware function with no mount path. This code is executed for every request to the router
export const isAdmin = async (req: CustomRequest, res: Response, next: NextFunction) => {
  // check if logged in via session
  if (!req.session?.userId) {
    res.status(401)
    return res.send({
      errors: [{ title: 'UNAUTHORIZED', message: 'you are not authorized to do that.' }],
    })
  }

  let admin: User
  try {
    admin = await User.findOne(parseInt(req.session.userId))
    if (!admin || !admin.admin) {
      res.status(401)
      return res.send({
        errors: [
          { title: 'UNAUTHORIZED', message: 'you are not authorized. Only an admin can do that.' },
        ],
      })
    }
  } catch (e) {
    res.status(500)
    return res.send({
      errors: [
        { title: 'UNAUTHORIZED', message: 'you are not authorized. Only an admin can do that.' },
      ],
    })
  }

  next()
}
