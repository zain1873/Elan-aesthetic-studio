"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Cta.css";

export default function Cta() {

  const sectionRef = useRef(null);
  const [bgOffsetY, setBgOffsetY] = useState(0);
  const [textOffsetY, setTextOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distance = elementCenter - viewportCenter;

      const bgSpeed = 0.06;
      const textSpeed = 0.12;
      setBgOffsetY(distance * bgSpeed);
      setTextOffsetY(distance * textSpeed);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="cta" ref={sectionRef}>
      {/* Background image + dark overlay */}
      <Image
        src="/images/cta.webp"
        alt=""
        fill
        priority
        className="cta__bg"
        style={{ transform: `scale(1.15) translateY(${bgOffsetY}px)` }}
      />
      <div className="cta__overlay" />

      {/* Main content */}
      <div
        className="cta__content"
        style={{ transform: `translateY(${textOffsetY}px)` }}
      >
        <h1 className="cta__title">
          Ready For Your
          <span className="cta__title--accent">Transformation?</span>
        </h1>

        <button className="cta__button">
          Get In Touch
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Bottom bar */}
      <div className="cta__footer">
        <p className="cta__eyebrow upper-title">
          <span className="cta__dot" />
          Contact Us
        </p>
        <h2 className="cta__footer-title">
          Book Your
          <span className="cta__footer-title--muted">Consultation Now</span>
        </h2>
      </div>
    </section>
  );
}