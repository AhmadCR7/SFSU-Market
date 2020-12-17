// 3rd party imports
import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { useQueryCache } from 'react-query'

// My imports
import './ListingCard.css'
import placeholder from '../../images/placeholder-image.png'

const ListingCard = ({
  categoryName,
  description,
  className,
  datePosted,
  id,
  isbn,
  listingImages,
  locked,
  price,
  verified,
  title,
  unverified,
  admin,
  poster,
}) => {
  let dollars = price / 100
  let displayDescription = description
  const thumbnailUrl = listingImages.length > 0 ? listingImages[0].url : placeholder
  dollars = dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const queryCache = useQueryCache()

  const handleVerifyListing = async () => {
    const res = await axios.post('/api/listing/verifyListing', {
      listingId: id,
    })
    queryCache.invalidateQueries(['recentListings', 'unverifiedListings'])
  }

  const handleBanUser = async () => {
    if (poster) {
      const res = await axios.post('/api/auth/banUser', {
        userId: poster.id,
      })
      console.log(res)
    }
  }

  if (description.length > 50) {
    displayDescription = `${description.slice(0, 50)}...`
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnailUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
        <Card.Text>{dollars}</Card.Text>
        <Button id="linkbutton" variant="primary" href={`../../../listing1?id=${id}`}>
          View Post
        </Button>
        {unverified && (
          <Button onClick={handleVerifyListing} variant="success">
            Verify
          </Button>
        )}
        {admin && (
          <Button onClick={handleBanUser} variant="danger">
            Ban User
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ListingCard
