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

  console.log(data)

  return (
    <div className="grid">
      {data.map((listing) => (
        <ListingCard
          key={listing.id}
          title={listing.title}
          price={listing.price}
          description={listing.description}
          listingImages={listing.listingImages}
        />
      ))}
    </div>
  )
}

export default Listings
