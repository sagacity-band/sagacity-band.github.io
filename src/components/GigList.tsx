import React from "react";
import data from '../gigs.json';

type Gig = {
  date: string;
  time: string;
  venueName: string;
  venueLink: string;
  venueLocation: string;
};

const gigs = data as Gig[];

const GigList = () => {
  return (
    <ul className="gig-list">
      {gigs.map((gig: Gig, index: number) => (
        <li key={index}>
          <strong>{gig.date}, {gig.time}</strong>:{' '}
          <a href={gig.venueLink}
          target="_blank"
          rel="noopener noreferrer">
            {gig.venueName}
          </a>
          , {gig.venueLocation}
        </li>
      ))}
    </ul>
  );
};

export default GigList;