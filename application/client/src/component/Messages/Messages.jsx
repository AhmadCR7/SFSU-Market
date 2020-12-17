import React from 'react'
import './Messages.css'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'

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
    return <div>Loading...</div>
  }

  return (
    <div>
      {data.map((message) => (
        <div key={message.id}>{message.body}</div>
      ))}
    </div>
  )
}

export default Messages
