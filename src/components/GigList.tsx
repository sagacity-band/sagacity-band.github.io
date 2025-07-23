import React from "react";
import { useState, useEffect } from 'react';
import { properties } from '../properties';

type Gig = {
  date: string;
  time: string;
  venueName: string;
  venueLink: string;
  venueLocation: string;
};

const isUpcoming = (dateStr: string): boolean => {
  const today = new Date();
  const gigDate = new Date(`${dateStr}`);

  today.setHours(0, 0, 0, 0);
  gigDate.setHours(0, 0, 0, 0);

  return !isNaN(gigDate.getTime()) && gigDate >= today;
};

const formatDate = (gig: Gig): string => {
  const gigDate = new Date(`${gig.date}T${gig.time}`);

  const formattedDate = gigDate.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    hour12: true
  }).replace(" PM", "pm").replace(" AM", "am");

  return formattedDate;
};

const GigList = () => {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(properties.gigListUrl)
      .then(response => response.json())
      .then(json => setGigs(json))
      .catch(error => console.error('Error fetching gigs:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  const upcomingGigs = gigs.filter(gig => isUpcoming(gig.date));

  if (upcomingGigs.length === 0) {
    return (
        <p className="no-gigs">More grooving to come! Check our socials to see past gigs</p>
    );
  }

  return (
    <ul className="gig-list">
      {upcomingGigs.map((gig: Gig, index: number) => (
        <li key={index}>
          <strong>{formatDate(gig)}</strong>:{' '}
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