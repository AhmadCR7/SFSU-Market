import { Listing } from '../database/entities/Listing'
import { Category } from '../database/entities/Category'
import { Request, Response } from 'express'
import { Like } from 'typeorm'

export const getListings = async (req: Request, res: Response) => {
  // search with a query
  if (req.query.searchQuery) {
    const search = req.query.searchQuery
    // search with JUST a query.
    if (req.query.category === 'all') {
      const listings = await Listing.find({ where: { title: Like(`%${search}%`) } })
      res.send({
        data: listings,
        errors: [],
      })
      return
    }

    // search with query and category selected
    const category = await Category.findOne({ where: { name: req.query.category } })
    if (category) {
      const listings = await Listing.find({
        where: {
          title: Like(`%${search}%`),
          category,
        },
      })
      res.send({
        data: listings,
        errors: [],
      })
      return
    }
  }

  // search with just a category
  if (req.query.category === 'all') {
    res.send({
      data: await Listing.find(),
      errors: [],
    })
  }

  // actually category selected
  const category = await Category.findOne({ where: { name: req.query.category } })
  if (category) {
    const listings = await Listing.find({
      where: {
        category,
      },
    })
    res.send({
      data: listings,
      errors: [],
    })
    return
  }
}
