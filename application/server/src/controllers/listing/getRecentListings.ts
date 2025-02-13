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
    relations: ['poster'],
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
