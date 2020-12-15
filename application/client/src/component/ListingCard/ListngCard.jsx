// 3rd party imports
import React from 'react'
import { Card, Button } from 'react-bootstrap'

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
}) => {
  let dollars = price / 100
  let displayDescription = description
  const thumbnailUrl = listingImages.length > 0 ? listingImages[0].url : placeholder
  dollars = dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

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
      </Card.Body>
    </Card>
  )
}

export default ListingCard

// STYLING
