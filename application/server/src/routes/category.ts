import express from 'express'
import { createCategory } from '../controllers/category/createCategory'
import { getAllCategories } from '../controllers/category/getAllCategories'
import { isAdmin } from '../middleware/isAdmin'
const router = express.Router()

router.get('/getAllCategories', getAllCategories)
router.post('/createCategory', isAdmin, createCategory)

export default router
