import React, { useState, useEffect, useCallback, useRef } from "react";
import "./PhotoGallery.css";
import {
  IconGrid,
  IconClose,
  IconChevronLeft,
  IconChevronRight,
  IconShare,
  IconSave,
} from "../../assets/svg/Icons";

// ─── All photos grouped by room (matching the original HTML) ───────────────
const ROOMS = [
  {
    id: "living-room-1",
    name: "Living room 1",
    amenities: "Sofa · Air conditioning · Ceiling fan · TV",
    thumb: "/airbnb_files/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg",
    photos: [
      {
        src: "/airbnb_files/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg",
        layout: "pair-r",
      },
    ],
  },
  {
    id: "living-room-2",
    name: "Living room 2",
    amenities: "Ceiling fan · Hot tub",
    thumb: "/airbnb_files/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg",
    photos: [
      {
        src: "/airbnb_files/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/9be71047-fc52-438a-9270-75cb470f6752.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg",
        layout: "single",
      },
    ],
  },
  {
    id: "full-kitchen",
    name: "Full kitchen",
    amenities:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    thumb: "/airbnb_files/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
    photos: [
      {
        src: "/airbnb_files/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg",
        layout: "pair-r",
      },
    ],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    amenities:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    thumb: "/airbnb_files/67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
    photos: [
      {
        src: "/airbnb_files/67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg",
        layout: "pair-r",
      },
    ],
  },
  {
    id: "full-bathroom",
    name: "Full bathroom",
    amenities: "Hairdryer · Hot water · Shampoo · Shower gel",
    thumb: "/airbnb_files/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg",
    photos: [
      {
        src: "/airbnb_files/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg",
        layout: "single",
      },
    ],
  },
  {
    id: "gym",
    name: "Gym",
    amenities: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    thumb: "/airbnb_files/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg",
    photos: [
      {
        src: "/airbnb_files/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg",
        layout: "pair-r",
      },
    ],
  },
  {
    id: "exterior",
    name: "Exterior",
    amenities: "",
    thumb: "/airbnb_files/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg",
    photos: [
      {
        src: "/airbnb_files/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg",
        layout: "pair-r",
      },
    ],
  },
  {
    id: "pool",
    name: "Pool",
    amenities: "Pool",
    thumb: "/airbnb_files/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg",
    photos: [
      {
        src: "/airbnb_files/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg",
        layout: "pair-r",
      },
    ],
  },
  {
    id: "additional",
    name: "Additional photos",
    amenities: "",
    thumb: "/airbnb_files/70325367-cbae-4993-b560-18cd3f6edd53.jpeg",
    photos: [
      {
        src: "/airbnb_files/70325367-cbae-4993-b560-18cd3f6edd53.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/30ad93b2-293f-494d-b645-626303c6cb93.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg",
        layout: "single",
      },
      {
        src: "/airbnb_files/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg",
        layout: "pair-l",
      },
      {
        src: "/airbnb_files/862d936c-0f34-4e50-af87-b519e2781d19.jpeg",
        layout: "pair-r",
      },
      {
        src: "/airbnb_files/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg",
        layout: "single",
      },
    ],
  },
];

