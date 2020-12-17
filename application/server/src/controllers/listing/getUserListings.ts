import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'
import { User } from '../../database/entities/User'
import { CustomRequest } from '../../types/ExpressExtensions'

export const getUserListings = async (req: CustomRequest, res: Response) => {
  // get currently logged in user
  let user: User
  try {
    user = await User.findOne(parseInt(req.session.userId))
  } catch (e) {
    res.status(500)
    return res.send({
      message: null,
      errors: [
        {
          field: 'user',
          message: 'error finding user.',
        },
      ],
    })
  }

  const listings = await Listing.find({
    where: {
      poster: user,
    },
    order: {
      createdAt: 'DESC',
    },
  })

  if (!listings) {
    res.status(500)
    return res.send({
      listings: [],
      errors: [
        {
          field: 'all',
          message: 'error when retrieving listings.',
        },
      ],
    })
  }

  res.send({
    listings: listings,
    errors: [],
  })
}
