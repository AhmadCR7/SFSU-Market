// 3rd party imports
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Button, Modal, Form } from 'react-bootstrap'

// My imports
import placeholder from '../../images/placeholder-image.png'
import ImageCarousel from '../../component/ImageCarousel/ImageCarousel'

const fetchListing = async (key, { lId }) => {
  const url = String(document.URL)
  console.log(url)
  const idStr = url.split('=')
  const id = parseInt(idStr[1])
  const res = await axios.get('/api/listing/getListing', {
    params: {
      listingId: id,
    },
  })
  return res.data.listing
}

const priceConversion = (price) => (price / 100.0).toFixed(2)
const Listing1 = () => {
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const id = 2
  const listing = useQuery(['listing', { id }], fetchListing)
  console.log(listing)
  if (listing.status === 'loading') {
    return <div>loading</div>
  }
  const { title, description, price, poster, listingImages, category, id: listingId } = listing.data

  const handleSend = async () => {
    const res = await axios.post('/api/message/sendMessage', {
      body: message,
      receiverId: poster.id,
      listingId,
    })
    handleClose()
  }

  let dollars = priceConversion(price)

  dollars = dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const images = listingImages.length > 0 ? listingImages : [{ url: placeholder }]

  return (
    <div className="page">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{title}</h2>
      <ImageCarousel images={images} />
      <div style={{ margin: '0 auto', maxWidth: '50rem', textAlign: 'center' }}>
        <p style={{ margin: '1rem 0' }}>{description}</p>
        <p style={{ color: 'darkgreen', fontWeight: '700', fontSize: '1.5rem' }}>
          Asking price: ${dollars}
        </p>
        <p>Category: {category.name}</p>
        <p>Listing by: {poster.email}</p>
        <Button onClick={handleShow}>Contact Seller!</Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Message to {poster.email}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Listing1
