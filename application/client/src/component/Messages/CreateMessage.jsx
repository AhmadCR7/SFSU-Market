import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import './Messages.css'

const PageStyled = styled.div`
  padding: 50px;
`

const CreateMessage = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${name} ${subject} ${message}`)
  }

  return (
    <PageStyled>
      <div className="container">
        <div className="col-8">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="messageForm.ControlInput1">
              <div className="a"> Create New Message</div>
              <Form.Label>Message User:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group controlId="messageForm.ControlInput2">
              <Form.Label>Subject:</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Subject"
              />
            </Form.Group>
            <Form.Group controlId="messageForm.ControlTextarea1">
              <Form.Label>Write Message:</Form.Label>
              <Form.Control
                as="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </PageStyled>
  )
}

export default CreateMessage
