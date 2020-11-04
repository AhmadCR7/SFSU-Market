import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import './Messages.css'
import styled from 'styled-components'

const PageStyled = styled.div`
  padding: 20px;
`

const Messages = () => {
    return (
        <PageStyled>
            <div>
                <div className='container'>
                <div className='col-8'>
            <Form>
                <Form.Group controlId="messageForm.ControlInput1">
                    <div className="a">  Create New Message </div>
                    <Form.Label>Message User:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="messageForm.ControlInput2">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Subject" />
                </Form.Group>
                <Form.Group controlId="messageForm.ControlTextarea1">
                    <Form.Label>Write Message:</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="primary" type="send">
                    Send
                </Button>
            </Form>
                </div>
                </div>
            </div>
        </PageStyled>
    )
}

export default Messages
