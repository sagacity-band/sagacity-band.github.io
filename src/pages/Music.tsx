import React from 'react';
import '../index.css';
import { properties } from '../properties';

function Music() {
  return (
    <div className="content">
        <h1>music</h1>
        <p>Have a listen to some live recorded demos of our original tunes!</p>
        <iframe
          className="soundcloudFrame"
          title="Saga City band live demos"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2015673717&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          frameBorder="0"
          scrolling="no">
        </iframe>
    </div>
  );
}

export default Music;