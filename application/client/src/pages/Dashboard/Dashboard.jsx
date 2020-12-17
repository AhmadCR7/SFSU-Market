import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useQuery } from 'react-query'
import MyListings from '../../component/MyListings/MyListings'
import Messages from '../../component/Messages/Messages'
import LoadingSpinner from '../../component/LoadingSpinner/LoadingSpinner'
// Dashboard created for active users to view listings and messages
// Created by: Lauren Luke

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin: 5px;
  }
`
const MessageContainer = styled.div`
  width: 70%;
  margin: 2rem auto 0 auto;
`

const fetchCurrentUser = async () => {
  const res = await axios('/api/auth/getCurrentUser')
  return res.data
}

const Dashboard = () => {
  const [value, setValue] = useState('MyListings')
  const { isLoading, error, data } = useQuery('currentUser', fetchCurrentUser)
  // Key components of Dashbaord page
  const components = {
    MyListings,
    Messages,
  }
  const PageToRender = components[value]

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="page">
      <h2 style={{ textAlign: 'center' }}>Hello, {data.user.email}</h2>
      <ButtonsContainer>
        <Button onClick={() => setValue('MyListings')}>My Listings</Button>
        <Button onClick={() => setValue('Messages')}>My Messages</Button>
      </ButtonsContainer>
      <MessageContainer>
        <PageToRender />
      </MessageContainer>
    </div>
  )
}

export default Dashboard
