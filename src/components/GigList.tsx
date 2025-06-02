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

const isPast = (dateStr: string): boolean => {
  const today = new Date();
  const gigDate = new Date(`${dateStr} ${today.getFullYear()}`);

  today.setHours(0, 0, 0, 0);
  gigDate.setHours(0, 0, 0, 0);

  return !isNaN(gigDate.getTime()) && gigDate < today;
};

const GigList = () => {
  const hasUpcomingGigs = gigs.some(gig => !isPast(gig.date));

  if (!hasUpcomingGigs) {
    return (
        <p className="no-gigs">More grooving to come! Check our socials to see past gigs</p>
    );
  }

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