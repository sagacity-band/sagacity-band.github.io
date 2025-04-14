import React from 'react';
import '../index.css';

import bandPhoto from '../images/band-photo.jpg';

function About() {
  return (
    <div>
      <div className="content">
          <h1>about us</h1>
          <div className="about-us-content">
              <div>
                <h2>Welcome to Saga City</h2>
                <img src={bandPhoto} className="large-landscape-img" alt="Band logo of Melbourne tram with SAGA CITY graffiti"/>
              </div>
              <div>
                <p>Sagacity brought you to Saga City, and now it's time to boogie.</p>
                <p>We are a Naarm based neo-soul group bringing retro pop sounds to the population of our growing metropolis</p>
                <p>With a widening setlist of originals sprinkled with some covers, the band are keen to play any type of gig.</p>
                <p>Welcome to Saga City, population you. Start a chat with us on one of the social pipes below!</p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default About;
