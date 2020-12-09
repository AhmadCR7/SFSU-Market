import express from 'express'
import { createListing } from '../controllers/listing/createListing'
import { deleteListing } from '../controllers/listing/deleteListing'
import { getRecentListings } from '../controllers/listing/getRecentListings'
const router = express.Router()
import { searchListings } from '../controllers/listing/searchListings'
import { verifyListing } from '../controllers/listing/verifyListing'
import { isAdmin } from '../middleware/isAdmin'
import { isLoggedInUser } from '../middleware/isLoggedInUser'

router.get('/searchListings', searchListings)
router.get('/getRecentListings', getRecentListings)
router.post('/createListing', isLoggedInUser, createListing)
router.post('/verifyListing', isAdmin, verifyListing)
router.post('/deleteListing', isAdmin, deleteListing)

export default router
