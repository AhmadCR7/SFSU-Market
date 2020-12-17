import express from 'express'
import { createListing } from '../controllers/listing/createListing'
import { deleteListing } from '../controllers/listing/deleteListing'
import { getAllUnverifiedListings } from '../controllers/listing/getAllUnverifiedListings'
import { getListing } from '../controllers/listing/getListing'
import { getRecentListings } from '../controllers/listing/getRecentListings'
import { getUserListings } from '../controllers/listing/getUserListings'
import { lockListing } from '../controllers/listing/lockListing'
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
router.post('/deleteListing', isLoggedInUser, deleteListing)
router.post('/lockListing', isAdmin, lockListing)
router.get('/getListing', getListing)
router.get('/getUserListings', isLoggedInUser, getUserListings)
router.get('/getAllUnverifiedListings', isAdmin, getAllUnverifiedListings)
router.post('/uploadImages', isLoggedInUser, uploadImages)

export default router
