"use client";
import { useEffect, useRef } from "react";
import "./ServicesPage.css";

// ─── Inline SVG Icons ───
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
function ThreadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M4 20c2-4 4-8 8-8s6 4 8 8" />
      <path d="M4 4c2 4 4 8 8 8s6-4 8-8" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function AntiAgingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
      <path d="M8 12h8" />
    </svg>
  );
}

// ─── Service Data ───
const SERVICES_DATA = [
  {
    id: "skin-treatments",
    icon: FaceIcon,
    title: "Skin Treatments",
    description:
      "Reveal your most radiant skin with our advanced skin care treatments. From HydraFacials to chemical peels, our team of expert dermatologists ensures your skin looks healthy, glowing, and beautifully rejuvenated.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    features: ["HydraFacial", "Chemical Peels", "Microdermabrasion", "Laser Rejuvenation", "Acne Treatment"],
    ctaText: "Book Consultation",
    ctaLink: "/contact",
  },
  {
    id: "thread-lifts",
    icon: ThreadIcon,
    title: "Thread Treatments",
    description:
      "Experience non-surgical lifting and tightening with our advanced thread lift treatments. Using PDO threads, we gently lift sagging skin, stimulate collagen production, and restore youthful contours with minimal downtime.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    features: ["PDO Threads", "Face Lifting", "Neck Tightening", "Collagen Stimulation", "Minimal Downtime"],
    ctaText: "Learn More",
    ctaLink: "/contact",
  },
  {
    id: "anti-aging-treatments",
    icon: AntiAgingIcon,
    title: "Anti-Aging Treatments",
    description:
      "Turn back the clock with our comprehensive anti-aging solutions. From Botox and dermal fillers to PRP therapy and laser resurfacing, we offer a full spectrum of treatments to reduce wrinkles and restore youthful vitality.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    features: ["Botox", "Dermal Fillers", "PRP Therapy", "Laser Resurfacing", "Microneedling"],
    ctaText: "Book Consultation",
    ctaLink: "/contact",
  },
  {
    id: "medicated-facials",
    icon: LeafMaskIcon,
    title: "Medicated Facials",
    description:
      "Our medicated facials target specific skin concerns such as acne, pigmentation, and dullness. Each facial is customized with clinical-grade ingredients to restore your skin's health while enhancing your natural beauty.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    features: ["Acne Control", "Pigmentation Correction", "Deep Cleansing", "Skin Brightening", "Customized Formulas"],
    ctaText: "Learn More",
    ctaLink: "/contact",
  },
  {
    id: "hair-treatments",
    icon: HairIcon,
    title: "Hair Treatments",
    description:
      "Restore volume, thickness, and strength with our advanced hair care solutions. From PRP therapy to targeted scalp treatments, we help reduce hair fall, stimulate regrowth, and improve overall hair health using clinically proven techniques.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    features: ["PRP Therapy", "Scalp Treatments", "Hair Regrowth", "Volume Restoration", "Dandruff Control"],
    ctaText: "Book Consultation",
    ctaLink: "/contact",
  },
  {
    id: "fat-reduction-treatments",
    icon: BodyIcon,
    title: "Fat Reduction Treatments",
    description:
      "Sculpt your body and eliminate stubborn fat with our advanced fat reduction therapies. Using safe, non-invasive techniques, we help you achieve a toned, contoured figure without surgery or downtime.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    features: ["Cryolipolysis", "Ultrasound Cavitation", "Body Contouring", "Non-Invasive", "No Downtime"],
    ctaText: "Learn More",
    ctaLink: "/contact",
  },
  {
    id: "dental-aesthetic-treatments",
    icon: ToothIcon,
    title: "Dental Aesthetic Treatments",
    description:
      "Achieve a confident smile with our specialized dental aesthetic treatments. From teeth whitening to cosmetic dental procedures, we ensure safe, professional, and effective care for your smile.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Gum Contouring", "Cosmetic Bonding"],
    ctaText: "Book Consultation",
    ctaLink: "/contact",
  },
  {
    id: "exosome-therapy",
    icon: MoleculeIcon,
    title: "Exosome Therapy",
    description:
      "Exosome therapy is a cutting-edge regenerative treatment that uses cell-derived exosomes to rejuvenate and repair skin at the cellular level. Experience natural, youthful results with this revolutionary approach to aesthetic medicine.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    features: ["Cellular Regeneration", "Skin Rejuvenation", "Collagen Boost", "Scar Reduction", "Natural Results"],
    ctaText: "Learn More",
    ctaLink: "/contact",
  },
];

