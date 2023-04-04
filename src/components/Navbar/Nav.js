import React, { useState } from 'react';

export function Nav() {
  return (
    <div className="wrapper">
      <div className="nav topNav container-fluid" id="myTopnav">
        <div className="container nav__container">
          <div class="nav__brand">
            <img
              src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/logo.png"
              alt="logo"
              className="logo"
            />
          </div>

          <div class="nav__list">
            <a href="#" className="nav-item">
              Logout
            </a>
            <a href="#" className="nav-item">
              Help
            </a>
            <a href="" className="nav-item active">
              Events
            </a>
            <a href="#" className="nav-item">
              Dashboard
            </a>
            <a
              href="javascript:void(0);"
              class="hamburger"
              onclick="navToggle()"
            >
              <i class="menu-bars"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
