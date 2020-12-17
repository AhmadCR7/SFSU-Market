import React from 'react'
import './Messages.css'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

// Messages created for user to be able to view and delete personal messages
// Created by: Lauren Luke

const fetchUserMessages = async () => {
  const res = await axios('/api/message/getUserMessages')
  return res.data.messages
}

// Basic styling
const PageStyled = styled.div`
  padding: 20px;
`

const Messages = () => {
  const { isLoading, error, data = [] } = useQuery('userMessages', fetchUserMessages)

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (data.length === 0) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Sorry no messages</div>
  }

  return (
    <div className="grid-column">
      {data.map((message) => (
        <Card key={message?.id}>
          <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>From: {message?.sender?.email}</div>
            <div>Listing: {message?.listing?.title}</div>
          </Card.Header>
          <Card.Body>
            <Card.Text>{message?.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Messages
