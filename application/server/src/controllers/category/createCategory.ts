import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { Category } from '../../database/entities/Category'

export const createCategory = async (req: Request, res: Response) => {
  const connection = getConnection()

  // make sure required body data is present
  if (!req.body || !req.body.name) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ field: 'all', message: 'incorrect parameters given' }],
    })
  }

  // retrieve all data from body
  const { name } = req.body

  // create new category in database
  let newCategory: Category
  try {
    newCategory = new Category()
    newCategory.name = name
    connection.manager.save(newCategory)
  } catch (e) {
    res.status(500)
    return res.send({
      listing: null,
      errors: [{ field: 'all', message: 'error creating category' }],
    })
  }

  res.send({
    category: newCategory,
    errors: [],
  })
}
