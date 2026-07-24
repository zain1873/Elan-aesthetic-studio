"use client";
import { useEffect, useRef } from "react";
import "./ContactPage.css";
import Appointment from "@/components/Appointment/Appointment";
import Testimonials from "@/components/Testimonial/Testimonial";

// ─── Inline SVG Icons ───
function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ─── Contact Info Data ───
const CONTACT_INFO = [
  {
    icon: MapPinIcon,
    title: "Visit Us",
    details: [
      "19-D, Block A1, Liberty Market,",
      "Gulberg III, Lahore, Punjab, Pakistan",
    ],
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    details: ["+92 300 1234567", "+92 42 1234567"],
  },
  {
    icon: MailIcon,
    title: "Email Us",
    details: ["info@nyaesthetics.com", "bookings@nyaesthetics.com"],
  },
  {
    icon: ClockIcon,
    title: "Working Hours",
    details: [
      "Monday – Friday: 10:00 AM – 8:00 PM",
      "Saturday: 10:00 AM – 6:00 PM",
      "Sunday: Closed",
    ],
  },
];

export default function ContactPage() {
  const heroBgRef = useRef(null);

  // Parallax effect for hero background
  useEffect(() => {
    const bg = heroBgRef.current;
    if (!bg) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const offset = window.scrollY * 0.3;
      bg.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="contact-hero">
        <div
          className="contact-hero-bg"
          ref={heroBgRef}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <div className="contact-hero-eyebrow">
            <span className="dot" />
            <span>Get In Touch</span>
          </div>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            We'd love to hear from you. Reach out to our team for inquiries,
            consultations, or to schedule your visit to NY Aesthetics.
          </p>
        </div>
      </section>

      {/* ─── Appointment Section ─── */}
      <section className="contact-appointment-section">
        <div className="contact-appointment-inner">
          <div className="contact-appointment-header">
            <div className="contact-appointment-eyebrow">
              <span className="dot" />
              <span>Book Now</span>
            </div>
            <h2 className="contact-appointment-title">
              Schedule Your <span className="title-gray">Consultation</span>
            </h2>
          </div>
          <Appointment />
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="contact-testimonials-section">
        <Testimonials />
      </section>

      {/* ─── CTA Section ─── */}
      <section className="contact-cta-section">
        <div className="contact-cta-bg" />
        <div className="contact-cta-inner">
          <h2 className="contact-cta-title">Begin Your Journey</h2>
          <p className="contact-cta-text">
            Experience the difference that personalized, expert care makes.
            Schedule your consultation today and take the first step toward
            looking and feeling your absolute best.
          </p>
          <a href="/services" className="contact-cta-button">
            Explore Our Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}