import React from "react";
import "./BookingSidebar.css";
import { IconChevronDown, IconFlag } from "../../assets/svg/Icons";

export default function BookingSidebar({ onReserve }) {
  return (
    <aside className="listing-sidebar">
      <div className="sidebar-sticky" id="bookingSticky">
        {/* Discount box */}
        <div className="payment-method">
          <img
            className="payment-logo"
            src="/airbnb_files/discount.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="payment-text">
            Get 10% off your next stay.
            <div style={{ marginTop: 2 }}>
              <a href="#">Terms apply</a>
            </div>
          </div>
          <button className="payment-btn" type="button">
            Claim
          </button>
        </div>

        {/* Booking card */}
        <div className="booking-card">
          <div className="booking-price-row">
            <span className="booking-price">₹28,499</span>
            <span className="booking-night">for 5 nights</span>
          </div>

          <div className="date-inputs">
            <div className="date-inputs-row">
              <div className="date-input">
                <div className="input-label">CHECK-IN</div>
                <div className="input-value">10/18/2026</div>
              </div>
              <div className="date-input">
                <div className="input-label">CHECKOUT</div>
                <div className="input-value">10/23/2026</div>
              </div>
            </div>
            <div className="guests-input">
              <div>
                <div className="input-label">GUESTS</div>
                <div className="input-value">2 guests</div>
              </div>
              <span className="input-icon">
                <IconChevronDown style={{ width: "100%", height: "100%" }} />
              </span>
            </div>
          </div>

          <div className="availability-msg">
            Free cancellation before <b>17 October</b>
          </div>

          <button
            className="btn-reserve btn-full"
            type="button"
            id="reserveBtn"
            onClick={onReserve}
          >
            Reserve
          </button>

          <div className="no-charge-note">You won't be charged yet</div>
        </div>

        {/* Report listing */}
        <div className="secure-note">
          <span className="ico" style={{ width: 16, height: 16 }}>
            <IconFlag style={{ width: "100%", height: "100%" }} />
          </span>
          <a href="#">Report this listing</a>
        </div>
      </div>
    </aside>
  );
}
