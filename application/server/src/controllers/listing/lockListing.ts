import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

export const lockListing = async (req: Request, res: Response) => {
  // typeorm connection
  const connection = getConnection()

  // make sure correct body data is present
  if (!req.body || !req.body.listingId) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ title: 'lock listing', message: 'incorrect parameters given' }],
    })
  }
  const { listingId } = req.body

  // get listing to lock
  let listing: Listing
  try {
    listing = await Listing.findOne(listingId)
    listing.locked = true
    await connection.manager.save(listing)
  } catch (e) {
    res.status(500)
    return res.send({
      listing: null,
      errors: [{ title: 'lock listing', message: 'error locking listing' }],
    })
  }

  res.send({
    listing,
    errors: [],
  })
}
