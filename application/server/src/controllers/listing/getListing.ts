import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'

export const getListing = async (req: Request, res: Response) => {
  // make sure required body data is present
  if (!req.body || !req.query.listingId) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ title: 'get listing', message: 'incorrect parameters given' }],
    })
  }

  let listing: Listing
  try {
    listing = await Listing.findOne(parseInt(req.query.listingId as string))
  } catch (error) {
    res.status(500)
    return res.send({
      listing: null,
      errors: [
        {
          title: 'get listings',
          message: 'error when retrieving listings.',
        },
      ],
    })
  }

  res.send({
    listing: listing,
    errors: [],
  })
}
