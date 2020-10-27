import React from 'react'
import './Nick.css'

const NickApp = () => {
  return (
    <div>
      <h1>Nick</h1>
      <img
        alt='headshot'
        className='profile'
        src={require('../../../images/Nick.PNG')}
      ></img>
      <h2>
        Hi, I'm Nick Green. I am the team leader. I am a fourth year CS student
        at SFSU.
      </h2>
    </div>
  )
}

export default NickApp