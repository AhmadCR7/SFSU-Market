// 3rd party imports
import React from 'react'
import { Spinner } from 'react-bootstrap'

// My imports

const LoadingSpinner = () => (
  <div style={{ position: 'fixed', top: '30%', left: '50%' }}>
    <Spinner animation="border" variant="warning" />
  </div>
)

export default LoadingSpinner

// STYLING
