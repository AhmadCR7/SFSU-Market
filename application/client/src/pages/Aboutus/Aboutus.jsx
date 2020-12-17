import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import AhmadApp from './Ahmad/Ahmad'
import NickApp from './Nick/Nick'
import StevenPage from './Steven/StevenPage'
import LaurenPage from './Lauren/LaurenPage'
import Waqas from './Waqas/Waqas'

import './Aboutus.css'

const PageStyled = styled.div`
  padding: 20px;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin: 5px;
  }
`

const MemberContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`

const Aboutuspage = () => {
  const [member, setMember] = useState('ahmad')

  const components = {
    steven: StevenPage,
    ahmad: AhmadApp,
    nick: NickApp,
    lauren: LaurenPage,
    waqas: Waqas,
  }
  const PageToRender = components[member]

  return (
    <div className="page">
      <h2 style={{ textAlign: 'center' }}>About The Team</h2>
      <ButtonsContainer>
        <Button onClick={() => setMember('ahmad')}>Ahmad</Button>
        <Button onClick={() => setMember('nick')}>Nicholas</Button>
        <Button onClick={() => setMember('lauren')}>Lauren</Button>
        <Button onClick={() => setMember('steven')}>Steven</Button>
        <Button onClick={() => setMember('waqas')}>Waqas</Button>
      </ButtonsContainer>
      <MemberContainer>
        <PageToRender />
      </MemberContainer>
    </div>
  )
}
export default Aboutuspage
