// 3rd party imports
import React from 'react'
import { Card, Button } from 'react-bootstrap'

// My imports

const Listing = ({ title, price, description, imageUrl }) => {
  let dollars = price / 100
  let displayDescription = description
  dollars = dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  if (description.length > 50) {
    displayDescription = `${description.slice(0, 50)}...`
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
        <Card.Text>{dollars}</Card.Text>
        <Button variant="primary">View Post</Button>
      </Card.Body>
    </Card>
  )
}

export default Listing
