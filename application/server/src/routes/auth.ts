import express from 'express'
import { getCurrentUser } from '../controllers/auth/getCurrentUser'
import { loginUser } from '../controllers/auth/loginUser'
import { logoutUser } from '../controllers/auth/logoutUser'
import { registerUser } from '../controllers/auth/registerUser'
const router = express.Router()

// ~ GET all categories
router.post('/registerUser', registerUser)
router.post('/loginUser', loginUser)
router.post('/logoutUser', logoutUser)
router.get('/getCurrentUser', getCurrentUser)

export default router
