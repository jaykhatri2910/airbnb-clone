import React, { useState, useEffect } from "react";
import './StickyNav.css';
import { StarIcon } from "../../assets/svg/Icons";

const SECTIONS = [
  { id: "photos",    label: "Photos"    },
  { id: "amenities", label: "Amenities" },
  { id: "reviews",   label: "Reviews"   },
  { id: "location",  label: "Location"  },
];

export default function StickyNav({ visible, onReserve }) {
  const [active, setActive] = useState("photos");

  useEffect(() => {
    // Track which section is closest to the top of the viewport
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    // Use a top-biased rootMargin so the section is "active" when it enters
    // the top third of the viewport
    const options = {
      root: null,
      rootMargin: "-10% 0px -60% 0px",
      threshold: 0,
    };

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(handleIntersect, options);
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [visible]); // re-attach when sticky nav appears

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Account for the sticky nav height (66px)
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActive(id);
  };

  return (
    <div
      className={`sticky-nav${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      id="sticky-nav"
    >
      <div className="sticky-nav-inner">
        <nav className="sticky-nav-links" aria-label="Listing sections">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              data-target={id}
              className={active === id ? "sticky-nav-link--active" : ""}
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="sticky-nav-actions">
          <div className="price-summary">
            <div className="price-amount">
              ₹28,499 <span style={{ fontWeight: 400, fontSize: 14 }}>for 5 nights</span>
            </div>
            <div className="price-sub">
              <StarIcon style={{ width: 10, height: 10, display: "inline-block", verticalAlign: "-1px" }} /> 4.95 · 19 reviews
            </div>
          </div>
          <button className="btn-reserve btn-reserve--sm" type="button" onClick={onReserve}>Reserve</button>
        </div>
      </div>
    </div>
  );
}
