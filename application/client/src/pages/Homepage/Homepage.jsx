import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import ListingCard from '../../component/ListingCard/ListngCard'

const fetchRecentListings = async () => {
  const res = await axios('/api/listing/getRecentListings')
  return res
}

const Homepage = () => {
  const { isLoading, error, data = [] } = useQuery('recentListings', fetchRecentListings)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  console.log(data)

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Recent Listings</h2>
      <div className="grid" style={{ margin: '2rem auto' }}>
        {data.data.listings.map((listing) => (
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
          />
        ))}
      </div>
    </div>
  )
}

export default Homepage
