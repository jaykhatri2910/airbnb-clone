import React from "react";
import "./MeetYourHost.css";
import {
  IconVerified,
  IconLocationPin,
  IconGraduation,
  IconSafety,
} from "../../assets/svg/Icons";

const CO_HOSTS = [
  { name: "Sharath", img: "/airbnb_files/co1.jpg" },
  { name: "Aman Dev Pahwa", img: "/airbnb_files/co2.jpg" },
  { name: "Maria Karen Priyanka", img: "/airbnb_files/co3.jpg" },
  { name: "Simran", img: "/airbnb_files/rev5.jpeg" },
  { name: "Pallavi", img: "/airbnb_files/rev1.jpeg" },
  { name: "Sanyukta", img: "/airbnb_files/rev2.jpeg" },
  {
    name: "Shruti",
    initials: "S",
    color: "rgb(253, 231, 239)",
    textColor: "rgb(212, 53, 110)",
  },
  {
    name: "Amisha",
    initials: "A",
    color: "rgb(231, 240, 253)",
    textColor: "rgb(58, 110, 204)",
  },
];

export default function MeetYourHost() {
  return (
    <section className="reviews-section" id="host">
      <h2 className="section-title">Meet your Host</h2>
      <div className="host-layout">
        {/* Left: host card + personal facts */}
        <div>
          <div className="host-card">
            {/* Photo + name */}
            <div className="host-card-stats">
              <div className="host-avatar-wrap">
                <img src="/airbnb_files/host.jpeg" alt="Mirashya Homes" />
                <span className="host-verified-badge">
                  <IconVerified
                    style={{ display: "block", height: "100%", width: "100%" }}
                  />
                </span>
              </div>
              <div className="host-name">Mirashya Homes</div>
              <div className="host-joined">Host</div>
            </div>

            {/* Stats */}
            <div className="host-info">
              <div className="host-stat">
                <div className="stat-number">1,463</div>
                <div className="stat-label">Reviews</div>
              </div>
              <div className="host-stat">
                <div className="stat-number">4.68★</div>
                <div className="stat-label">Rating</div>
              </div>
              <div className="host-stat">
                <div className="stat-number">2</div>
                <div className="stat-label">Years hosting</div>
              </div>
            </div>
          </div>

          {/* Personal facts */}
          <div className="host-highlights">
            <div className="host-highlight-item">
              <span className="ico">
                <IconLocationPin
                  style={{ display: "block", height: "100%", width: "100%" }}
                />
              </span>
              Born in the 80s
            </div>
            <div className="host-highlight-item">
              <span className="ico">
                <IconGraduation
                  style={{ display: "block", height: "100%", width: "100%" }}
                />
              </span>
              Where I went to school: NICMAR GOA
            </div>
          </div>
        </div>

        {/* Right: co-hosts + host details */}
        <div>
          <div className="host-about-title">Co-Hosts</div>
          <div className="co-hosts-grid">
            {CO_HOSTS.map((h) => (
              <div key={h.name} className="co-host-item">
                {h.img ? (
                  <img src={h.img} alt={h.name} />
                ) : (
                  <div
                    className="co-host-avatar-placeholder"
                    style={{ background: h.color, color: h.textColor }}
                  >
                    {h.initials}
                  </div>
                )}
                <span>{h.name}</span>
              </div>
            ))}
          </div>

          <div className="host-during-title">Host details</div>
          <div className="host-description">
            Response rate: 100%
            <br />
            Responds within an hour
          </div>

          <button
            className="contact-host-btn"
            type="button"
            style={{ marginTop: 24 }}
          >
            Message host
          </button>

          <div className="response-note">
            <span className="ico">
              <IconSafety
                style={{ display: "block", height: "100%", width: "100%" }}
              />
            </span>
            <span>
              To protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
