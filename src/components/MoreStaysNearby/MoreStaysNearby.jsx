import React, { useRef, useState } from "react";
import "./MoreStaysNearby.css";

const StarIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      height: "100%",
      width: "100%",
      fill: "currentColor",
    }}
  >
    <path
      fillRule="evenodd"
      d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
    />
  </svg>
);

const STAYS = [
  {
    img: "/airbnb_files/s1.jpeg",
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
  },
  {
    img: "/airbnb_files/s2.jpeg",
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
  },
  {
    img: "/airbnb_files/s3.jpeg",
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
  },
  {
    img: "/airbnb_files/s4.jpeg",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
  },
  {
    img: "/airbnb_files/s5.jpeg",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
  },
  {
    img: "/airbnb_files/s6.jpeg",
    title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
    price: "₹45,648",
    rating: "5.0",
  },
  {
    img: "/airbnb_files/s2.jpeg",
    title: "Luxury Apt | Private Pool | 6 Mins from Beach",
    price: "₹48,786",
    rating: "4.93",
  },
  {
    img: "/airbnb_files/s4.jpeg",
    title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
    price: "₹22,824",
    rating: "4.92",
  },
];

const PAGE_SIZE = 5; // show 5 at a time

export default function MoreStaysNearby() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(STAYS.length / PAGE_SIZE);

  const scrollTo = (dir) => {
    const newPage = page + dir;
    if (newPage < 0 || newPage >= totalPages) return;
    setPage(newPage);
    if (trackRef.current) {
      const itemWidth =
        trackRef.current.querySelector(".nearby-card")?.offsetWidth || 0;
      const gap = 20;
      trackRef.current.scrollTo({
        left: newPage * PAGE_SIZE * (itemWidth + gap),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="reviews-section">
      <div className="guests-header">
        <h2 className="section-title" style={{ margin: 0 }}>
          More stays nearby
        </h2>
        <div className="guests-controls">
          <span className="guests-type-label">
            {page + 1} / {totalPages}
          </span>
          <button
            className="guests-count-btn"
            id="simPrev"
            disabled={page === 0}
            onClick={() => scrollTo(-1)}
            aria-label="Previous"
          >
            <span className="ico">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  display: "block",
                  height: "100%",
                  width: "100%",
                  fill: "currentColor",
                }}
              >
                <path
                  d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <button
            className="guests-count-btn"
            id="simNext"
            disabled={page === totalPages - 1}
            onClick={() => scrollTo(1)}
            aria-label="Next"
          >
            <span className="ico">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  display: "block",
                  height: "100%",
                  width: "100%",
                  fill: "currentColor",
                }}
              >
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="nearby-scroll" id="simTrack" ref={trackRef}>
        {STAYS.map((stay, i) => (
          <div key={i} className="nearby-card">
            <img src={stay.img} alt={stay.title} loading="lazy" />
            <div className="text-title">{stay.title}</div>
            <div className="p">
              {stay.price} &nbsp;{" "}
              <span className="star">
                <StarIcon />
              </span>{" "}
              {stay.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
