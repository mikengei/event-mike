import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div className="wrapper">
      <div className="nav topNav container-fluid" id="myTopnav">
        <div className="container nav__container">
          <div className="nav__brand">
            <img
              src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/logo.png"
              alt="logo"
              width="300"
              height="40"
              className="logo"
            />
          </div>

          <div className="nav__list">
            <Link to="/" className="nav-item">
              Logout
            </Link>
            <Link to="/" className="nav-item">
              Help
            </Link>
            <Link to="/" className="nav-item active">
              Events
            </Link>
            <Link to="/" className="nav-item">
              Dashboard
            </Link>
            <Link to="/" className="hamburger">
              <i className="menu-bars"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
