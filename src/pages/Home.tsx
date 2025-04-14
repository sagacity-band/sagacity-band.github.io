import React, { useRef, useState } from 'react';
import '../index.css';

import logo from '../images/logo.png';

const soundFiles = [
  "sounds/quiet-1.mp3",
  "sounds/quiet-2.mp3",
  "sounds/la-seta-1.mp3",
  "sounds/la-seta-2.mp3",
  "sounds/phosphene-1.mp3",
  "sounds/phosphene-2.mp3",
  "sounds/manuka-1.mp3",
  "sounds/manuka-2.mp3"
];

function Home() {
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const [currentSound, setCurrentSound] = useState(0);
  const [playedSounds, setPlayedSounds] = useState<Set<number>>(new Set());

  const playSound = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * soundFiles.length);
    } while (playedSounds.has(randomIndex));

    setCurrentSound(randomIndex);

    const playedSoundsCopy = new Set(playedSounds);
    playedSoundsCopy.add(randomIndex);
    setPlayedSounds(playedSoundsCopy);

    if (playedSoundsCopy.size === soundFiles.length) {
      setPlayedSounds(new Set());
    }

    setTimeout(() => {
      if (soundRef.current) {
        soundRef.current.play();
      }
    }, 0);
  };

  return (
    <div className="home-content">
      <img src={logo} className="home-logo" alt="Band logo of Melbourne tram with SAGA CITY graffiti"/>
      <audio
        ref={soundRef}
        src={currentSound !== null ? soundFiles[currentSound] : ''}
      />
      <button onClick={playSound} className="sound-button">GIVE ME A SOUND</button>
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
