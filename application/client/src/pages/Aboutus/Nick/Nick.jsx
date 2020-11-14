import React from 'react'
import './Nick.css'
import nickImage from '../../../images/Nick.PNG'

const NickApp = () => (
  <div>
    <h1>Nick</h1>
    <img alt="headshot" className="profile" src={nickImage} />
    <h2>Hi, I&aposm Nick Green. I am the team leader. I am a fourth year CS student at SFSU.</h2>
  </div>
)

export default NickApp
