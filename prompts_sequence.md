# AI-Assisted Development: Prompt Sequence & Workflow

This document records the prompt sequence, instruction paradigms, and iterative development phases followed to build this pixel-perfect Airbnb listing page clone.

---

## Phase 1: Environment Setup & Core Styling Foundation
* **Goal**: Establish the React + Vite environment, standard fonts (Airbnb Cereal VF, Inter), styling tokens, and layout guidelines.
* **Key Prompts / Instructions**:
  1. *"Set up index.css with custom design tokens for light-mode surfaces, semantic text variables, standard borders, and typography scaling (Inter / Airbnb Cereal VF)."*
  2. *"Create the structural components directory representing Header, ListingDetails, Reviews, and StickyNav."*

---

## Phase 2: Building Listing Page Layout & Sticky Navigation
* **Goal**: Recreate the listing layout, responsive split view (left content, right booking sidebar), and intersection-based sticky navigation bar.
* **Key Prompts / Instructions**:
  1. *"Build the StickyNav component. Implement an IntersectionObserver to automatically highlight active sections ('Photos', 'Amenities', 'Reviews', 'Location') as the user scrolls, adjusting scroll positioning smoothly by subtracting header height."*
  2. *"Implement responsive columns: wide layout on desktop (split columns), collapsing to full-width stack with fixed bottom reserve bar on mobile (under 743px viewport)."*

---

## Phase 3: Implementing Modals & Custom overlays
* **Goal**: Create overlay layers (AmenitiesModal, Photo Tour Modal, Lightbox Photo Viewer).
* **Key Prompts / Instructions**:
  1. *"Implement a PhotoTour component containing category navigation chips that collapse/expand dynamically when scrolling to save screen space."*
  2. *"Create a Lightbox modal that takes a start index, supports left/right arrows for photo navigation, displays the photo counter (e.g., '3 of 50'), and locks background scroll via overflow-hidden on the body."*

---

## Phase 4: Refinement of Keyboard Accessibility & Escape Key Flow
* **Goal**: Perfect interaction parity with the reference page, specifically for keyboard navigation and accessibility.
* **Key Prompts / Instructions**:
  1. *"Update the keydown event listener in the Lightbox component. When the Lightbox is active, pressing the 'Escape' key must close the Lightbox and return the user to the active Photo Tour modal (Photo Gallery grid) rather than closing all overlays and returning to the home page. A second press of the 'Escape' key from the Photo Tour modal should then close it."*
  2. *"Run static analysis / linting to check for unused imports or variables, and run a production Vite build to ensure zero errors."*

---

## Phase 5: Submission Audit & Documentation
* **Goal**: Audit code against active guidelines and prepare deployment bundle.
