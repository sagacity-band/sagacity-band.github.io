import React from 'react';
import '../index.css';

import logo from '../images/logo.png';

function Home() {
  return (
    <div className="home-content">
      <img src={logo} className="home-logo" alt="Band logo of Melbourne tram with SAGA CITY graffiti"/>
    </div>
  );
}

export default Home;
