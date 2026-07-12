import React, { useEffect, useRef, useState } from "react";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import ListingDetails from "../../components/ListingDetails/ListingDetails";
import BookingSidebar from "../../components/BookingSidebar/BookingSidebar";
import Reviews from "../../components/Reviews/Reviews";
import Location from "../../components/Location/Location";
import MeetYourHost from "../../components/MeetYourHost/MeetYourHost";
import ThingsToKnow from "../../components/ThingsToKnow/ThingsToKnow";
import MoreStaysNearby from "../../components/MoreStaysNearby/MoreStaysNearby";
import StickyNav from "../../components/StickyNav/StickyNav";

export default function PropertyDetails() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const galleryRef = useRef(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const { bottom } = galleryRef.current.getBoundingClientRect();
        setStickyVisible(bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReserveClick = () => {
    setToastMsg("You won't be charged yet");
    setShowToast(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <StickyNav visible={stickyVisible} onReserve={handleReserveClick} />

      <div className="container">
        <div ref={galleryRef}>
          <PhotoGallery />
        </div>

        <div className="listing-layout">
          {/* Left column */}
          <div className="listing-main">
            <ListingDetails />
          </div>

          {/* Right column — booking sidebar */}
          <BookingSidebar onReserve={handleReserveClick} />
        </div>

        {/* Wide sections — order matches original Airbnb HTML */}
        <div className="section-divider" id="wideSections">
          <Reviews />
          <Location />
          <MeetYourHost />
          <ThingsToKnow />
          <MoreStaysNearby />
        </div>
      </div>

      {/* Mobile Reserve Bar */}
      <div
        style={{
          display: "none",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          borderTop: "1px solid var(--line-soft)",
          padding: "16px 24px",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 90,
        }}
        className="mobile-reserve"
      >
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>
            ₹28,499{" "}
            <span style={{ fontWeight: 400, color: "var(--muted2)" }}>
              for 5 nights
            </span>
          </div>
          <div style={{ fontSize: 13, color: "var(--muted2)" }}>
            ★ 4.95 · 19 reviews
          </div>
        </div>
        <button
          className="btn-reserve btn-reserve--sm"
          type="button"
          onClick={handleReserveClick}
        >
          Reserve
        </button>
      </div>

      {/* Reserve Toast */}
      <div
        role="status"
        aria-live="polite"
        style={{
          position: "fixed",
          bottom: 32,
          left: "50%",
          transform: showToast ? "translate(-50%, 0)" : "translate(-50%, 16px)",
          opacity: showToast ? 1 : 0,
          transition: "opacity .25s ease, transform .25s ease",
          pointerEvents: "none",
          zIndex: 200,
          background: "#222222",
          color: "#fff",
          fontSize: 15,
          fontWeight: 500,
          padding: "14px 24px",
          borderRadius: 12,
          whiteSpace: "nowrap",
          boxShadow: "0 4px 20px rgba(0,0,0,.28)",
        }}
      >
        {toastMsg}
      </div>

      <style>{`
        @media(max-width:743px){
          .mobile-reserve { display:flex !important; }
          body { padding-bottom: 80px; }
        }
      `}</style>
    </>
  );
}
