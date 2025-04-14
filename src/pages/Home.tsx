import React from 'react';
import '../index.css';

import logo from '../images/logo.png';

function Home() {
  return (
    <div className="home-content">
      <img src={logo} className="home-logo" alt="Band logo of Melbourne tram with SAGA CITY graffiti"/>
      <button className="sound-button">GIVE ME A SOUND</button>
      <hr/>
      <div className="upcoming">
        <h1>upcoming</h1>
        <ul className="gig-list">
          <li>May 25, 2pm: Last Chance, Melbourne</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
