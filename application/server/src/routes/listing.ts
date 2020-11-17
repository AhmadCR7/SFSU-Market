import express from 'express'
const router = express.Router()
import { getListings } from '../controllers/listing'

// ~ GET all categories
router.get('/getListings', getListings)

export default router
