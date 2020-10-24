// 3rd party imports
import React from 'react'
import { Card, Button } from 'react-bootstrap'

// My imports

const Listing = ({ title, price, description }) => {
  let dollars = price / 100
  dollars = dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  if (description.length > 50) {
    description = description.slice(0, 50) + '...'
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='https://picsum.photos/150' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <div>{dollars}</div>
        </Card.Text>

        <Button variant='primary'>View Post</Button>
      </Card.Body>
    </Card>
  )
}

export default Listing

// STYLING<div>
