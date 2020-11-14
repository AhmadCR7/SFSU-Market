import React from 'react'
import './Ahmad.css'
import ahmadImage from '../../../images/Ahmad.jpg'

const AhmadApp = () => (
  <div>
    <div className="title-container" />
    <div className="container">
      <div className="col-8">
        <h2>Hello!</h2>
        <p>
          My name is Ahmad, I am a Computer Science student at SFSU. This is my last year and I am
          hoping to gradute this fall. I love working with other CS students. Looking forward to
          work and learn in CSC 648 class.
        </p>
      </div>
      <div className="col-2">
        <img alt="headshot" className="profile" src={ahmadImage} />
      </div>
    </div>
  </div>
)

export default AhmadApp
