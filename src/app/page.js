"use client";

import { useEffect, useRef } from "react";
import AboutSection from "@/components/About/About";
import StatsSection from "@/components/Stats/Stats";
import ServicesSection from "@/components/Services/Service";
import Cta from "@/components/Cta/Cta";
import Appointment from "@/components/Appointment/Appointment";
import Testimonials from "@/components/Testimonial/Testimonial";
import BlogSection from "@/components/Blog/Blog";
import TeamSection from "@/components/Team/Team";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1758448500688-3ababa93fd67?fm=jpg&q=80&w=2400&auto=format&fit=crop";

export default function Home() {
  // Parallax: use refs + direct DOM manipulation to avoid React re-renders
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

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

      // Direct DOM manipulation — no React re-renders
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.15) translateY(${distance * bgSpeed}px)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${distance * textSpeed}px)`;
      }

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
    <>
      {/* ===== Hero / Banner ===== */}
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden"
      >
        {/* Background image */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE})`,
            transform: `scale(1.15) translateY(0px)`,
          }}
          aria-hidden="true"
        />

        {/* Gradient overlay: solid black up top fading down into the photo */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/20"
          aria-hidden="true"
        />

        {/* Decorative overlapping circles, top right */}
        <div className="absolute right-4 top-10 flex items-center sm:right-8 sm:top-14 md:right-12 md:top-16">
          <div className="h-10 w-10 rounded-full border border-white/70 sm:h-14 sm:w-14 md:h-16 md:w-16 circle-banner" />
          <div className="-ml-4 h-12 w-12 rounded-full bg-sky-200 sm:-ml-6 sm:h-16 sm:w-16 md:-ml-7 md:h-20 md:w-20 circle-banner" />
        </div>

        {/* Content */}
        <div
          ref={textRef}
          className="banner relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 md:px-14 md:py-24 lg:py-28"
          style={{ transform: `translateY(0px)` }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:mb-6 sm:text-sm md:text-base">
            A Leading Aesthetic Clinic in Lahore
          </p>

          <h1 className=" leading-[1.05] tracking-tight">
            <span className="block text-4xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Where Aesthetics
            </span>
            <span className="mt-1 block text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-neutral-400">Meet</span>{" "}
              <span className="theme-color">Luxury Care.</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Homepage sections — only rendered on "/" */}
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <Cta />
      <Appointment />
      <Testimonials />
      <BlogSection />
    </>
  );
}
