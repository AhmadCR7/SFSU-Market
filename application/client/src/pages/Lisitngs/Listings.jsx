// 3rd party imports
import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

// My imports
import ListingCard from '../../component/ListingCard/ListngCard'

const fetchListings = async (key, { category, searchQuery }) => {
  const res = await axios('/api/listing/searchListings', {
    params: {
      category,
      searchQuery,
    },
  })

  return res.data.data
}

const Listings = ({ location }) => {
  const { category, searchQuery } = location.state
  const { isLoading, error, data } = useQuery(
    ['listings', { category, searchQuery }],
    fetchListings
  )

  if (isLoading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="page">
      <h2 style={{ textAlign: 'center' }}>Listings</h2>
      <div className="grid-column">
        {data.map((listing) => (
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

export default Listings
