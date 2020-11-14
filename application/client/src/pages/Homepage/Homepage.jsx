import React from 'react'
import { connect } from 'react-redux' // step 1

const Homepage = (
  isLoggedIn,
  user // step 4 pass props in to component
) => (
  <div>
    <h1>SFSU Software Engineering </h1>
    <h2>Fall 2020 CSC 648 TEAM 3 </h2>
    {isLoggedIn && (
      <div>
        <p>{`Welcome ${user}!`}</p>
      </div>
    )}
  </div>
)

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user,
})

// step 3 connect mapping function to component
export default connect(mapStateToProps)(Homepage)
