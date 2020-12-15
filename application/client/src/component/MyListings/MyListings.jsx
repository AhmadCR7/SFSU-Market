import Table from 'react-bootstrap/Table'
import styled from 'styled-components'
import { Button, ModalBody, ModalFooter } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import laurenImage from '../../images/Lauren.png'

// My Listings created for users to view personal posted listings
// Created by: Lauren Luke

// Basic Styling
const PageStyled = styled.div`
  padding: 50px;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin: 5px;
    width: 150px;
  }
`
const api = axios.create({
  baseURL: 'http://localhost:8080/api/message/sendMessage',
})

// setShow created to control visbility of Message Modal
const MyListings = () => {
  const [message, setMessages] = useState([])
  console.log('Messages: ', message)
  const getMessages = async () => {
    const response = await axios.get('/sendMessage').catch((err) => console.log('Error:', err))
    if (response && response.data) setMessages(response.data)
  }
  useEffect(() => {
    getMessages()
  }, [])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Listings created by using tables
  // Inlcudes Title, Picture, Description, Price, and Contact Seller button
  if (setShow) {
    return (
      <PageStyled>
        <div>
          <Table striped bordered>
            <thead>
              <tr>
                <th> </th>
                <th>Calculus 2 Online Textbook Link</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="headshot" className="profile" src={laurenImage} />
                </td>
                <td>
                  <h4> Description: </h4>
                  This link has full access to the Calculus 2 textbook. Convenient for online
                  students or students who do most of their schooling remote. Easy purchase process.
                </td>
                <td>
                  <h4>$100</h4>
                  <ButtonsContainer>
                    <Button variant="primary" onClick={handleShow}>
                      Contact Seller
                    </Button>
                  </ButtonsContainer>
                  <Modal show={show} onHide={handleClose}>
                    <form>
                      <div> To: </div>
                      <Modal.Header closeButton>
                        <Form.Control type="text" />
                      </Modal.Header>
                      <div> Product: </div>
                      <Modal.Header>
                        <Form.Control type="text" />
                      </Modal.Header>
                      <ModalBody>
                        Message:
                        <Form.Control as="textarea" rows={5} />
                      </ModalBody>
                    </form>
                    <ModalFooter>
                      <Button variant="secondary" onClick={handleClose}>
                        Exit
                      </Button>
                      <Button varient="primary" to="/sendMessage" onClick={handleClose}>
                        Send
                      </Button>
                    </ModalFooter>
                  </Modal>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> </th>
                <th>Couch For Sale</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="headshot" className="profile" src={laurenImage} />
                </td>
                <td>
                  <h4> Description: </h4>
                  Used couch for sale. Approximately two years old. Black in color. Available for
                  anytime. Not available for shipping.
                </td>
                <td>
                  <h4>$300</h4>
                  <ButtonsContainer>
                    <Button variant="primary" onClick={handleShow}>
                      Contact Seller
                    </Button>
                  </ButtonsContainer>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> </th>
                <th>Tutoring Available</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="headshot" className="profile" src={laurenImage} />
                </td>
                <td>
                  <h4> Description: </h4>
                  Offering tutoring services for two hours a day. Meeting will occur on campus. Math
                  and English subjects only.
                </td>
                <td>
                  <h4>$40</h4>
                  <ButtonsContainer>
                    <Button variant="primary" onClick={handleShow}>
                      Contact Seller
                    </Button>
                  </ButtonsContainer>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </PageStyled>
    )
  }
  return <></>
}
export default MyListings
