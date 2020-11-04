import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarStyles.js'
import SearchArea from './SearchArea'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <div>
      <Nav style={{background: '#7e9efb'}}>
        <NavLink to='/'>
          <img style={{width: '200px'}} src={logo} alt='logo'/>
        </NavLink>
        <Bars />
        <SearchArea />
        <NavMenu>
          <NavLink to='/aboutus' activeStyle={{ color: 'black' }}>
            About
          </NavLink>
          <NavLink to='/dashboard' activeStyle={{ color: 'black' }}>
            Dashboard
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
          <NavBtnLink to='/signup'>Create</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  )
}
export default Navbar
