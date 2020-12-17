import React from 'react'
import nickImage from '../../../images/Nick.PNG'

const NickApp = () => (
  <div>
    <div className="title-container" />
    <div className="container">
      <div className="col-8">
        <h3>Team Lead</h3>
        <p>Hi, I&aposm Nick Green. I am the team leader. I am a fourth year CS student at SFSU.</p>
      </div>
      <div className="col-2">
        <img alt="headshot" className="profile" src={nickImage} />
      </div>
    </div>
  </div>
)

export default NickApp
