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

  // format date
  const date = new Date(datePosted)
  const dateOutput = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  const queryCache = useQueryCache()

  const handleVerifyListing = async () => {
    const res = await axios.post('/api/listing/verifyListing', {
      listingId: id,
    })
    // queryCache.invalidateQueries(['recentListings', 'unverifiedListings'])
    queryCache.refetchQueries('recentListings')
    queryCache.refetchQueries('unverifiedListings')
  }

  const handleBanUser = async () => {
    if (poster) {
      const res = await axios.post('/api/auth/banUser', {
        userId: poster.id,
      })
      console.log(res)
    }
  }

  if (description.length > 100) {
    displayDescription = `${description.slice(0, 100)}...`
  }

  return (
    <Card
      style={{
        width: 'min(50rem, 100%)',
        margin: '.3rem auto',
        boxShadow: '2px 3px 6px rgba(0, 0, 0, 0.150)',
      }}
    >
      <Card.Header style={{ textAlign: 'center', fontSize: '1.5rem' }}>{title}</Card.Header>
      <Card.Body>
        <div className="body-container">
          <div
            style={{
              background: `url(${thumbnailUrl})`,
            }}
            className="display-image"
          />
          <div className="card-body">
            <Card.Text style={{ textAlign: 'center' }}>{displayDescription}</Card.Text>
            <Card.Text style={{ fontSize: '2rem', color: '#5db68e' }}>{dollars}</Card.Text>
            <Card.Text>Posted by: {poster && poster.email}</Card.Text>
            <div>
              <Button id="linkbutton" variant="primary" href={`../../../listing1?id=${id}`}>
                View Listing
              </Button>
              {unverified && (
                <Button
                  onClick={handleVerifyListing}
                  variant="success"
                  style={{ marginTop: '5px' }}
                >
                  Verify
                </Button>
              )}
              {admin && (
                <Button onClick={handleBanUser} variant="danger" style={{ marginTop: '5px' }}>
                  Ban User
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer style={{ textAlign: 'center', color: 'gray' }}>
        Date listed: {dateOutput}
      </Card.Footer>
    </Card>
  )
}

export default ListingCard
