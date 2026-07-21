"use client";

import { useState, useEffect, useRef } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Skin Treatments", href: "/services/skin-treatments" },
  { label: "Thread Lifts", href: "/services/thread-lifts" },
  { label: "Anti-Aging Treatments", href: "/services/anti-aging-treatments" },
  { label: "Exosome Therapy", href: "/services/exosome-therapy" },
  { label: "Medicated Facials", href: "/services/medicated-facials" },
  { label: "Dental Aesthetic Treatments", href: "/services/dental-aesthetic-treatments" },
  { label: "Hair Treatments", href: "/services/hair-treatments" },
  { label: "Fat Reduction Treatments", href: "/services/fat-reduction-treatments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Timings must match Navbar.css transition durations
const PANEL_OPEN_TIME = 700;
// The longest exit animation: .info-block:nth-child(1) = 360ms delay + 500ms transition = 860ms total.
// Add 60ms buffer → 920ms ensures all stagger animations complete before unmount.
const CONTENT_EXIT_TIME = 920;
// Panel slide-back duration must match .panel-left, .panel-right { transition: transform 0.7s cubic-bezier(...) }
const PANEL_SLIDE_TIME = 700;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState("closed"); // closed | mounting | entering | entered | exiting | sliding-out
  const timer = useRef(null);
  const raf = useRef(null);
  const pathname = usePathname();

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  /** Immediately close overlay, clearing all timers — used for nav link clicks */
  function closeMenuImmediately() {
    if (raf.current) cancelAnimationFrame(raf.current);
    clearTimeout(timer.current);
    timer.current = null;
    raf.current = null;
    setPhase("closed");
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  // Safety net: if pathname changes while overlay is open, force-close it
  useEffect(() => {
    if (phase !== "closed") {
      closeMenuImmediately();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    clearTimeout(timer.current);
    if (raf.current) cancelAnimationFrame(raf.current);

    if (isOpen) {
      setPhase("mounting");

      raf.current = requestAnimationFrame(() => {
        raf.current = requestAnimationFrame(() => {
          setPhase("entering");
          raf.current = null;
          timer.current = setTimeout(() => setPhase("entered"), PANEL_OPEN_TIME);
        });
      });
    } else {
      // If phase is already "closed", the overlay was force-closed — skip exit animation entirely
      if (phase === "closed") return;

      // Stage A: links fade out one by one (reverse stagger)
      setPhase((prev) => (prev === "closed" || prev === "mounting" ? "closed" : "exiting"));

      timer.current = setTimeout(() => {
        // Stage B: panels slide back to closed positions
        setPhase("sliding-out");
        timer.current = setTimeout(() => setPhase("closed"), PANEL_SLIDE_TIME);
      }, CONTENT_EXIT_TIME);
    }

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      clearTimeout(timer.current);
    };
  }, [isOpen]);

  useEffect(() => {
    console.log(`[Navbar] phase: "${phase}" | isOpen: ${isOpen} | time: ${Date.now()}`);
  }, [phase, isOpen]);

  const showOverlay = phase !== "closed";
  const overlayVisible = phase === "entering" || phase === "entered" || phase === "exiting" || phase === "sliding-out";
  const panelsOpen = phase === "entering" || phase === "entered" || phase === "exiting"; // NOT "sliding-out"
  const contentVisible = phase === "entered";
  const contentExiting = phase === "exiting";

  useEffect(() => {
    if (!showOverlay) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [showOverlay]);

  useEffect(() => {
    if (!showOverlay) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showOverlay]);

  let stateClass = "";
  if (contentVisible) stateClass = "visible";
  if (contentExiting) stateClass = "exiting";

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <a href="/" aria-label="NY Aesthetics — Home" className="logo">
            <img src="/images/logo.png" alt="NY Aesthetics" className="logo-img" />
          </a>

          <div className="navbar-controls">
            <a href="tel:03250005222" className="call-button">
              CALL: 0325-0005222
            </a>

            <button
              type="button"
              onClick={openMenu}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
              aria-label="Open menu"
              className="menu-button"
            >
              <span className="menu-icon" aria-hidden="true">
                <Menu size={22} strokeWidth={1.5} color="#0a0a0f" />
              </span>
              <span className="menu-label" aria-hidden="true">
                <span className="menu-label-track">
                  <span>MENU</span>
                  <span>MENU</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {showOverlay && (
        <div className={`overlay ${overlayVisible ? "overlay-visible" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="close-button"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          <div className="overlay-grid">
            <div className={`panel-left ${panelsOpen ? "panel-open" : ""}`}>
              <nav className={`nav-list ${stateClass}`}>
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={closeMenuImmediately} className="nav-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className={`panel-right ${panelsOpen ? "panel-open" : ""}`}>
              <div className={`panel-right-content ${stateClass}`}>
                <div className="info-block">
                  <h3 className="info-title">Brief us</h3>
                  <a href="mailto:Nyaesthetic25@gmail.com" className="info-link">
                    Nyaesthetic25@gmail.com
                  </a>
                  <a href="tel:03250005222" className="info-link">
                    Phone. 0325-0005222
                  </a>
                </div>

                <div className="info-block">
                  <h3 className="info-title">Our Clinic</h3>
                  <p className="info-text">
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=20+C%2FD-1+Liberty+Market+Gulberg+III+Lahore"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        20 C/D-1 Liberty Market Gulberg III Lahore.
                      </a>
                    </p>
                </div>

                <div className="info-block">
                  <h3 className="info-title">Follow us</h3>
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
                      <span aria-hidden="true">↗</span> Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                      <span aria-hidden="true">↗</span> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}