import React from 'react'
import './Ahmad.css'
import ahmadImage from '../../../images/Ahmad.jpg'

const AhmadApp = () => (
  <div>
    <div className="title-container" />
    <div className="container">
      <div className="col-8">
        <h3>Front-End Lead</h3>
        <p>
          Hi, My name is Ahmad, I am a Computer Science student at SFSU. I love working with other
          CS students. Looking forward to work and learn in CSC 648 class.
        </p>
      </div>
      <div className="col-2">
        <img alt="headshot" className="profile" src={ahmadImage} />
      </div>
    </div>
  </div>
)

export default AhmadApp
