import React, {useState} from 'react';
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import MyListings from '../Dashboard/MyListings/MyListings'
import Messages from '../Dashboard/Messages/Messages'


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
        MyListings: MyListings,
        Messages: Messages

    }
    const PageToRender = components[value]


    return (
        <PageStyled>
            <ButtonsContainer>
                <Button onClick={()=>setValue('MyListings')}>My Listings</Button>
                <Button onClick={()=>setValue('Messages')}>Messages</Button>
            </ButtonsContainer>
            <MessageContainer>
                <PageToRender />
            </MessageContainer>
        </PageStyled>
    )
}

export default Dashboard