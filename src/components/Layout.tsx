import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import '../index.css';

import SocialsPill from './SocialsPill';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navContainer">
        <ul className="navPill">
          <li><NavLink to="/">home</NavLink></li>
          <li><NavLink to="/about">about us</NavLink></li>
          <li><NavLink to="/music">music</NavLink></li>
        </ul>
      </nav>
      <SocialsPill/>
      <Outlet/>
    </div>
  );
};

export default Layout;