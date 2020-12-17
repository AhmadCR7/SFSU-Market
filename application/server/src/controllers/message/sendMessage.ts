import { Listing } from '../../database/entities/Listing'
import { Response } from 'express'
import { User } from '../../database/entities/User'
import { CustomRequest } from '../../types/ExpressExtensions'
import { Message } from '../../database/entities/Message'
import { getConnection } from 'typeorm'

export const sendMessage = async (req: CustomRequest, res: Response) => {
  // typeorm connection
  const connection = getConnection()

  // make sure required body data is present
  if (!req.body || !req.body.body || !req.body.receiverId || !req.body.listingId) {
    res.status(400)
    return res.send({
      listing: null,
      errors: [{ field: 'all', message: 'incorrect parameters given' }],
    })
  }

  // retrieve all data from body
  const { body, receiverId, listingId } = req.body

  // get currently logged in user
  let sender: User
  try {
    sender = await User.findOne(parseInt(req.session.userId))
  } catch (e) {
    res.status(500)
    return res.send({
      message: null,
      errors: [
        {
          field: 'user',
          message: 'error finding sender.',
        },
      ],
    })
  }
  // get user who will receive message
  let receiver: User
  try {
    receiver = await User.findOne(receiverId)
    if (!receiver) {
      res.status(400)
      return res.send({
        message: null,
        errors: [
          {
            field: 'user',
            message: 'could not find a user to send that message to.',
          },
        ],
      })
    }
  } catch (e) {
    res.status(500)
    return res.send({
      message: null,
      errors: [
        {
          field: 'user',
          message: 'error finding receiver',
        },
      ],
    })
  }

  // get listing for message
  let listing: Listing
  try {
    listing = await Listing.findOne(listingId)
    if (!listing) {
      res.status(400)
      return res.send({
        message: null,
        errors: [
          {
            field: 'listing',
            message: 'could not find a listing associated with that message.',
          },
        ],
      })
    }
  } catch (e) {
    res.status(500)
    return res.send({
      message: null,
      errors: [
        {
          field: 'listing',
          message: 'error finding listing',
        },
      ],
    })
  }

  // create new message in db
  let newMessage: Message
  try {
    newMessage = new Message()
    newMessage.body = body
    newMessage.sender = sender
    newMessage.receiver = receiver
    newMessage.listing = listing
    await connection.manager.save(newMessage)
  } catch (e) {
    res.status(500)
    return res.send({
      message: null,
      errors: [
        {
          field: 'all',
          message: 'error creating message',
        },
      ],
    })
  }

  res.send({
    message: newMessage,
    errors: [],
  })
}
