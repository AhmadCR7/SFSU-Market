import express from 'express'
import { createListing } from '../controllers/listing/createListing'
import { deleteListing } from '../controllers/listing/deleteListing'
import { getAllUnverifiedListings } from '../controllers/listing/getAllUnverifiedListings'
import { getListing } from '../controllers/listing/getListing'
import { getRecentListings } from '../controllers/listing/getRecentListings'
import { getUserListings } from '../controllers/listing/getUserListings'
const router = express.Router()
import { searchListings } from '../controllers/listing/searchListings'
import { uploadImages } from '../controllers/listing/uploadImages'
import { verifyListing } from '../controllers/listing/verifyListing'
import { isAdmin } from '../middleware/isAdmin'
import { isLoggedInUser } from '../middleware/isLoggedInUser'

router.get('/searchListings', searchListings)
router.get('/getRecentListings', getRecentListings)
router.post('/createListing', isLoggedInUser, createListing)
router.post('/verifyListing', isAdmin, verifyListing)
router.post('/deleteListing', isAdmin, deleteListing)
router.get('/getListing', getListing)
router.get('/getUserListings', isLoggedInUser, getUserListings)
router.get('/getAllUnverifiedListings', isAdmin, getAllUnverifiedListings)
router.post('/uploadImages', isLoggedInUser, uploadImages)

export default router
