import { NextFunction, Response } from 'express'
import { CustomRequest } from '../types/ExpressExtensions'

// a middleware function with no mount path. This code is executed for every request to the router
export const isLoggedInUser = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (!req.session?.userId) {
    res.status(401)
    return res.send({
      errors: [{ title: 'UNAUTHORIZED', message: 'you are not authorized to do that.' }],
    })
  } else {
    next()
  }
}
