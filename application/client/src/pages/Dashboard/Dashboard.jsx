import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import MyListings from '../../component/MyListings/MyListings'
import Messages from '../../component/Messages/Messages'
// Dashboard created for active users to view listings and messages
// Created by: Lauren Luke

// Basic styling
const PageStyled = styled.div`
  padding: 20px;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: Left;
  button {
    margin: 5px;
  }
`
const MessageContainer = styled.div`
  width: 70%;
`
const Dashboard = () => {
  const [value, setValue] = useState('MyListings')
  // Key components of Dashbaord page
  const components = {
    MyListings,
    Messages,
  }
  const PageToRender = components[value]
  // Buttons on the Dashboard page
  return (
    <PageStyled>
      <h1>Hello, Monica!</h1>
      <ButtonsContainer>
        <Button onClick={() => setValue('MyListings')}>My Listings</Button>
        <Button onClick={() => setValue('Messages')}>My Messages</Button>
      </ButtonsContainer>
      <MessageContainer>
        <PageToRender />
      </MessageContainer>
    </PageStyled>
  )
}

export default Dashboard
