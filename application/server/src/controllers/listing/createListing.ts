import { Listing } from '../../database/entities/Listing'
import { Response } from 'express'
import { getConnection } from 'typeorm'
import { Category } from '../../database/entities/Category'
import { ListingImage } from '../../database/entities/ListingImage'
import { Class } from '../../database/entities/Class'
import { User } from '../../database/entities/User'
import { CustomRequest } from '../../types/ExpressExtensions'

export const createListing = async (req: CustomRequest, res: Response) => {
  const connection = getConnection()

  // make sure required body data is present
  if (!req.body || !req.body.title || !req.body.category) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ field: 'all', message: 'incorrect parameters given' }],
    })
  }

  console.log(req.body)

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

  // retrieve all data from body
  const { title, description, price, isbn, category, className, images } = req.body

  let linkingClass: Class
  if (className) {
    // get class from database to link with listing
    try {
      linkingClass = await Class.findOne({ where: { name: className } })
      // incorrect class was supplied
      if (!linkingClass) {
        res.status(400)
        return res.send({
          listing: null,
          errors: [
            {
              field: 'class',
              message: 'could not find an associated class for class with name ' + className,
            },
          ],
        })
      }
    } catch (e) {
      console.error(e)
      res.status(500)
      return res.send({
        listing: null,
        errors: [
          {
            field: 'class',
            message: 'error when finding class',
          },
        ],
      })
    }
  }

  // get cateogory from database to link with listing
  let linkingCategory: Category
  try {
    linkingCategory = await Category.findOne({ where: { name: category } })
    // incorrect category was supplied
    if (!linkingCategory) {
      res.status(400)
      return res.send({
        listing: null,
        errors: [
          {
            field: 'category',
            message: 'could not find an associated category for ' + category,
          },
        ],
      })
    }
  } catch (e) {
    console.error(e)
    res.status(500)
    return res.send({
      listing: null,
      errors: [
        {
          field: 'category',
          message: 'error when finding category',
        },
      ],
    })
  }

  // create new listing in database
  let newListing: Listing
  try {
    newListing = new Listing()
    newListing.title = title
    newListing.poster = user
    newListing.description = description
    newListing.price = price
    newListing.isbn = isbn
    newListing.locked = false
    newListing.verified = false
    newListing.category = linkingCategory
    newListing.class = linkingClass
    await connection.manager.save(newListing)
  } catch (e) {
    res.status(500)
    return res.send({
      listing: null,
      errors: [
        {
          field: 'all',
          message: 'error when creating new listing: error given = ' + e.message,
        },
      ],
    })
  }

  // create images in database so they can be added to listing
  if (images) {
    try {
      images.forEach(async (img) => {
        const newImage = new ListingImage()
        newImage.url = img.url
        newImage.name = img.name
        newImage.listing = newListing
        connection.manager.save(newImage)
      })
    } catch (e) {
      console.error(e)
      res.status(500)
      return res.send({
        listing: null,
        errors: [
          {
            field: 'images',
            message: 'error when creating images in database',
          },
        ],
      })
    }
  }

  res.send({
    listing: newListing,
    errors: [],
  })
}
