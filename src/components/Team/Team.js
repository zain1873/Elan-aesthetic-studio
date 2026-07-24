"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import "./Team.css";

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

export default function TeamSection() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef(null);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);
  const isDragged = useRef(false);

  const totalSlides = TEAM.length;
  const visibleSlides = 3;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

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

  return (
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
  );
}