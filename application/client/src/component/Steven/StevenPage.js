import React from 'react'
import './StevenPage.css'

const StevenPage = () => {
  return (
    <div>
      <div className='title-container'>
        <h1>Welcome To My Page</h1>
      </div>
      <div className='container'>
        <div className='col-8'>
          <h2>Hello!</h2>
          <p>
            My name is Steven McHenry and I am graduating this Fall. I like
            webdev stuff 😎
          </p>
        </div>
        <div className='col-2'>
          <img
            className='profile'
            src={require('../../images/Steven.png')}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default StevenPage
