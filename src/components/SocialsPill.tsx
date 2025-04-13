import React from 'react';
import { SocialIcon } from 'react-social-icons'
import '../index.css';
import { properties } from '../properties';

const SocialsPill = () => {
  return (
    <div className="socialsContainer">
        <div className="socialsPill">
            <SocialIcon url={properties.instagramUrl} target="_blank"/>
            <SocialIcon url={properties.facebookUrl} target="_blank"/>
            <SocialIcon url={properties.emailUrl}/>
        </div>
    </div>
  );
};

export default SocialsPill;