import express from 'express'
import { createClass } from '../controllers/class/createClass'
import { getAllClasses } from '../controllers/class/getAllClasses'
import { isAdmin } from '../middleware/isAdmin'
const router = express.Router()

router.get('/getAllClasses', getAllClasses)
router.post('/createClass', isAdmin, createClass)

export default router
