import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { Class } from '../../database/entities/Class'

export const createClass = async (req: Request, res: Response) => {
  const connection = getConnection()

  // make sure required body data is present
  if (!req.body || !req.body.name || !req.body.major || !req.body.number) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ title: 'create class', message: 'incorrect parameters given' }],
    })
  }

  // retrieve all data from body
  const { name, major, number } = req.body

  // create new class in database
  let newClass: Class
  try {
    newClass = new Class()
    newClass.name = name
    newClass.major = major
    newClass.number = number
    connection.manager.save(newClass)
  } catch (e) {
    res.status(500)
    return res.send({
      listing: null,
      errors: [{ title: 'create class', message: 'error creating class' }],
    })
  }

  res.send({
    class: newClass,
    errors: [],
  })
}
