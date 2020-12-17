import express from 'express'
import { banUser } from '../controllers/auth/banUser'
import { getAllNormalUsers } from '../controllers/auth/getAllNormalUsers'
import { getCurrentUser } from '../controllers/auth/getCurrentUser'
import { loginUser } from '../controllers/auth/loginUser'
import { logoutUser } from '../controllers/auth/logoutUser'
import { registerUser } from '../controllers/auth/registerUser'
import { isAdmin } from '../middleware/isAdmin'
const router = express.Router()

router.post('/registerUser', registerUser)
router.post('/loginUser', loginUser)
router.post('/logoutUser', logoutUser)
router.get('/getCurrentUser', getCurrentUser)
router.get('/getAllNormalUsers', isAdmin, getAllNormalUsers)
router.post('/banUser', isAdmin, banUser)

export default router
