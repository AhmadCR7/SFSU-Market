import React, {useState} from 'react'
import AhmadApp from '../Aboutus/Ahmad/Ahmad'
import NickApp from '../Aboutus/Nick/Nick'
import StevenPage from '../Aboutus/Steven/StevenPage'
import LaurenPage from '../Aboutus/Lauren/LaurenPage'
import Waqas from '../Aboutus/Waqas/Waqas'
import styled from 'styled-components'

import './Aboutus.css'
import { Button } from 'react-bootstrap'

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
    waqas: Waqas
  }
  const PageToRender = components[member]

  return (
    <PageStyled>
      <ButtonsContainer>
        <Button onClick={()=>setMember('ahmad')}>Ahmad</Button>
        <Button onClick={()=>setMember('nick')}>Nicholas</Button>
        <Button onClick={()=>setMember('lauren')}>Lauren</Button>
        <Button onClick={()=>setMember('steven')}>Steven</Button>
        <Button onClick={()=>setMember('waqas')}>Waqas</Button>
      </ButtonsContainer>
      <MemberContainer>
        <PageToRender />
      </MemberContainer>
    </PageStyled>
  )
}
export default Aboutuspage

