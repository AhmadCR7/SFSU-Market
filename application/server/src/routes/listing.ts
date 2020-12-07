import express from 'express'
const router = express.Router()
import { getListings } from '../controllers/listing/getListings'

// ~ GET all categories
router.get('/getListings', getListings)

export default router
