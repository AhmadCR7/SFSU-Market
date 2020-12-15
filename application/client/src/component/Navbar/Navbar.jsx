import React from 'react'
import { useQuery, useQueryCache } from 'react-query'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarStyles'
import SearchArea from './SearchArea'
import logo from '../../images/logo.png'

const fetchCurrentUser = async () => {
  const res = await axios('/api/auth/getCurrentUser')
  return res.data
}

const Navbar = () => {
  const { isLoading, error, data } = useQuery('currentUser', fetchCurrentUser)
  const history = useHistory()
  const queryCache = useQueryCache()

  const handleLogout = async () => {
    const res = await axios.post('api/auth/logoutUser')
    if (res.data) {
      queryCache.invalidateQueries('currentUser')
      history.push('/')
    }
  }

  return (
    <Nav style={{ background: '#7e9efb' }}>
      <NavLink to="/">
        <img style={{ width: '125px' }} src={logo} alt="logo" />
      </NavLink>
      <Bars />
      <SearchArea />
      <NavMenu>
        <NavLink to="/aboutus">About</NavLink>
        {data && data.user && data.user.admin && <NavLink to="/admin-dashboard">Admin</NavLink>}
        {data && data.user && <NavLink to="/dashboard">Dashboard</NavLink>}
      </NavMenu>
      <NavBtn>
        {data && data.user ? (
          <>
            <NavBtnLink to="/createListing">Create Listing</NavBtnLink>
            <Button onClick={handleLogout} variant="danger" style={{ marginLeft: '1rem' }}>
              Logout
            </Button>
          </>
        ) : (
          <NavBtnLink to="/login">Login</NavBtnLink>
        )}
      </NavBtn>
    </Nav>
  )
}
export default Navbar
