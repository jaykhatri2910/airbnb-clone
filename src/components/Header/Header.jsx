import React from "react";
import './Header.css';
import { AirbnbLogo, IconGlobe, IconMenu } from "../../assets/svg/Icons";

export default function Header() {
  return (
    <header className="site-header" id="siteHeader">
      <div className="header-inner">
        {/* Logo */}
        <a className="logo" href="/" aria-label="Airbnb homepage">
          <span className="header-logo">
            <AirbnbLogo style={{ height: 32 }} />
          </span>
        </a>

        {/* Search pill */}
        <div className="search-bar" role="search">
          <button className="search-btn" type="button">
            <img
              className="search-icon-img"
              src="/airbnb_files/searchbar-house.png"
              alt=""
              aria-hidden="true"
            />
            Anywhere
          </button>
          <span className="search-divider" />
          <button className="search-btn" type="button">Anytime</button>
          <span className="search-divider" />
          <button className="search-btn search-btn--muted" type="button">Add guests</button>
          <button className="search-submit" type="button" aria-label="Search" />
        </div>

        {/* Right nav */}
        <nav className="header-actions" aria-label="Site navigation">
          <a className="nav-link-btn" href="#">Become a host</a>
          <button
            className="icon-btn"
            type="button"
            aria-label="Choose a language and currency"
          >
            <span>
              <IconGlobe style={{ width: 16, height: 16 }} />
            </span>
          </button>
          <button
            className="icon-btn"
            type="button"
            aria-label="Main navigation menu"
          >
            <span>
              <IconMenu style={{ width: 16, height: 16 }} />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
