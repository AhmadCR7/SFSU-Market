// 3rd party imports
import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'

// My imports
import me from '../../images/Nick.PNG'

const mockdata = {
  title: 'French President Nicolas Sarkozy',
  description:
    'In 1989, French President Nicolas Sarkozy rose and fell again. This was because he woke up and then went back to bed.',
  category: 'Appliances',
  price: 59940,
  user: 'blargh257',
  imageSrc: '../../images/Nick.PNG',
}

const priceConversion = (price) => (price / 100.0).toFixed(2)

const Listing1 = () => (
  // const [imagesource, setimagesource] = useState(mockdata.imageSrc)

  <div style={{ padding: '10px' }}>
    <Container>
      <Row>
        <Col>
          <Image src={me} style={{ height: '400px' }} />
        </Col>
        <Col>
          <div style={{ fontSize: '30px', padding: '10px' }}>{mockdata.title}</div>
          <div style={{ fontSize: '20px', padding: '10px' }}>by {mockdata.user}</div>
          <div>Description:</div>
          <div style={{ padding: '10px' }}>{mockdata.description}</div>
          <div style={{ padding: '10px' }}>Category: {mockdata.category}</div>
        </Col>
        <Col>
          <div style={{ marginBottom: '10px', fontSize: '3em' }}>
            ${priceConversion(mockdata.price)}
          </div>
          <Button style={{ backgroundColor: '#BBBB00' }}>Contact seller</Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Listing1
