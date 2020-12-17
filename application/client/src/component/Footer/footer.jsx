import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const stickyFooterStyle = {
  backgroundColor: '#D3D3D3',
  fontSize: '13px',
  color: 'black',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '30px',
  width: '100%',
}

const footer = () => (
  <Container>
    <Row>
      <Col style={stickyFooterStyle} sm={12}>
        Copyright © 2020 SFSU CSC 648 Team 03 Buy & Sell Inc for Students. All rights reserved.
      </Col>
    </Row>
  </Container>
)

export default footer
