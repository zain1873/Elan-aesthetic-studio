"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import "./AboutPage.css";

// ─── Inline SVG Icons for Values ───
function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function LightbulbIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}
function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function SparklesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M18.5 14.5L20 16l-1.5 1.5L17 16l1.5-1.5z" />
      <path d="M6 16l1.5 1.5L9 16l-1.5-1.5L6 16z" />
    </svg>
  );
}

// ─── Data ───
const VALUES = [
  {
    icon: ShieldIcon,
    title: "Safety First",
    desc: "Every treatment follows strict medical protocols. We prioritize your health and safety above all, using only approved, premium-grade products and sterilized equipment.",
  },
  {
    icon: HeartIcon,
    title: "Compassionate Care",
    desc: "We listen, understand, and tailor every treatment to your unique needs. Our warm, supportive team ensures you feel comfortable and valued throughout your journey.",
  },
  {
    icon: StarIcon,
    title: "Excellence Always",
    desc: "From our expert dermatologists to cutting-edge technology, we pursue the highest standards in aesthetic medicine to deliver exceptional, lasting results.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation Driven",
    desc: "We stay at the forefront of aesthetic science, continuously adopting the latest techniques and technologies to offer you the most effective treatments available.",
  },
  {
    icon: UsersIcon,
    title: "Client Centered",
    desc: "Your goals define our approach. We build lasting relationships based on trust, transparency, and a genuine commitment to helping you look and feel your best.",
  },
  {
    icon: SparklesIcon,
    title: "Natural Results",
    desc: "We believe in enhancing your natural beauty, not masking it. Our treatments are designed to deliver subtle, refined results that leave you looking refreshed and radiant.",
  },
];

