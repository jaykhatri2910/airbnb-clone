import React from "react";
import './Location.css';
import { IconSearch, IconHouse, IconPlus, IconMinus, IconArrowRight } from "../../assets/svg/Icons";

export default function Location() {
  return (
    <section className="reviews-section" id="location">
      <h2 className="section-title">Where you'll be</h2>
      <p className="location-title">Candolim, Goa, India</p>

      {/* Map */}
      <div className="map-container">
        <div className="map-bg" />

        {/* Search expand button */}
        <button className="map-geolocate" aria-label="Expand map">
          <IconSearch style={{ width: 16, height: 16 }} />
        </button>

        {/* Center pin */}
        <div className="map-pin">
          <IconHouse style={{ width: 24, height: 24 }} />
        </div>

        {/* Zoom controls */}
        <div className="map-controls">
          <button aria-label="Zoom in">
            <span className="ico" style={{ width: 16, height: 16 }}>
              <IconPlus style={{ width: '100%', height: '100%' }} />
            </span>
          </button>
          <button aria-label="Zoom out">
            <span className="ico" style={{ width: 16, height: 16 }}>
              <IconMinus style={{ width: '100%', height: '100%' }} />
            </span>
          </button>
        </div>
      </div>

      <p className="map-caption">Exact location provided after booking.</p>

      <h3 className="nearby-title">Neighbourhood highlights</h3>
      <p className="nearby-text">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay
        with easy access to beaches, cafés, and popular attractions.
      </p>

      <button className="show-more-btn">
        Show more
        <span className="show-more-icon">
          <IconArrowRight style={{ width: '100%', height: '100%' }} />
        </span>
      </button>
    </section>
  );
}
