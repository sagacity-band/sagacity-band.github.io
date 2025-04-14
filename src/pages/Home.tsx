import React from 'react';
import '../index.css';

import logo from '../images/logo.png';

function Home() {
  return (
    <div className="home-content">
      <img src={logo} className="home-logo" alt="Band logo of Melbourne tram with SAGA CITY graffiti"/>
      <button className="sound-button">GIVE ME A SOUND</button>
      <h1>upcoming</h1>
      <ul className="upcoming">
        <li>May 25: Last Chance, Melbourne</li>
      </ul>
    </div>
  );
}

export default Home;
