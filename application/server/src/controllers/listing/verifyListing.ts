import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

export const verifyListing = async (req: Request, res: Response) => {
  // typeorm connection
  const connection = getConnection()

  // make sure correct body data is present
  if (!req.body || !req.body.listingId) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ title: 'verify listing', message: 'incorrect parameters given' }],
    })
  }
  const { listingId } = req.body

  // get listing to verify
  let listing: Listing
  try {
    listing = await Listing.findOne(listingId)
    listing.verified = true
    await connection.manager.save(listing)
  } catch (e) {
    res.status(500)
    return res.send({
      listing: null,
      errors: [{ title: 'verify listing', message: 'error verifying listing' }],
    })
  }

  res.send({
    listing,
    errors: [],
  })
}
