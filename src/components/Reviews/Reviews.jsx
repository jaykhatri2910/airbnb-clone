import React, { useState } from "react";
import "./Reviews.css";
import { StarIcon } from "../../assets/svg/Icons";

const Stars = ({ count = 5 }) => (
  <span className="star-row">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ width: 10, height: 10, display: "inline-block" }}>
        <StarIcon />
      </span>
    ))}
  </span>
);

const ReviewCard = ({
  name,
  tenure,
  date,
  text,
  avatar,
  initial,
  color,
  textColor,
  showMore,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="review-card">
      <div className="head">
        {avatar ? (
          <img className="review-avatar" src={avatar} alt="" />
        ) : (
          <div
            className="review-avatar-placeholder"
            style={{ background: color || "#222", color: textColor || "#fff" }}
          >
            {initial}
          </div>
        )}
        <div>
          <div className="reviewer-name">{name}</div>
          <div className="review-date">{tenure}</div>
        </div>
      </div>
      <div className="review-rating">
        <Stars />
        <span>·</span>
        <span>{date}</span>
      </div>
      <p className={`review-text ${expanded ? "" : "text-clamp"}`}>{text}</p>
      {showMore && (
        <button
          className="review-read-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default function Reviews() {
  return (
    <>
      <section className="reviews-section" id="reviews">
        {/* Guest favourite hero */}
        <div className="reviews-summary">
          <div className="reviews-images">
            <img
              src="/airbnb_files/laurel-left.png"
              alt=""
              style={{ height: 110 }}
            />
            <div className="reviews-score">4.95</div>
            <img
              src="/airbnb_files/laurel-right.png"
              alt=""
              style={{ height: 110 }}
            />
          </div>
          <div className="reviews-title">Guest favourite</div>
          <p className="reviews-subtitle">
            This home is a guest favourite based on ratings, reviews and
            reliability
          </p>
          <button className="reviews-translate-btn">How reviews work</button>
        </div>

        {/* Rating breakdown grid */}
        <div className="reviews-breakdown">
          {/* Overall rating + bars */}
          <div className="breakdown-col">
            <div className="breakdown-title">Overall rating</div>
            <div className="breakdown-bars">
              {[5, 4, 3, 2, 1].map((n) => (
                <div key={n} className="bar-row">
                  <span className="bar-label">{n}</span>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: n === 5 ? "95%" : n === 4 ? "4%" : "1%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category columns */}
          {[
            {
              label: "Cleanliness",
              score: "5.0",
              icon: (
                <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z" />
              ),
            },
            {
              label: "Accuracy",
              score: "5.0",
              icon: (
                <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
              ),
            },
            {
              label: "Check-in",
              score: "5.0",
              icon: (
                <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
              ),
            },
            {
              label: "Communication",
              score: "5.0",
              isStroke: true,
              icon: (
                <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" />
              ),
            },
            {
              label: "Location",
              score: "4.8",
              icon: (
                <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
              ),
            },
            {
              label: "Value",
              score: "4.8",
              icon: (
                <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              ),
            },
          ].map(({ label, score, icon, isStroke }) => (
            <div key={label} className="breakdown-col">
              <div className="breakdown-title">{label}</div>
              <div className="breakdown-icon-title">{score}</div>
              <div className="ico">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    fill: isStroke ? "none" : "currentColor",
                    stroke: isStroke ? "currentColor" : "none",
                    strokeWidth: isStroke ? 2 : undefined,
                    overflow: isStroke ? "visible" : undefined,
                  }}
                >
                  {icon}
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Category chips */}
        <div className="stays-scroll">
          {[
            { label: "Comfort", count: 6, img: "/airbnb_files/comfort.png" },
            { label: "Accuracy", count: 5, img: "/airbnb_files/accuracy.png" },
            { label: "Hot tub", count: 5, img: "/airbnb_files/hot-tub.png" },
            {
              label: "Condition",
              count: 4,
              img: "/airbnb_files/condition.png",
            },
            {
              label: "Hospitality",
              count: 8,
              img: "/airbnb_files/hospitality.png",
            },
            {
              label: "Cleanliness",
              count: 4,
              img: "/airbnb_files/cleanliness.png",
            },
            {
              label: "Amenities",
              count: 2,
              img: "/airbnb_files/amenities.png",
            },
            { label: "Decor", count: 2, img: "/airbnb_files/decor.png" },
            {
              label: "Indoor spaces",
              count: 2,
              img: "/airbnb_files/indoor-spaces.png",
            },
            { label: "Location", count: 2, img: "/airbnb_files/location.png" },
          ].map(({ label, count, img }) => (
            <button key={label} className="stay-chip" type="button">
              <img
                className="stay-chip-img"
                src={img}
                alt=""
                aria-hidden="true"
              />
              {label} <span className="stay-chip-sub">{count}</span>
            </button>
          ))}
        </div>

        {/* Review cards */}
        <div className="reviews-grid">
          <ReviewCard
            name="Amit"
            tenure="2 months on Airbnb"
            date="1 week ago"
            text="Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."
            initial="A"
            color="rgb(247, 237, 226)"
            textColor="rgb(193, 133, 42)"
          />
          <ReviewCard
            name="Aheesh"
            tenure="3 years on Airbnb"
            date="2 weeks ago"
            avatar="/airbnb_files/rev1.jpeg"
            text="We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."
            showMore
          />
          <ReviewCard
            name="Samiksha"
            tenure="8 months on Airbnb"
            date="May 2026"
            avatar="/airbnb_files/rev2.jpeg"
            text="the host nitish was really great help"
          />
          <ReviewCard
            name="Vedant"
            tenure="4 years on Airbnb"
            date="May 2026"
            initial="V"
            color="rgb(239, 234, 247)"
            textColor="rgb(139, 111, 196)"
            text="We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.
                  The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.
                  The property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!"
            showMore
          />
          <ReviewCard
            name="Vaibhav S"
            tenure="3 years on Airbnb"
            date="May 2026"
            avatar="/airbnb_files/rev3.jpeg"
            text="Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too."
          />
          <ReviewCard
            name="Mohd"
            tenure="5 years on Airbnb"
            date="May 2026"
            avatar="/airbnb_files/rev4.jpeg"
            text="Great place. Exactly as described in the listing."
          />
        </div>

        <button className="btn-outline">Show all 19 reviews</button>
      </section>
    </>
  );
}
