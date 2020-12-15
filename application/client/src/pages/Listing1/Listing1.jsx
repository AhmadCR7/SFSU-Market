// 3rd party imports
import React from 'react'
import { useQuery } from 'react-query'
import Axios from 'axios'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'

// My imports
import me from '../../images/Nick.PNG'

const fetchListing = async (key, { lId }) => {
  const url = String(document.URL)
  const idStr = url.split('=')
  const id = parseInt(idStr[1])
  const res = await Axios.get('/api/listing/getListing', {
    params: {
      listingId: id,
    },
  })
  // console.log(res.data.listing)
  return res.data.listing
}

const fetchUser = async (key, { uId }) => {
  // Goes into database and returns the username associated with the userid passed in.
}

const priceConversion = (price) => (price / 100.0).toFixed(2)
const Listing1 = () => {
  const id = 2
  const listing = useQuery(['listing', { id }], fetchListing)
  console.log(listing)
  if (listing.status === 'loading') {
    return <div>loading</div>
  }
  const { title } = listing.data
  const { user } = listing.data
  const { description } = listing.data
  const { price } = listing.data
  const category = listing.data.category.name
  return (
    <div style={{ padding: '10px' }}>
      <Container>
        <Row>
          <Col>
            <Image src={me} style={{ height: '400px' }} />
          </Col>
          <Col>
            <div style={{ fontSize: '30px', padding: '10px' }}>{title}</div>
            <div style={{ fontSize: '20px', padding: '10px' }}>by {user}</div>
            <div>Description:</div>
            <div style={{ padding: '10px' }}>{description}</div>
            <div style={{ padding: '10px' }}>Category: {category}</div>
          </Col>
          <Col>
            <div style={{ marginBottom: '10px', fontSize: '3em' }}>${priceConversion(price)}</div>
            <Button style={{ backgroundColor: '#BBBB00' }}>Contact seller</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Listing1
