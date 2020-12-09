import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'

export const getRecentListings = async (req: Request, res: Response) => {
  const listings = await Listing.find({
    where: {
      verified: true,
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
          title: 'get listings',
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
