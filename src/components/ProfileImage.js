import React from 'react';
import cover from '../assets/cover.jpg';

import './ProfileImage.css'

const ProfileImage = () => {
  return (
    <div>
      <img 
        className="profile-image"
        src={cover}
        alt="profile"
      />
    </div>
  )
}

export default ProfileImage;