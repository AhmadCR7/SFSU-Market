import { Response } from 'express'
import { Message } from '../../database/entities/Message'
import { User } from '../../database/entities/User'
import { CustomRequest } from '../../types/ExpressExtensions'

export const getUserMessages = async (req: CustomRequest, res: Response) => {
  // get currently logged in user
  let user: User
  try {
    user = await User.findOne(parseInt(req.session.userId))
  } catch (e) {
    res.status(500)
    return res.send({
      messages: [],
      errors: [
        {
          field: 'all',
          message: 'error getting user.',
        },
      ],
    })
  }

  // get all messages for that user
  let messages: Message[]
  try {
    messages = await Message.find({ where: { receiver: user }, relations: ['listing'] })
  } catch (e) {
    res.status(500)
    return res.send({
      messages: [],
      errors: [
        {
          field: 'all',
          message: 'error getting messages.',
        },
      ],
    })
  }

  res.send({
    messages,
    errors: [],
  })
}
