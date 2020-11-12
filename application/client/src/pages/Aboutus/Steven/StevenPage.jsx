import React from 'react'
import './StevenPage.css'
import stevenImage from '../../../images/Steven.png'

const StevenPage = () => (
  <div>
    <div className="title-container" />
    <div className="container">
      <div className="col-8">
        <h2>Hello!</h2>
        <p>
          My name is Steven McHenry and I am graduating this Fall. I like webdev stuff{' '}
          <span role="img" aria-label="cool emoji">
            😎
          </span>
        </p>
      </div>
      <div className="col-2">
        <img alt="headshot" className="profile" src={stevenImage} />
      </div>
    </div>
  </div>
)

export default StevenPage
