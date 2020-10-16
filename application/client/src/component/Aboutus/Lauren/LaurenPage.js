import React from 'react'
import './LaurenPage.css'

const LaurenPage = () => {
  return (
    <div>
      <div className='title-container'>
        <h1>Welcome To My Page</h1>
      </div>
      <div className='container'>
        <div className='col-8'>
          <h2>Hello!</h2>
          <p>
            My name is Lauren Luke and I am a Computer Science major. This is my
            last year at SFSU and I am on track to graduate spring 2021. An
            interesting fact about me is I have an identical twin.
          </p>
        </div>
        <div className='col-2'>
          <img
            alt='headshot'
            className='profile'
            src={require('../../../images/Lauren.png')}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default LaurenPage
