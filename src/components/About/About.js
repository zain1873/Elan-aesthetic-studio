"use client";

import { useState, useRef, useEffect } from "react";
import "./About.css";

// Simple tab data - edit text here to change nav labels/content
const TABS = [
  {
    id: "about",
    label: "About Us",
    content: (
      <>
        <p>
          NY Aesthetics is a premier{" "}
          <strong>aesthetic clinic in Lahore</strong> dedicated to helping
          every client look and feel their absolute best. Our mission is to
          deliver safe, effective, and deeply personalized treatments that
          enhance your natural beauty and improve long-term skin health.
        </p>
        <p>
          We combine expert dermatologists — including the{" "}
          <strong>best female dermatologists in Lahore</strong> — with
          advanced technology and compassionate care. Every treatment is
          tailored to your unique skin type and concerns, because we believe
          great skin begins with truly understanding the person in front of
          us.
        </p>
      </>
    ),
  },
  {
    id: "mission",
    label: "Our Mission",
    content: (
      <p>
        Our mission is to make world-class dermatological care accessible,
        combining cutting-edge technology with a warm, personal touch so
        every client leaves feeling confident in their own skin.
      </p>
    ),
  },
  {
    id: "vision",
    label: "Our Vision",
    content: (
      <p>
        We envision a future where quality aesthetic care is trusted,
        transparent, and tailored — setting the standard for skin health
        across the region.
      </p>
    ),
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");
  const active = TABS.find((tab) => tab.id === activeTab);

  // Parallax: move the image up/down inside its frame as the page scrolls
  const imageWrapRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const el = imageWrapRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // How far the element's center is from the viewport center, as a ratio
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distance = elementCenter - viewportCenter;

      // Tune this multiplier to control how strong the movement is
      const speed = 0.15;
      setOffsetY(distance * speed);

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
    <section className="about-section bg-black py-16 md:py-24 px-6 md:px-12">
      <div className="about-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left side: nav tabs + text */}
        <div className="about-left flex flex-col gap-8">
          <nav
            className="about-tabs flex flex-wrap gap-6 md:gap-10"
            role="tablist"
            aria-label="About navigation"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`about-tab text-sm md:text-base tracking-wide uppercase font-medium ${
                  activeTab === tab.id ? "about-tab-active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="about-copy flex flex-col gap-5 text-gray-300 text-base md:text-lg leading-relaxed">
            {active.content}
          </div>
        </div>

        {/* Right side: image + experience badge */}
        <div className="about-right relative">
          <div
            ref={imageWrapRef}
            className="about-image-wrap relative w-full h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
              alt="Dermatologist performing a facial treatment"
              className="about-image"
              style={{ transform: `translateY(${offsetY}px)` }}
            />
            <div className="about-badge absolute bottom-0 left-0 flex flex-col items-center justify-center text-center">
              <span className="about-badge-number">10+</span>
              <span className="about-badge-label uppercase font-semibold text-xs md:text-sm">
                Year of
                <br />
                Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}