import React from 'react';

export function Nav() {
  return (
    <div className="wrapper">
      <div className="nav topNav container-fluid" id="myTopnav">
        <div className="container">
          <div class="nav__brand">
            <img
              src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/logo.png"
              alt="logo"
              className="logo"
            />
          </div>
          <a href="#home" className="nav-item">
            Logout
          </a>
          <a href="#help" className="nav-item">
            Help
          </a>
          <a href="" className="nav-item active">
            Events
          </a>
          <a href="#dashboard" className="nav-item">
            Dashboard
          </a>
        </div>
      </div>

      <div className="searchArea container">
        <form>
          <div className="search">
            <i className="ico-search"></i>
            <input
              type="text"
              name="search"
              placeholder="Search By Event Title..."
            />
          </div>
        </form>
      </div>

      <div className="container"></div>
    </div>
  );
}
