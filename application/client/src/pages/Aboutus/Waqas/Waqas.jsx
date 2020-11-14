import React from 'react'
import './Waqas.css'
import waqasImage from '../../../images/Waqas.jpg'

const WaqasBio = () => (
  <div>
    <div className="title-container" />
    <div className="container">
      <div className="col-8">
        <h2>Hello!</h2>
        <p>
          My name is Waqas Hassan, I am a senior and plan to graduate Spring 21. I enjoy playing
          soccer and playing Fifa on my free time.
        </p>
      </div>
      <div className="col-2">
        <img alt="headshot" className="profile" src={waqasImage} />
      </div>
    </div>
  </div>
)

export default WaqasBio
