"use client";

import { useState, useEffect, useRef } from "react";
import "./Stats.css";

// --- Inline icons (no external package needed) ---
function ClipboardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M20 20c0-2.6-1.8-4.8-4-5.5" />
    </svg>
  );
}
function GiftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M4 9h16v3H4z" />
      <path d="M12 9v11" />
      <path d="M12 9c-1.5-4-6-4-6-1 0 1.5 1.5 1 6 1z" />
      <path d="M12 9c1.5-4 6-4 6-1 0 1.5-1.5 1-6 1z" />
    </svg>
  );
}
function UserCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6 19c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5" />
    </svg>
  );
}

// Edit numbers/labels/icons here.
// `target` = the number to count up to, `suffix` = text after it (e.g. "+")
const STATS = [
  { id: "treatments", icon: ClipboardIcon, target: 1000, suffix: "+", label: "Treatments Performed" },
  { id: "specialists", icon: UsersIcon, target: 5, suffix: "", label: "Certified Specialists" },
  { id: "awards", icon: GiftIcon, target: 15, suffix: "+", label: "Awards & Recognitions" },
  { id: "clients", icon: UserCircleIcon, target: 500, suffix: "+", label: "Happy Clients" },
];

function formatNumber(num) {
  return Math.round(num).toLocaleString("en-US");
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false); // ref instead of state - avoids re-triggering effect
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    function runCountAnimation() {
      const duration = 1500;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(STATS.map((stat) => stat.target * eased));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setCounts(STATS.map((stat) => stat.target));
        }
      }
      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            runCountAnimation();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section py-10 md:py-14 px-6 md:px-12">
      <div className="stats-grid max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {STATS.map(({ id, icon: Icon, suffix, label }, index) => (
          <div key={id} className="stat-item flex flex-col gap-2">
            <div className="stat-top flex items-center gap-4">
              <Icon className="stat-icon" />
              <span className="stat-value">
                {formatNumber(counts[index])}
                {suffix}
              </span>
            </div>
            <span className="stat-label uppercase font-semibold text-xs md:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}