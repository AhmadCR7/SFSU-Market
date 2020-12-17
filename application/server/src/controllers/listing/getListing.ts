import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'

export const getListing = async (req: Request, res: Response) => {
  // make sure required body data is present
  if (!req.body || !req.query.listingId) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ field: 'all', message: 'incorrect parameters given' }],
    })
  }

  let listing: Listing
  try {
    listing = await Listing.findOne(parseInt(req.query.listingId as string), {
      relations: ['poster'],
    })
  } catch (error) {
    res.status(500)
    return res.send({
      listing: null,
      errors: [
        {
          field: 'all',
          message: 'error when retrieving listings.',
        },
      ],
    })
  }

  res.send({
    listing: {
      ...listing,
      poster: {
        ...listing.poster,
        password: null,
      },
    },
    errors: [],
  })
}
