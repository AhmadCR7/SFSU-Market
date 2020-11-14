// 3rd party imports
import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Listing from '../../component/listing/Listing'

// My imports

const fetchListings = async (key, { category, searchQuery }) => {
  const res = await axios('/api/listing/getListings', {
    params: {
      category,
      searchQuery,
    },
  })

  return res.data.data
}

const Listings = ({ location }) => {
  const { category, searchQuery } = location.state
  const { data, status } = useQuery(['listings', { category, searchQuery }], fetchListings)

  console.log(data)

  if (status === 'loading') {
    return <div>loading</div>
  }

  if (status === 'error') {
    return <div>error</div>
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((listing) => (
        <Listing title={listing.title} price={listing.price} description={listing.description} />
      ))}
    </div>
  )
}

export default Listings
