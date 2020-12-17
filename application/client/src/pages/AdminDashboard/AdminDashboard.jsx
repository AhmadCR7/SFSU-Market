import React, { useState } from 'react'
import { Table, Card, Badge, Button } from 'react-bootstrap'
import axios from 'axios'
import { useQuery } from 'react-query'
import ListingCard from '../../component/ListingCard/ListngCard'

const fetchUnverifiedListings = async () => {
  const res = await axios('/api/listing/getAllUnverifiedListings')
  return res.data.listings
}

const fetchRecentListings = async () => {
  const res = await axios('/api/listing/getRecentListings')
  return res.data.listings
}

const AdminDashboard = () => {
  const {
    isLoading: isLoadingUnverifiedListings,
    error: errorUnverifiedListings,
    data: dataUnverifiedListings = [],
  } = useQuery('unverifiedListings', fetchUnverifiedListings)

  const {
    isLoading: isloadingRecentListings,
    error: errorRecentListings,
    data: dataRecentListings = [],
  } = useQuery('recentListings', fetchRecentListings)

  const [verifiedClicked, setVerifiedClicked] = useState(false)

  if (isLoadingUnverifiedListings || isloadingRecentListings) {
    return <div>Loading...</div>
  }

  return (
    <div className="page">
      <h2 style={{ textAlign: 'center' }}>Admin Dashboard</h2>
      <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center' }}>
        <div>
          <h3 style={{ textAlign: 'center', color: 'orange' }}>Pending Listings:</h3>
          <div className="grid-column">
            {dataUnverifiedListings.map((listing) => (
              <ListingCard
                key={listing.id}
                categoryName={listing.category.name}
                className={listing.class && listing.class.name}
                datePosted={listing.createdAt}
                id={listing.id}
                isbn={listing.isbn}
                listingImages={listing.listingImages}
                locked={listing.locked}
                price={listing.price}
                verified={listing.verified}
                title={listing.title}
                description={listing.description}
                unverified
                admin
                poster={listing.poster}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: 'center', color: 'darkgreen' }}>Approved Listings:</h3>
          <div className="grid-column">
            {dataRecentListings.map((listing) => (
              <ListingCard
                key={listing.id}
                categoryName={listing.category.name}
                className={listing.class && listing.class.name}
                datePosted={listing.createdAt}
                id={listing.id}
                isbn={listing.isbn}
                listingImages={listing.listingImages}
                locked={listing.locked}
                price={listing.price}
                verified={listing.verified}
                title={listing.title}
                description={listing.description}
                admin
                poster={listing.poster}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