const TEAM = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Lead Dermatologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Maria Khan",
    role: "Cosmetic Dermatologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ayesha Malik",
    role: "Clinical Aesthetician",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Fatima Ali",
    role: "Senior Aesthetic Consultant",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Zara Hussain",
    role: "Skin Care Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage() {
  const heroBgRef = useRef(null);
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  // Ref for the story section image — used for its scroll parallax
  const storyImageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef(null);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);
  const isDragged = useRef(false);

  const totalSlides = TEAM.length;
  const visibleSlides = 3;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  // Parallax speed for the story image (same idea as About.jsx's speed = 0.15)
  const STORY_IMAGE_SPEED = 0.15;

  // Parallax for hero background + story image
  useEffect(() => {
    const bg = heroBgRef.current;

    let ticking = false;
    const update = () => {
      ticking = false;

      if (bg) {
        const offset = window.scrollY * 0.3;
        bg.style.transform = `translate3d(0, ${offset}px, 0)`;
      }

      // Story image parallax — distance of element center from viewport center * speed,
      // set as a CSS variable so it combines with the existing hover scale() transform
      const storyImg = storyImageRef.current;
      if (storyImg) {
        const rect = storyImg.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = elementCenter - viewportCenter;
        storyImg.style.setProperty(
          "--story-parallax-offset",
          `${distance * STORY_IMAGE_SPEED}px`
        );
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Auto-play: slide every 3 seconds
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 3000);
  }, [maxIndex]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Go to a specific slide
  const goTo = useCallback((index) => {
    stopAutoPlay();
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    startAutoPlay();
  }, [maxIndex, startAutoPlay, stopAutoPlay]);

  const goNext = useCallback(() => {
    goTo(currentIndex + 1 > maxIndex ? 0 : currentIndex + 1);
  }, [currentIndex, maxIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1 < 0 ? maxIndex : currentIndex - 1);
  }, [currentIndex, maxIndex, goTo]);

  // Mouse / touch drag handlers
  const handleDragStart = useCallback((clientX) => {
    stopAutoPlay();
    setIsDragging(true);
    isDragged.current = false;
    dragStartX.current = clientX;
    dragOffset.current = 0;
    if (trackRef.current) {
      trackRef.current.classList.add("no-transition");
    }
  }, [stopAutoPlay]);

  const handleDragMove = useCallback((clientX) => {
    if (!isDragging) return;
    const diff = clientX - dragStartX.current;
    if (Math.abs(diff) > 5) isDragged.current = true;
    dragOffset.current = diff;
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector(".about-team-card")?.offsetWidth || 0;
      const gap = 30;
      const offset = -(currentIndex * (cardWidth + gap)) + diff;
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [isDragging, currentIndex]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.classList.remove("no-transition");
      trackRef.current.style.transform = "";
    }
    if (isDragged.current) {
      if (dragOffset.current < -50) goNext();
      else if (dragOffset.current > 50) goPrev();
      else startAutoPlay();
    } else {
      startAutoPlay();
    }
  }, [isDragging, goNext, goPrev, startAutoPlay]);

  const onMouseDown = (e) => handleDragStart(e.clientX);
  const onMouseMove = (e) => handleDragMove(e.clientX);
  const onMouseUp = () => handleDragEnd();
  const onMouseLeave = () => { if (isDragging) handleDragEnd(); };
  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = () => handleDragEnd();

  const cardWidth = `calc((100% - ${(visibleSlides - 1) * 30}px) / ${visibleSlides})`;

  // Compute track offset in pixels
  const getTrackOffset = useCallback(() => {
    if (!trackRef.current) return 0;
    const firstCard = trackRef.current.querySelector(".about-team-card");
    if (!firstCard) return 0;
    const cardW = firstCard.offsetWidth;
    return -(currentIndex * (cardW + 30));
  }, [currentIndex]);

  const [trackOffset, setTrackOffset] = useState(0);

  useEffect(() => {
    setTrackOffset(getTrackOffset());
  }, [currentIndex, getTrackOffset]);

  // Recalculate on resize
  useEffect(() => {
    const onResize = () => setTrackOffset(getTrackOffset());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getTrackOffset]);

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="about-hero">
        <div
          className="about-hero-bg"
          ref={heroBgRef}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <div className="about-hero-eyebrow">
            <span className="dot" />
            <span>About Us</span>
          </div>
          <h1 className="about-hero-title">
            Our Story
          </h1>
          <p className="about-hero-subtitle">
            Discover the passion, expertise, and care that make NY Aesthetics a
            trusted destination for advanced aesthetic treatments in Lahore.
          </p>
        </div>
      </section>

      {/* ─── Story Section ─── */}
      <section className="about-story-section">
        <div className="about-story-inner">
          <div className="about-story-grid">
            <div className="about-story-image-wrapper">
              <img
                ref={storyImageRef}
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
                alt="Our clinic interior"
                className="about-story-image"
                loading="eager"
              />
              <div className="about-story-image-overlay" />
              <div className="about-story-badge">
                <span className="about-story-badge-number">10+</span>
                <span className="about-story-badge-label">
                  Years of Experience
                </span>
              </div>
            </div>

            <div className="about-story-content">
              <div className="about-story-eyebrow">
                <span className="dot" />
                <span>Who We Are</span>
              </div>
              <h2 className="about-story-title">
                Enhancing Your <span className="title-gray">Natural Beauty</span>
              </h2>
              <div className="about-story-text">
                <p>
                  NY Aesthetics is a premier{" "}
                  <strong>aesthetic clinic in Lahore</strong> dedicated to helping
                  every client look and feel their absolute best. Our mission is to
                  deliver safe, effective, and deeply personalized treatments that
                  enhance your natural beauty and improve long-term skin health.
                </p>
                <br />
                <p>
                  We combine expert dermatologists — including the{" "}
                  <strong>best female dermatologists in Lahore</strong> — with
                  advanced technology and compassionate care. Every treatment is
                  tailored to your unique skin type and concerns, because we believe
                  great skin begins with truly understanding the person in front of us.
                </p>
                <br />
                <p>
                  Our state-of-the-art clinic in Liberty Market, Gulberg III, is
                  designed to provide a serene, luxurious environment where you can
                  relax and trust that you are in expert hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values Section ─── */}
      <section className="about-values-section">
        <div className="about-values-inner">
          <div className="about-values-header">
            <div className="about-values-eyebrow">
              <span className="dot" />
              <span>What We Stand For</span>
            </div>
            <h2 className="about-values-title">
              Our <span className="title-gray">Core Values</span>
            </h2>
          </div>

          <div className="about-values-grid">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="about-value-card">
                <Icon className="about-value-icon" />
                <h3 className="about-value-title">{title}</h3>
                <p className="about-value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team Section ─── */}
      <section className="about-team-section">
        <div className="about-team-inner">
          <div className="about-team-header">
            <div className="about-team-eyebrow">
              <span className="dot" />
              <span>Meet Our Experts</span>
            </div>
            <h2 className="about-team-title">
              Dedicated <span className="title-gray">Professionals</span>
            </h2>
          </div>

          <div
            className={`about-team-carousel-wrapper ${isDragging ? "dragging" : ""}`}
            ref={wrapperRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Left arrow */}
            <button
              type="button"
              className="about-team-arrow about-team-arrow--left"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Track */}
            <div
              className="about-team-carousel-track"
              ref={trackRef}
              style={{ transform: `translateX(calc(-${currentIndex} * (${cardWidth} + 30px)))` }}
            >
              {TEAM.map(({ name, role, image }) => (
                <div key={name} className="about-team-card" style={{ flex: `0 0 ${cardWidth}` }}>
                  <div className="about-team-image-wrapper">
                    <img
                      src={image}
                      alt={name}
                      className="about-team-image"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <h3 className="about-team-name">{name}</h3>
                  <p className="about-team-role">{role}</p>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              type="button"
              className="about-team-arrow about-team-arrow--right"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="about-team-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`about-team-dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="about-cta-section">
        <div className="about-cta-bg" />
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Begin Your Journey</h2>
          <p className="about-cta-text">
            Experience the difference that personalized, expert care makes.
            Schedule your consultation today and take the first step toward
            looking and feeling your absolute best.
          </p>
          <a href="/contact" className="about-cta-button">
            Book Your Consultation
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