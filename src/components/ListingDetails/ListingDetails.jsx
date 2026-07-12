import React, { useState } from "react";
import AmenitiesModal from "../AmenitiesModal/AmenitiesModal";
import "./ListingDetails.css";
import {
  StarIcon,
  LaurelLeft,
  IconArrowLeft,
  IconArrowRight,
  IconKeyboard,
} from "../../assets/svg/Icons";

const AmenityIcon = ({ d }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    fill="currentColor"
    style={{ width: "100%", height: "100%" }}
  >
    <path d={d} />
  </svg>
);

const CalDay = ({ n, selected, range, crossed, blank }) => {
  if (blank) return <div className="calendar-day calendar-day--empty" />;
  if (crossed)
    return <div className="calendar-day calendar-day--blocked">{n}</div>;
  if (selected === "start")
    return <div className="calendar-day calendar-day--start">{n}</div>;
  if (selected === "end")
    return <div className="calendar-day calendar-day--end">{n}</div>;
  if (range)
    return <div className="calendar-day calendar-day--in-range">{n}</div>;
  return <div className="calendar-day">{n}</div>;
};

export default function ListingDetails() {
  const [amenOpen, setAmenOpen] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  return (
    <>
      <AmenitiesModal open={amenOpen} onClose={() => setAmenOpen(false)} />
      <div id="contentLeft">
        {/* ── Title + rating strip ── */}
        <div
          className="summry-section"
          style={{ borderTop: "none", paddingTop: 0 }}
        >
          <div className="host-summary">
            <h2>Entire serviced apartment in Candolim, India</h2>
            <div className="host-meta">
              3 guests · 1 bedroom · 1 bed · 1 bathroom
            </div>
          </div>

          {/* Guest favourite badge */}
          <div className="superhost-badge">
            <div className="badge-rating">
              <span className="badge-plane" style={{ height: 36 }}>
                <LaurelLeft style={{ height: 36, width: "auto" }} />
              </span>
              <div className="badge-stat">
                Guest
                <br />
                favourite
              </div>
              <span
                className="badge-plane badge-plane--flip"
                style={{ height: 36 }}
              >
                <LaurelLeft style={{ height: 36, width: "auto" }} />
              </span>
            </div>
            <div className="badge-text">
              One of the most loved homes on Airbnb, according to guests
            </div>
            <div className="badge-stats">
              <div className="stat-block">
                <div className="stat-number">4.95</div>
                <div className="star-row">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      style={{ width: 10, height: 10, display: "inline-block" }}
                    >
                      <StarIcon />
                    </span>
                  ))}
                </div>
              </div>
              <div className="stat-divider" />
              <div className="stat-block">
                <div className="stat-number">19</div>
                <div
                  className="stat-label"
                  style={{ textDecoration: "underline" }}
                >
                  Reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Host ── */}
        <div className="host-section">
          <div className="reviewer-row">
            <img
              className="reviewer-avatar"
              src="/airbnb_files/host.jpeg"
              alt=""
            />
            <div>
              <div className="reviewer-name">Hosted by Mirashya Homes</div>
              <div className="meta">2 years hosting</div>
            </div>
          </div>
        </div>

        {/* ── Highlights ── */}
        <div className="section">
          <div className="features-list">
            {[
              {
                icon: "m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z",
                title: "Outdoor entertainment",
                sub: "The pool and alfresco dining are great for summer trips.",
              },
              {
                icon: "M20.33 3.08c1.5 2.24.96 5.55-1.38 9.9l-.12.2.18.18c.1.13.21.26.3.4l.23.38.14.02c.7.06 1.78-.11 2.87-.48.89-.3 1.78-.78 2.68-1.45l.66-.52a3 3 0 0 1 4.77 1.33l.12.44c.59 3.35.02 5.73-1.86 6.98-2.24 1.5-5.54.96-9.9-1.39a3 3 0 0 1-.27-.16l-.07.07-.39.3-.28.19V20c-.03.7.15 1.68.48 2.68.3.88.78 1.78 1.45 2.68l.26.33.26.33a3 3 0 0 1-.36 4.22C19 31 17.95 31 17 31h-.54l-1.39-.1c-1.24-.19-2.56-.65-3.36-1.84-1.5-2.25-.96-5.55 1.39-9.91.04-.09.1-.17.15-.25a4.12 4.12 0 0 1-.37-.4.82.82 0 0 0-.18-.23.5.5 0 0 0-.21-.11c-.7-.1-1.85.06-3.04.46-.88.3-1.78.78-2.68 1.45l-.66.52a3 3 0 0 1-4.77-1.33l-.12-.44c-.59-3.35-.02-5.73 1.86-6.98 2.24-1.5 5.55-.96 9.9 1.38l.1.05c.3-.3.55-.5.72-.61l.2-.13.03-.2c.06-.7-.11-1.78-.48-2.88a9.6 9.6 0 0 0-1.45-2.68l-.52-.66a3 3 0 0 1 1.33-4.77l.44-.12c3.35-.59 5.73-.02 6.98 1.86zm-5.31 16.8-.16.22c-2.04 3.77-2.5 6.45-1.49 7.85 1.13 1.55 4.63 1.55 5.44.77.38-.36.47-.89.2-1.31l-.37-.45a11.94 11.94 0 0 1-2.05-3.64 10.93 10.93 0 0 1-.59-3.03V20h-.14a4.01 4.01 0 0 1-.63-.07l-.21-.05zM4.09 13.52c-1.56 1.13-1.56 4.63-.78 5.44.36.38.9.46 1.32.19l.44-.36c1.2-.96 2.42-1.64 3.65-2.05 1.16-.4 2.33-.6 3.28-.6V16c0-.14 0-.28.02-.42l.08-.46-.16-.12c-3.78-2.03-6.46-2.5-7.85-1.48zm23.24-.36-.45.36c-1.2.96-2.41 1.64-3.64 2.05-1.15.38-2.3.6-3.24.6-.01.25-.05.5-.1.74l-.07.26.19.14c3.77 2.03 6.45 2.5 7.85 1.48 1.55-1.13 1.55-4.63.78-5.44-.36-.38-.9-.47-1.32-.19zM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13.2 3.39c-.37.36-.46.89-.18 1.31l.36.45c.95 1.2 1.64 2.42 2.05 3.64.37 1.14.59 2.27.59 3.2l.54.05.3.05.2.05.1-.13c2.04-3.77 2.5-6.45 1.49-7.84-1.13-1.56-4.63-1.56-5.44-.78z",
                title: "Designed for staying cool",
                sub: "Beat the heat with the A/C and ceiling fan.",
              },
              {
                icon: "M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z",
                title: "Self check-in",
                sub: "You can check in with the building staff.",
              },
            ].map(({ icon, title, sub }) => (
              <div key={title} className="feature-item">
                <div className="feature-icon">
                  <AmenityIcon d={icon} />
                </div>
                <div className="feature-content">
                  <div className="text-title">{title}</div>
                  <div className="text-sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Translation notice + Description ── */}
        <div className="section">
          <div className="info-banner">
            Some info has been automatically translated.{" "}
            <div>Show original</div>
          </div>
          <div className="description-block">
            <p
              className={descExpanded ? undefined : "text-clamp"}
              id="descText"
            >
              🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨
              Stay in this cozy {"\n"}
              1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for
              the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺,
              pet-friendly comfort 🐾, and stylish interiors. Just minutes from
              Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹,
              it's ideal for couples seeking romance, relaxation, and a touch of
              luxury in North Goa. ❤️🌴
            </p>
            <button
              className="show-more-btn"
              id="descMore"
              onClick={() => setDescExpanded((v) => !v)}
            >
              {descExpanded ? "Show less" : "Show more"}
              <span className="show-more-icon">
                <IconArrowRight style={{ width: "100%", height: "100%" }} />
              </span>
            </button>
          </div>
        </div>

        {/* ── Sleep arrangements ── */}
        <div className="section">
          <h2 className="section-title">Where you'll sleep</h2>
          <div className="rooms-grid">
            <div className="room-card">
              <img
                src="/airbnb_files/67c61c6f-6260-4809-9510-0360e58a345d.jpeg"
                alt=""
              />
              <div className="text-title">Bedroom</div>
              <div className="text-sub">1 double bed</div>
            </div>
            <div className="room-card">
              <img
                src="/airbnb_files/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg"
                alt=""
              />
              <div className="text-title">Living room</div>
              <div className="text-sub">1 sofa</div>
            </div>
          </div>
        </div>

        {/* ── Amenities ── */}
        <div className="section" id="amenities">
          <h2 className="section-title">What this place offers</h2>
          <div className="amenities-grid">
            {[
              {
                label: "Kitchen",
                d: "M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z",
              },
              {
                label: "Wifi",
                d: "M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z",
              },
              {
                label: "Dedicated workspace",
                d: "M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z",
              },
              {
                label: "Free parking on premises",
                d: "M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.7-5 .41 1.12A4.97 4.97 0 0 1 30 18v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9c0-1.57.75-2.96 1.89-3.88L4.3 13H2v-2h3v.15L6.82 6.3A2 2 0 0 1 8.69 5h14.62c.83 0 1.58.52 1.87 1.3L27 11.15V11h3v2h-2.3zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5h24zm-3-10h.56L23.3 7H8.69l-2.25 6H25zm-15 7h12v-2H10v2z",
              },
              {
                label: "Pool",
                d: "M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3z",
              },
              {
                label: "Hot tub",
                d: "M9.5 2a4.5 4.5 0 0 1 3.53 7.3c.6.21 1.17.54 1.66.98l.19.19L17.4 13H31v2h-2v14a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15H1v-2h2.1a5 5 0 0 1 2.96-3.6A4.5 4.5 0 0 1 9.5 2zm7.08 13H5v14h22V15h-7.59l3.3 3.3-1.42 1.4zM9.5 4a2.5 2.5 0 0 0-1 4.8V11H8a3 3 0 0 0-2.83 2h9.41l-1.12-1.12a3 3 0 0 0-1.92-.87l-.2-.01h-.84V8.8a2.5 2.5 0 0 0-1-4.8z",
              },
              {
                label: "Pets allowed",
                d: "M13.7 13.93a4 4 0 0 1 5.28.6l.29.37 4.77 6.75a4 4 0 0 1 .6 3.34 4 4 0 0 1-4.5 2.91l-.4-.08-3.48-.93a1 1 0 0 0-.52 0l-3.47.93a4 4 0 0 1-2.94-.35l-.4-.25a4 4 0 0 1-1.2-5.2l.23-.37 4.77-6.75a4 4 0 0 1 .96-.97z",
              },
              {
                label: "Exterior security cameras on property",
                d: "M23 3a2 2 0 0 1 2 1.85v1.67l5-2v11.96l-5-2V16a2 2 0 0 1-1.85 2H16.9a5 5 0 0 1-3.98 3.92A5 5 0 0 1 8.22 26H4v4H2V20h2v4h4a3 3 0 0 0 2.87-2.13A5 5 0 0 1 7.1 18H4a2 2 0 0 1-2-1.85V5a2 2 0 0 1 1.85-2H4z",
              },
            ].map(({ label, d }) => (
              <div key={label} className="amenity-item">
                <span className="ico">
                  <AmenityIcon d={d} />
                </span>
                <span className="label">{label}</span>
              </div>
            ))}
            {/* Unavailable */}
            {[
              {
                label: "Carbon monoxide alarm",
                d: "M2.05 6.3 4 8.23V25a3 3 0 0 0 2.82 3h16.94l1.95 1.95c-.16.02-.33.04-.5.04L25 30H7a5 5 0 0 1-5-4.78V7c0-.24.02-.48.05-.7zm1.66-4 26 26-1.42 1.4-26-26 1.42-1.4zM25 2a5 5 0 0 1 5 4.78V25a5 5 0 0 1-.05.7L28 23.77V7a3 3 0 0 0-2.82-3H8.24L6.3 2.05c.16-.02.33-.04.5-.04L7 2h18zM11.1 17a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
              },
              {
                label: "Smoke alarm",
                d: "m3.49 7.73 1.44 1.44A12.94 12.94 0 0 0 3 16a13 13 0 0 0 19.82 11.07l1.45 1.44A14.93 14.93 0 0 1 16 31 15 15 0 0 1 3.49 7.73zm.22-5.44 26 26-1.42 1.42-26-26 1.42-1.42zM16 1a15 15 0 0 1 12.52 23.27l-1.45-1.45A12.94 12.94 0 0 0 29 16 13 13 0 0 0 16 3a12.94 12.94 0 0 0-6.83 1.93L7.74 3.5A14.93 14.93 0 0 1 16 1zm-4.9 16a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
              },
            ].map(({ label, d }) => (
              <div key={label} className="amenity-item amenity--unavailable">
                <span className="ico">
                  <AmenityIcon d={d} />
                </span>
                <span className="label">{label}</span>
              </div>
            ))}
          </div>
          <button
            className="btn-outline"
            id="showAmen"
            onClick={() => setAmenOpen(true)}
          >
            Show all 50 amenities
          </button>
        </div>

        {/* ── Date picker ── */}
        <div className="section" id="dates">
          <div className="calendar-header">
            <div className="text-title">5 nights in Candolim</div>
            <div className="text-sub">18 Oct 2026 – 23 Oct 2026</div>
          </div>

          <div className="calendar-grid">
            <div className="calendar-nav">
              <button aria-label="Previous month">
                <span className="ico" style={{ width: 12, height: 12 }}>
                  <IconArrowLeft style={{ width: "100%", height: "100%" }} />
                </span>
              </button>
              <button aria-label="Next month">
                <span className="ico" style={{ width: 12, height: 12 }}>
                  <IconArrowRight style={{ width: "100%", height: "100%" }} />
                </span>
              </button>
            </div>

            {/* October */}
            <div className="calendar-month">
              <div className="calendar-month-title">October 2026</div>
              <div className="calendar-weekdays">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
              <div className="calendar-days">
                <CalDay blank />
                <CalDay blank />
                <CalDay blank />
                <CalDay blank />
                <CalDay n={1} />
                <CalDay n={2} />
                <CalDay n={3} />
                {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((n) => (
                  <CalDay key={n} n={n} />
                ))}
                <CalDay n={18} selected="start" />
                {[19, 20, 21, 22].map((n) => (
                  <CalDay key={n} n={n} range />
                ))}
                <CalDay n={23} selected="end" />
                {[24, 25, 26, 27, 28, 29, 30, 31].map((n) => (
                  <CalDay key={n} n={n} />
                ))}
              </div>
            </div>

            {/* November */}
            <div className="calendar-month">
              <div className="calendar-month-title">November 2026</div>
              <div className="calendar-weekdays">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
              <div className="calendar-days">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                ].map((n) => (
                  <CalDay key={n} n={n} />
                ))}
                {[18, 19, 20, 21, 22, 23, 24].map((n) => (
                  <CalDay key={n} n={n} crossed />
                ))}
                {[25, 26, 27, 28].map((n) => (
                  <CalDay key={n} n={n} />
                ))}
                {[29, 30].map((n) => (
                  <CalDay key={n} n={n} crossed />
                ))}
              </div>
            </div>
          </div>

          <div className="guests-row">
            <span className="flag-icon" aria-hidden="true">
              <IconKeyboard style={{ width: 20, height: 14 }} />
            </span>
            <button className="link-btn">Clear dates</button>
          </div>
        </div>
      </div>
    </>
  );
}
