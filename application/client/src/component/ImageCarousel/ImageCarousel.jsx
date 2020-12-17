// 3rd party imports
import React from 'react'
import { Carousel } from 'react-bootstrap'

// My imports

const ImageCarousel = ({ images }) => (
  <div style={{ width: '50%', margin: '0 auto' }}>
    <Carousel>
      {images.map((i, index) => (
        <Carousel.Item key={index}>
          <img
            style={{ display: 'block', width: '100%', maxHeight: '30rem' }}
            src={i.url}
            alt={`${index} slide`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
)

export default ImageCarousel