export default function ServicesPage() {
  const heroBgRef = useRef(null);
  // Holds each service card's <img>, keyed by service id — for per-card parallax
  const imageRefs = useRef({});

  // Parallax speed for each card image (same idea as About.jsx's speed = 0.15)
  const IMAGE_SPEED = 0.15;

  // Parallax effect for hero background
  useEffect(() => {
    const bg = heroBgRef.current;

    let ticking = false;
    const update = () => {
      ticking = false;

      if (bg) {
        const offset = window.scrollY * 0.3;
        bg.style.transform = `translate3d(0, ${offset}px, 0)`;
      }

      // Parallax for each service card image — same math as About.jsx:
      // distance of the element's center from the viewport's center * speed
      const viewportHeight = window.innerHeight;
      Object.values(imageRefs.current).forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = elementCenter - viewportCenter;
        el.style.transform = `translateY(${distance * IMAGE_SPEED}px)`;
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
    <>
      {/* ─── Hero Banner ─── */}
      <section className="services-hero">
        <div
          className="services-hero-bg"
          ref={heroBgRef}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <div className="services-hero-eyebrow">
            <span className="dot" />
            <span>Premium Aesthetics</span>
          </div>
          <h1 className="services-hero-title">
            Our Services
          </h1>
          <p className="services-hero-subtitle">
            Discover a full spectrum of advanced aesthetic treatments designed to
            enhance your natural beauty. From skin rejuvenation to body contouring,
            every procedure is tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* ─── Services Detail Section ─── */}
      <section className="services-detail-section">
        <div className="services-detail-inner">
          <div className="services-detail-header">
            <div className="services-detail-eyebrow">
              <span className="dot" />
              <span>What We Offer</span>
            </div>
            <h2 className="services-detail-title">
              <span className="title-white">Comprehensive</span>{" "}
              <span className="title-gray">Treatments</span>
            </h2>
          </div>

          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                className={`service-detail-card ${isReversed ? "reverse" : ""}`}
              >
                {/* Image */}
                <div className="service-detail-image-wrapper">
                  <img
                    ref={(el) => (imageRefs.current[service.id] = el)}
                    src={service.image}
                    alt={service.title}
                    className="service-detail-image"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="service-detail-image-overlay" />
                </div>

                {/* Content */}
                <div className="service-detail-content">
                  <div className="service-detail-icon-circle">
                    <Icon className="service-detail-icon" />
                  </div>
                  <h3 className="service-detail-card-title">{service.title}</h3>
                  <p className="service-detail-card-desc">{service.description}</p>
                  <div className="service-detail-features">
                    {service.features.map((feature) => (
                      <span key={feature} className="service-detail-feature-tag">
                        <svg
                          className="check"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a href={service.ctaLink} className="service-detail-cta">
                    {service.ctaText}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="services-cta-section">
        <div className="services-cta-bg" />
        <div className="services-cta-inner">
          <h2 className="services-cta-title">Ready to Transform?</h2>
          <p className="services-cta-text">
            Take the first step toward a more confident you. Schedule a
            consultation with our expert team and discover the perfect treatment
            plan tailored to your goals.
          </p>
          <a href="/contact" className="services-cta-button">
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