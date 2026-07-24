"use client";
import { useEffect, useRef } from "react";
import "./Service.css";

function FaceIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 20c0-2 1.3-3 3-3s3 1 3 3" />
      <path d="M10 8.5c.3.3.7.3 1 0" />
      <path d="M13 8.5c.3.3.7.3 1 0" />
    </svg>
  );
}
function HairIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M9 3c3 0 5 2.5 5 6 0 3-2 4.5-2 7 0 2 1 3.5 1 3.5" />
      <path d="M9 3c-2.5 0-4 2-4 4.5 0 2 1 3 1 3" />
      <path d="M9 10c1.5 0 2.5 1 2.5 2.5" />
    </svg>
  );
}
function BodyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M7 10c1-1.3 2.8-2 5-2s4 .7 5 2" />
      <path d="M8 10v4c0 3 1.5 5 4 5s4-2 4-5v-4" />
    </svg>
  );
}
function ToothIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M7 4c-2 0-3 1.6-3 3.6 0 3 1 6 2 9 .5 1.5 1 2.4 1.8 2.4.9 0 1-2 1.2-3.5.2-1.3.6-2 1.5-2s1.3.7 1.5 2c.2 1.5.3 3.5 1.2 3.5.8 0 1.3-.9 1.8-2.4 1-3 2-6 2-9C17 5.6 16 4 14 4c-1.2 0-1.8.6-2.5.6S9.2 4 8 4" />
    </svg>
  );
}
function LeafMaskIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 3c4 1 6 4 6 8 0 5-3 9-6 10-3-1-6-5-6-10 0-4 2-7 6-8Z" />
      <path d="M12 4v16" />
    </svg>
  );
}
function MoleculeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="6" r="2" />
      <circle cx="17" cy="17" r="2" />
      <circle cx="7" cy="16" r="2" />
      <circle cx="12" cy="11.5" r="2" />
      <path d="M8.5 8.2 10.3 10" />
      <path d="M15.3 7.3 13.5 10" />
      <path d="M13.5 13 15.3 15.7" />
      <path d="M10.3 13 8.5 14.8" />
    </svg>
  );
}

// Edit services here — title, description, icon
const SERVICES = [
  {
    id: "skin",
    icon: FaceIcon,
    title: "Skin Treatments",
    description:
      "Reveal your most radiant skin with our advanced skin care treatments at NY Aesthetics. From HydraFacials to chemical peels, our team of expert dermatologists ensures your skin looks healthy, glowing, and beautifully rejuvenated.",
  },
  {
    id: "hair",
    icon: HairIcon,
    title: "Hair Treatments",
    description:
      "Restore volume, and strength with our advanced hair care solutions. From PRP therapy to targeted scalp treatments, we help reduce hair fall, stimulate regrowth, and improve overall hair health using clinically proven techniques.",
  },
  {
    id: "fat-reduction",
    icon: BodyIcon,
    title: "Fat Reduction Treatments",
    description:
      "Sculpt your body and eliminate stubborn fat with our advanced fat reduction therapies. Using safe, non-invasive techniques, NY Aesthetics helps you achieve a toned, contoured figure without surgery or downtime.",
  },
  {
    id: "dental",
    icon: ToothIcon,
    title: "Dental Aesthetic Treatments",
    description:
      "Achieve a confident smile with our specialized dental aesthetic treatments. From teeth whitening to cosmetic dental procedures, NY Aesthetics ensures safe, professional, and effective care for your smile.",
  },
  {
    id: "facials",
    icon: LeafMaskIcon,
    title: "Medicated Facials",
    description:
      "Our medicated facials target specific skin concerns such as acne, pigmentation, and dullness. Each facial is customized to restore your skin's health while enhancing your natural beauty.",
  },
  {
    id: "exosome",
    icon: MoleculeIcon,
    title: "Exosome Therapy",
    description:
      "Exosome therapy is a cutting-edge regenerative treatment that uses cell-derived exosomes to rejuvenate and repair. At NY Aesthetics, we do this therapy for natural, youthful results.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  // Holds each card's logo image element, keyed by service id
  const imageRefs = useRef({});

  // Speeds: how fast each layer moves relative to normal scroll.
  // 0 = fixed in place, 1 = scrolls at normal speed.
  const BG_SPEED = 0.35; // background drifts slowly
  const CONTENT_SPEED = 0.08; // text/cards drift very slightly for depth
  const IMAGE_SPEED = 0.15; // per-card image parallax speed

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !bg) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Only animate while the section is anywhere near the viewport
      if (rect.bottom < -200 || rect.top > viewportH + 200) return;

      // Distance scrolled through the section, centered around 0
      // when the section is centered in the viewport.
      const progress = viewportH - rect.top;

      const bgOffset = (progress - viewportH / 2) * BG_SPEED;
      bg.style.transform = `translate3d(0, ${bgOffset}px, 0)`;

      if (content) {
        const contentOffset = (progress - viewportH / 2) * CONTENT_SPEED;
        content.style.transform = `translate3d(0, ${contentOffset}px, 0)`;
      }

      // Parallax for each individual service card's image
      Object.values(imageRefs.current).forEach((el) => {
        if (!el) return;
        const imgRect = el.getBoundingClientRect();
        const elementCenter = imgRect.top + imgRect.height / 2;
        const viewportCenter = viewportH / 2;
        const distance = elementCenter - viewportCenter;
        // Set a CSS variable instead of overwriting transform directly,
        // so the hover slide-in transform in CSS keeps working
        el.style.setProperty("--parallax-offset", `${distance * IMAGE_SPEED}px`);
      });
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

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-bg-overlay" ref={bgRef} />

      <div
        className="services-inner max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
        ref={contentRef}
      >
        {/* Header */}
        <div className="services-header relative">
          <div className="services-eyebrow flex items-center gap-2">
            <span className="eyebrow-dot" />
            <span className="uppercase text-xs md:text-sm tracking-widest font-medium upper-title">
              Core Services
            </span>
          </div>
          <h2 className="services-title theme-title">
            <span className="title-white">Discover Our</span>
            <br />
            <span className="title-gray">Capabilities</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-12">
          {SERVICES.map(({ id, icon: Icon, title, description }) => (
            <div key={id} className="service-card group">
              <img
                ref={(el) => (imageRefs.current[id] = el)}
                src="/images/logo-service.png"
                alt=""
                aria-hidden="true"
                className="service-card-logo"
              />
              <div className="service-card-content">
                <div className="service-icon-circle">
                  <Icon className="service-icon" />
                </div>
                <div className="service-card-text">
                  <h3 className="service-card-title">{title}</h3>
                  <p className="service-card-desc">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}