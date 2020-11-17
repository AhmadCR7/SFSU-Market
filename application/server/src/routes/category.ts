import express from 'express'
const router = express.Router()
import { getAllCategories } from '../controllers/category'

// ~ GET all categories
router.get('/getAll', getAllCategories)

export default router
