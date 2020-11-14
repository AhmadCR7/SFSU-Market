import React from 'react'
import './LaurenPage.css'
import laurenImage from '../../../images/Lauren.png'

const LaurenPage = () => (
  <div>
    <div className="title-container" />
    <div className="container">
      <div className="col-8">
        <h2>Hello!</h2>
        <p>
          My name is Lauren Luke and I am a Computer Science major. This is my last year at SFSU and
          I am on track to graduate spring 2021. An interesting fact about me is I have an identical
          twin.
        </p>
      </div>
      <div className="col-2">
        <img alt="headshot" className="profile" src={laurenImage} />
      </div>
    </div>
  </div>
)

export default LaurenPage
