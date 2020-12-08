import { Request, Response } from 'express'
import { Class } from '../../database/entities/Class'

export const getAllClasses = async (req: Request, res: Response) => {
  const classes = await Class.find()

  if (!classes) {
    res.status(500)
    return res.send({
      classes: [],
      errors: [
        {
          title: 'get classes',
          message: 'error when retrieving classes.',
        },
      ],
    })
  }

  res.send({
    classes: classes,
    errors: [],
  })
}
