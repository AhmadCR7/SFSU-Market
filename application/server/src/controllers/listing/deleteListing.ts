import { Listing } from '../../database/entities/Listing'
import { Request, Response } from 'express'

export const deleteListing = async (req: Request, res: Response) => {
  // make sure correct body data is present
  if (!req.body || !req.body.listingId) {
    res.status(400)
    return res.send({
      success: false,
      errors: [{ field: 'all', message: 'incorrect parameters given' }],
    })
  }
  const { listingId } = req.body

  // get listing to delete
  let listing: Listing
  try {
    listing = await Listing.findOne(listingId)
    await listing.remove()
  } catch (e) {
    res.status(500)
    return res.send({
      success: false,
      errors: [{ field: 'all', message: 'error deleteing listing' }],
    })
  }

  res.send({
    success: true,
    errors: [],
  })
}
