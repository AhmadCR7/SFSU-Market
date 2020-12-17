import styled from 'styled-components'
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import ListingCard from '../ListingCard/ListngCard'

// My Listings created for users to view personal posted listings
// Created by: Lauren Luke

// Basic Styling
const PageStyled = styled.div`
  padding: 50px;
`

const fetchUserListings = async () => {
  const res = await axios('/api/listing/getUserListings')
  return res.data.listings
}

// setShow created to control visbility of Message Modal
const MyListings = () => {
  const { isLoading, error, data = [] } = useQuery('userListings', fetchUserListings)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid" style={{ margin: '0 auto' }}>
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
  )
}
export default MyListings
