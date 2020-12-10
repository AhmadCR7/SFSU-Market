import express from 'express'
import { getUserMessages } from '../controllers/message/getUserMessages'
const router = express.Router()
import { sendMessage } from '../controllers/message/sendMessage'
import { isLoggedInUser } from '../middleware/isLoggedInUser'

router.post('/sendMessage', isLoggedInUser, sendMessage)
router.get('/getUserMessages', isLoggedInUser, getUserMessages)

export default router
