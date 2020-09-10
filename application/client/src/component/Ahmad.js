import React, { Component } from "react";
import "./Ahmad.css";
import "../images/Ahmad.jpg";

class AhmadApp extends Component {
  render() {
    return (
      <div>
        <div className="title-container">
          <h1>Welcome To My Page</h1>
        </div>
        <div className="container">
          <div className="col-8">
            <h2>Hello!</h2>
            <p>
              My name is Ahmad, I am a Computer Science student at SFSU. This is
              my last year and I am hoping to gradute this fall. I love working
              with other CS students. Looking forward to work and learn in CSC
              648 class.
            </p>
            <h3>Classes I have taken</h3>
            <ul>
              <li>CSC 340</li>
              <li>CSC 413</li>
              <li>CSC 415</li>
              <li>CSC 667</li>
              <li>CSC 675</li>
            </ul>
          </div>
          <div className="col-2">
            <img className="profile" src={require("../images/Ahmad.jpg")}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default AhmadApp;
