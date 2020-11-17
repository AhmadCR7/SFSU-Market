import { Category } from '../database/entities/Category'
import { Request, Response } from 'express'

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find()
    res.send({
      data: categories,
      errors: [],
    })
  } catch (err) {
    res.send({
      data: [],
      errors: [
        {
          message: err.message,
        },
      ],
    })
  }
}
