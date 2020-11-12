import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import MyListings from './MyListings/MyListings'
import Messages from './Messages/Messages'
import CreateMessage from './Messages/CreateMessage'

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

  const components = {
    MyListings,
    Messages,
    CreateMessage,
  }
  const PageToRender = components[value]

  return (
    <PageStyled>
      <ButtonsContainer>
        <Button onClick={() => setValue('MyListings')}>My Listings</Button>
        <Button onClick={() => setValue('Messages')}>My Messages</Button>
        <Button onClick={() => setValue('CreateMessage')}>Create Message</Button>
      </ButtonsContainer>
      <MessageContainer>
        <PageToRender />
      </MessageContainer>
    </PageStyled>
  )
}

export default Dashboard