// Flatten all photos into one array for lightbox navigation
const ALL_PHOTOS = ROOMS.flatMap((r) =>
  r.photos.map((p) => ({ ...p, room: r.name })),
);
// ─── Photo Tour Modal (grid view) ────────────────────────────────────────────
function PhotoTour({
  open,
  onClose,
  onPhotoClick,
  initialRoomIndex,
  onShareClick,
}) {
  const scrollRef = useRef(null);

  // Keyboard close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToRoom = useCallback((id, behavior = "smooth") => {
    const el = document.getElementById("tour-room-" + id);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: el.offsetTop - 20,
        behavior,
      });
    }
  }, []);

  // Scroll to room if initialRoomIndex is specified on open
  useEffect(() => {
    if (open && initialRoomIndex !== undefined && initialRoomIndex !== null) {
      const timer = setTimeout(() => {
        scrollToRoom(initialRoomIndex, "auto");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open, initialRoomIndex, scrollToRoom]);

  return (
    <div
      className={`photo-tour${open ? " is-open" : ""}`}
      id="photo-tour"
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {/* Header */}
      <header className="tour-header" id="tourBar">
        <button
          className="tour-back round-icon-btn"
          type="button"
          aria-label="Back"
          onClick={onClose}
        >
          <span style={{ width: 18, height: 18, display: "inline-block" }}>
            <IconChevronLeft />
          </span>
        </button>
        <h2 className="tour-title">Photo tour</h2>
        <div className="viewer-actions-right">
          <button
            className="round-icon-btn"
            type="button"
            aria-label="Share"
            onClick={onShareClick}
          >
            <span style={{ width: 18, height: 18, display: "inline-block" }}>
              <IconShare />
            </span>
          </button>
          <button className="round-icon-btn" type="button" aria-label="Save">
            <span style={{ width: 18, height: 18, display: "inline-block" }}>
              <IconSave />
            </span>
          </button>
        </div>
      </header>

      {/* Scrollable content */}
      <div className="tour-scroll" id="tourScroll" ref={scrollRef}>
        <div className="tour-inner">
          {/* Category nav thumbnails */}
          <nav
            className="tour-chips"
            id="tourNav"
            aria-label="Photo categories"
          >
            {ROOMS.map((room, i) => (
              <button
                key={room.id}
                className="tour-chip-btn"
                type="button"
                aria-label={room.name}
                onClick={() => scrollToRoom(i)}
              >
                <img loading="lazy" alt="" src={room.thumb} />
                <span className="stat-label">{room.name}</span>
              </button>
            ))}
          </nav>

          {/* Room sections */}
          <div className="tour-rooms" id="tourRooms">
            {ROOMS.map((room, rIdx) => {
              // Group photos: first single, then pairs, etc.
              const singles = [];
              const pairs = [];
              let i = 0;
              while (i < room.photos.length) {
                if (room.photos[i].layout === "single") {
                  singles.push([room.photos[i]]);
                  i++;
                } else {
                  // collect pair
                  const pair = [room.photos[i]];
                  if (
                    i + 1 < room.photos.length &&
                    room.photos[i + 1].layout !== "single"
                  ) {
                    pair.push(room.photos[i + 1]);
                    i += 2;
                  } else {
                    i++;
                  }
                  pairs.push(pair);
                }
              }

              // Compute flat index offset for this room
              const offset = ROOMS.slice(0, rIdx).reduce(
                (acc, r) => acc + r.photos.length,
                0,
              );

              // Rebuild into groups of [single] or [pair]
              const groups = [];
              let photoIdx = 0;
              for (let p of room.photos) {
                if (
                  groups.length === 0 ||
                  (p.layout === "single" &&
                    groups[groups.length - 1].length === 2) ||
                  (p.layout !== "single" &&
                    groups[groups.length - 1][0].layout === "single") ||
                  (p.layout !== "single" &&
                    groups[groups.length - 1].length === 2)
                ) {
                  groups.push([{ ...p, flatIdx: offset + photoIdx }]);
                } else {
                  groups[groups.length - 1].push({
                    ...p,
                    flatIdx: offset + photoIdx,
                  });
                }
                photoIdx++;
              }

              return (
                <section
                  className="tour-room-layout"
                  id={`tour-room-${rIdx}`}
                  key={room.id}
                >
                  {/* Sticky room label */}
                  <div className="tour-room-sticky">
                    <div className="tour-room-title">{room.name}</div>
                    {room.amenities && (
                      <div className="tour-room-sub">{room.amenities}</div>
                    )}
                  </div>

                  {/* Photo grids */}
                  <div className="tour-photos-list">
                    {groups.map((group, gIdx) => (
                      <div
                        key={gIdx}
                        className={`tour-photo-group ${group.length === 1 ? "tour-photo-group--single" : "tour-photo-group--double"}`}
                      >
                        {group.map((photo) => (
                          <button
                            key={photo.flatIdx}
                            className="tour-photo-btn"
                            type="button"
                            aria-label={`${room.name} photo`}
                            onClick={() => onPhotoClick(photo.flatIdx)}
                          >
                            <img
                              loading="lazy"
                              alt={room.name}
                              src={photo.src}
                            />
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Lightbox (single photo fullscreen) ──────────────────────────────────────
function Lightbox({ open, index, _onClose, onPrev, onNext, onShowTour }) {
  const photo = ALL_PHOTOS[index];

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onShowTour();
      }
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onShowTour, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`photo-viewer${open ? " is-open" : ""}`}
      id="lightbox"
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* Header */}
      <header className="viewer-header">
        <button
          className="viewer-close round-icon-btn"
          type="button"
          aria-label="Show all photos"
          id="lbGrid"
          onClick={onShowTour}
        >
          <span style={{ width: 18, height: 18, display: "inline-block" }}>
            <IconGrid />
          </span>
        </button>
        <div className="viewer-title" id="lbTitle">
          {photo?.room || ""}
        </div>
        <div className="viewer-actions">
          <span className="viewer-counter" id="lbCounter">
            {open ? `${index + 1} of ${ALL_PHOTOS.length}` : ""}
          </span>
          <button
            className="lb-close round-icon-btn"
            type="button"
            aria-label="Close"
            id="lbClose"
            onClick={onShowTour}
          >
            <span style={{ width: 18, height: 18, display: "inline-block" }}>
              <IconClose />
            </span>
          </button>
        </div>
      </header>

      {/* Prev */}
      <button
        className={`viewer-nav-btn viewer-prev round-icon-btn`}
        type="button"
        aria-label="Previous"
        id="lbPrev"
        disabled={index === 0}
        onClick={onPrev}
      >
        <span style={{ width: 14, height: 14, display: "inline-block" }}>
          <IconChevronLeft />
        </span>
      </button>

      {/* Image stage */}
      <div className="viewer-body" id="lbStage">
        {photo && (
          <img
            key={index}
            src={photo.src}
            alt={photo.room}
            className="lb-fade"
            style={{
              maxWidth: "min(1100px,100%)",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        )}
      </div>

      {/* Next */}
      <button
        className={`viewer-nav-btn viewer-next round-icon-btn`}
        type="button"
        aria-label="Next"
        id="lbNext"
        disabled={index === ALL_PHOTOS.length - 1}
        onClick={onNext}
      >
        <span style={{ width: 14, height: 14, display: "inline-block" }}>
          <IconChevronRight />
        </span>
      </button>
    </div>
  );
}

// ─── Main PhotoGallery component ──────────────────────────────────────────────
export default function PhotoGallery() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [initialRoomIndex, setInitialRoomIndex] = useState(null);
  const toastTimer = React.useRef(null);

  const handleSave = () => {
    const next = !saved;
    setSaved(next);
    setToastMsg(next ? "Saved to wishlist" : "Removed from wishlist");
    setShowToast(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 1500);
  };

  const handleShare = () => {
    setToastMsg("Share options");
    setShowToast(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 1500);
  };

  const openLightbox = useCallback((idx) => {
    setLbIndex(idx);
    setLbOpen(true);
    setTourOpen(false);
  }, []);

  const closeLightbox = useCallback(() => setLbOpen(false), []);

  const prevPhoto = useCallback(
    () => setLbIndex((i) => Math.max(0, i - 1)),
    [],
  );

  const nextPhoto = useCallback(
    () => setLbIndex((i) => Math.min(ALL_PHOTOS.length - 1, i + 1)),
    [],
  );

  const openTourFromLb = useCallback(() => {
    const photo = ALL_PHOTOS[lbIndex];
    if (photo) {
      const roomIdx = ROOMS.findIndex((r) => r.name === photo.room);
      if (roomIdx !== -1) {
        setInitialRoomIndex(roomIdx);
      }
    }
    setLbOpen(false);
    setTourOpen(true);
  }, [lbIndex]);

  const HERO = [
    "/airbnb_files/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg",
    "/airbnb_files/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg",
    "/airbnb_files/9be71047-fc52-438a-9270-75cb470f6752.jpeg",
    "/airbnb_files/67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
    "/airbnb_files/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg",
  ];

  return (
    <>
      {/* Title + action buttons */}
      <section className="listing-title-row" id="photos">
        <h1 className="listing-title">
          Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
        </h1>
        <div className="listing-actions">
          <button
            className="action-btn"
            type="button"
            id="shareBtn"
            onClick={handleShare}
          >
            <span className="action-btn-icon">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{
                  width: "100%",
                  height: "100%",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  fill: "none",
                }}
              >
                <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" />
              </svg>
            </span>
            <span className="action-btn-label">Share</span>
          </button>
          <button
            className="action-btn action-btn--save"
            type="button"
            id="saveBtn"
            onClick={handleSave}
          >
            <span className="action-btn-icon">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{
                  width: "100%",
                  height: "100%",
                  fill: saved ? "#ff385c" : "none",
                  stroke: saved ? "none" : "#222222",
                  strokeWidth: saved ? 0 : 2,
                }}
              >
                <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
              </svg>
            </span>
            <span className="action-btn-label">{saved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </section>

      {/* Hero photo grid — clicking opens tour */}
      <section
        className="photo-gallery"
        aria-label="Photos of this place"
        id="photo-gallery"
      >
        <div className="photo-grid" id="heroGrid">
          {HERO.map((src, i) => (
            <button
              key={i}
              className="photo-cell"
              type="button"
              aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image ${i + 1}`}
              onClick={() => {
                let targetIdx = 0;
                if (i < 3) {
                  targetIdx = 1; // living room 2
                } else if (i === 3) {
                  targetIdx = 2; // bedroom
                } else if (i === 4) {
                  targetIdx = 6; // exterior
                }
                setInitialRoomIndex(targetIdx);
                setTourOpen(true);
              }}
            >
              <img
                src={src}
                alt=""
                decoding="async"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>

        {/* "Show all photos" button */}
        <button
          className="show-all-btn"
          type="button"
          id="showAllPhotos"
          onClick={() => {
            setInitialRoomIndex(null);
            setTourOpen(true);
          }}
        >
          <span className="show-all-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              style={{ width: "100%", height: "100%", fill: "currentColor" }}
            >
              <path
                fillRule="evenodd"
                d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              />
            </svg>
          </span>
          Show all photos
        </button>
      </section>

      {/* Photo Tour Modal */}
      <PhotoTour
        open={tourOpen}
        onClose={() => {
          setTourOpen(false);
          setInitialRoomIndex(null);
        }}
        onPhotoClick={openLightbox}
        initialRoomIndex={initialRoomIndex}
        onShareClick={handleShare}
      />

      {/* Lightbox Modal */}
      <Lightbox
        open={lbOpen}
        index={lbIndex}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
        onShowTour={openTourFromLb}
      />

      {/* Saved to wishlist Toast */}
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
    </>
  );
}
