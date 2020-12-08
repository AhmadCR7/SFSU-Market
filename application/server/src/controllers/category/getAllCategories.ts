import { Request, Response } from 'express'
import { Category } from '../../database/entities/Category'

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await Category.find()

  if (!categories) {
    res.status(500)
    return res.send({
      categories: [],
      errors: [
        {
          title: 'get categories',
          message: 'error when retrieving categories.',
        },
      ],
    })
  }

  res.send({
    categories: categories,
    errors: [],
  })
}
