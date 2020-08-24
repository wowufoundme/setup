import React from 'react';

import './Description.css';

import { ReactComponent as Hand } from '../assets/hand.svg';

const Description = () => {
  return (
    <div className="description-container">
      <div className="say-hello">
        <Hand className="hand-icon"/><h3>Hello</h3>
      </div>
      <p className="lead">My name is Shubhkirti Sharma and I'm a final year undergraduate majoring in Computer Science from Panjab University, India</p>
    </div>
  )
}

export default Description;