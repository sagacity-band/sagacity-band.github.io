import React from 'react';
import '../index.css';
import { properties } from '../properties';

function Music() {
  return (
    <div className="content">
        <h1>music</h1>
        <p>Have a listen to some live recorded demos of our original tunes!</p>
        <div id="dropboxButton">
            <a id="dropboxButton"
              href={properties.dropboxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sound-button"
            >
                CHECK OUT DEMOS
            </a>
        </div>
    </div>
  );
}

export default Music;