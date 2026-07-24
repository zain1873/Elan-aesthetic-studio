"use client";
import { useEffect, useRef, useState } from "react";
import "./HairTreatments.css";
import Appointment from "@/components/Appointment/Appointment";
import Cta from "@/components/Cta/Cta";

// ─── Inline SVG Icons ───
function TransplantIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 3c4 1 6 4 6 8 0 5-3 9-6 10-3-1-6-5-6-10 0-4 2-7 6-8Z" />
      <path d="M12 8v4l2 2" />
      <path d="M9 12h6" />
    </svg>
  );
}
function ExosomeIcon(props) {
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
function PrpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 2v20" />
      <path d="M5 8c0-2 2-4 7-4s7 2 7 4" />
      <path d="M5 16c0 2 2 4 7 4s7-2 7-4" />
      <path d="M5 8v8" />
      <path d="M19 8v8" />
    </svg>
  );
}
function LaserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4" />
      <path d="M12 19v4" />
      <path d="M1 12h4" />
      <path d="M19 12h4" />
      <path d="M4.22 4.22l2.83 2.83" />
      <path d="M16.95 16.95l2.83 2.83" />
      <path d="M4.22 19.78l2.83-2.83" />
      <path d="M16.95 7.05l2.83-2.83" />
    </svg>
  );
}
function PrgfIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 3c2 0 4 1 4 3 0 2-2 3-4 3s-4-1-4-3c0-2 2-3 4-3Z" />
      <path d="M8 9c0 2 2 3 4 3s4-1 4-3" />
      <path d="M8 13c0 2 2 3 4 3s4-1 4-3" />
      <path d="M8 17c0 2 2 3 4 3s4-1 4-3" />
      <path d="M8 9v8" />
      <path d="M16 9v8" />
    </svg>
  );
}
function MicroneedlingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M6 3l12 18" />
      <path d="M10 3l12 18" />
      <path d="M14 3l8 12" />
      <path d="M2 9l12 12" />
      <circle cx="6" cy="3" r="1.5" fill="currentColor" />
      <circle cx="10" cy="3" r="1.5" fill="currentColor" />
      <circle cx="14" cy="3" r="1.5" fill="currentColor" />
    </svg>
  );
}

// ─── Why Choose Us Icons ───
function ExpertIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function TechIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
function CareIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function ResultIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function SafeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function CustomIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

// ─── How It Works Icons ───
function ConsultIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function PlanIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function TreatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}
function FollowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// ─── Benefits Icons ───
function BoostIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function NaturalIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}
function TimeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function PainIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function CostIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function ConfidenceIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

// ─── Treatment Data ───
const TREATMENTS_DATA = [
{
  id: "hair-transplant",
  icon: TransplantIcon,
  title: "Hair Transplant",
  description:
    "Restore your natural hairline with our advanced hair transplant procedures. Using FUE (Follicular Unit Extraction) technology, we harvest individual hair follicles from donor areas and precisely implant them into thinning or balding regions. The result is a permanent, natural-looking restoration that blends seamlessly with your existing hair.",
  image:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  features: [
    "FUE Technology",
    "Natural Results",
    "Permanent Solution",
    "Minimal Scarring",
    "Quick Recovery"
  ],
  benefits: [
    "Permanent hair restoration with natural-looking results",
    "Minimally invasive with no linear scarring",
    "High graft survival rate with advanced technology",
    "Customized hairline design for each patient"
  ]
},
  {
    id: "exosomes-hair",
    icon: ExosomeIcon,
    title: "Exosomes For Hair",
    description:
      "Experience the future of hair restoration with exosome therapy. This cutting-edge treatment uses extracellular vesicles derived from stem cells to deliver growth factors and signaling proteins directly to hair follicles. Exosomes stimulate dormant follicles, reduce inflammation, and promote robust hair regrowth at the cellular level.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    features: ["Cellular Regeneration", "Stem Cell Derived", "Non-Invasive", "Stimulates Growth", "No Downtime"],
    benefits: [
      "Targets hair loss at the cellular level",
      "Stimulates dormant hair follicles naturally",
      "Non-surgical with zero downtime",
      "Reduces scalp inflammation and improves follicle health"
    ]
  },
  {
    id: "prp-hair",
    icon: PrpIcon,
    title: "PRP For Hair",
    description:
      "Platelet-Rich Plasma (PRP) therapy harnesses your body's own healing power to reverse hair thinning. We draw a small sample of your blood, process it to concentrate the platelets rich in growth factors, and inject it into your scalp. This natural treatment stimulates blood flow, strengthens follicles, and promotes thicker, healthier hair growth.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    features: ["Natural Treatment", "Growth Factors", "Strengthens Follicles", "Improves Density", "Monthly Sessions"],
    benefits: [
      "Uses your body's own healing platelets",
      "Improves hair density and thickness significantly",
      "Safe, natural, and chemical-free treatment",
      "Complements other hair restoration procedures"
    ]
  },
  {
    id: "laser-hair-removal",
    icon: LaserIcon,
    title: "Laser Hair Removal",
    description:
      "Achieve smooth, hair-free skin with our state-of-the-art laser hair removal treatments. Our advanced diode laser systems target hair follicles with precision, disabling them permanently while leaving surrounding skin untouched. Safe for all skin types, this treatment offers a long-term solution to unwanted hair on any part of the body.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    features: ["Permanent Reduction", "All Skin Types", "Fast Sessions", "Precision Targeting", "Smooth Results"],
    benefits: [
      "Long-term permanent hair reduction",
      "Quick sessions with lasting results",
      "Safe and effective for all skin tones",
      "Eliminates ingrown hairs and razor bumps"
    ]
  },
  {
    id: "prgf-hair",
    icon: PrgfIcon,
    title: "PRGF For Hair",
    description:
      "Plasma Rich in Growth Factors (PRGF) is an advanced evolution of traditional PRP therapy. This second-generation treatment uses a specialized fractionation process to isolate the most potent growth factors from your blood. PRGF delivers a higher concentration of bioactive proteins directly to the scalp, accelerating follicle regeneration and producing superior hair regrowth results.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    features: ["Advanced PRP", "Higher Concentration", "Bioactive Proteins", "Superior Results", "Regenerative"],
    benefits: [
      "Higher concentration of growth factors than standard PRP",
      "Accelerated follicle regeneration and hair growth",
      "Advanced fractionation process for purity",
      "Clinically proven superior results"
    ]
  },
  {
    id: "microneedling-hair",
    icon: MicroneedlingIcon,
    title: "Microneedling For Hair",
    description:
      "Microneedling is a minimally invasive treatment that uses fine needles to create micro-channels in the scalp. This controlled micro-injury triggers the body's natural healing response, increasing blood flow and collagen production to the hair follicles. Often combined with PRP or growth factors, microneedling dramatically enhances product absorption and stimulates new hair growth.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    features: ["Collagen Induction", "Minimally Invasive", "Enhances Absorption", "Stimulates Growth", "Combination Therapy"],
    benefits: [
      "Triggers natural healing and collagen production",
      "Enhances absorption of topical treatments by 300%",
      "Stimulates blood flow to dormant follicles",
      "Safe for all hair types and stages of hair loss"
    ]
  }
];

// ─── FAQ Data ───
const FAQ_DATA = [
  {
    question: "How long does a hair transplant procedure take?",
    answer: "A typical hair transplant session takes between 4 to 8 hours depending on the number of grafts being transplanted. The procedure is performed under local anesthesia, ensuring you remain comfortable throughout. Most patients return home the same day."
  },
  {
    question: "When will I see results from PRP hair treatment?",
    answer: "Most patients begin to notice visible improvements in hair thickness and density after 3 to 6 months of treatment. A series of 3 to 4 sessions, spaced one month apart, is typically recommended for optimal results. Maintenance sessions are advised every 6 to 12 months."
  },
  {
    question: "Is laser hair removal permanent?",
    answer: "Laser hair removal offers long-term permanent hair reduction. While most patients experience a significant reduction after 6 to 8 sessions, occasional maintenance treatments may be needed. The results are long-lasting, and any regrowth is typically finer and lighter in color."
  },
  {
    question: "What is the difference between PRP and PRGF?",
    answer: "PRGF (Plasma Rich in Growth Factors) is an advanced evolution of PRP. While PRP uses a simple centrifugation process, PRGF employs a specialized fractionation technique that isolates a higher concentration of growth factors and bioactive proteins. This results in more potent regenerative effects and superior hair regrowth outcomes."
  },
  {
    question: "Does microneedling for hair hurt?",
    answer: "Microneedling is generally well-tolerated. A topical numbing cream is applied to the scalp 30-45 minutes before the procedure to minimize discomfort. Most patients describe the sensation as a mild tingling or轻微 pressure. The procedure has minimal downtime, with some redness that typically resolves within 24-48 hours."
  },
  {
    question: "Who is a good candidate for exosome hair therapy?",
    answer: "Exosome therapy is suitable for both men and women experiencing early to moderate hair thinning. It is particularly effective for those who have not responded well to other treatments. A consultation with our specialist will determine if you are an ideal candidate based on your hair loss pattern, overall health, and treatment goals."
  }
];

// ─── Why Choose Us Data ───
const WHY_CHOOSE_DATA = [
  {
    icon: ExpertIcon,
    title: "Expert Specialists",
    desc: "Our team of board-certified dermatologists and hair restoration specialists brings years of experience and advanced training to every procedure."
  },
  {
    icon: TechIcon,
    title: "Advanced Technology",
    desc: "We utilize the latest FDA-approved equipment and techniques, from FUE transplant systems to diode lasers and PRGF fractionation technology."
  },
  {
    icon: CareIcon,
    title: "Personalized Care",
    desc: "Every treatment plan is customized to your unique hair type, loss pattern, and aesthetic goals. No two patients are treated the same."
  },
  {
    icon: ResultIcon,
    title: "Proven Results",
    desc: "Our track record speaks for itself. Thousands of satisfied patients have achieved natural, lasting results with our comprehensive hair treatments."
  },
  {
    icon: SafeIcon,
    title: "Safety First",
    desc: "Your health and safety are our top priorities. We maintain the highest standards of sterilization, use only approved products, and follow strict protocols."
  },
  {
    icon: CustomIcon,
    title: "Comprehensive Solutions",
    desc: "From surgical transplants to non-invasive therapies, we offer a full spectrum of treatments that can be combined for optimal results."
  }
];

// ─── How It Works Data ───
const HOW_IT_WORKS_DATA = [
  {
    icon: ConsultIcon,
    title: "Free Consultation",
    desc: "Meet with our hair restoration specialist for a thorough assessment of your hair loss. We'll discuss your goals, examine your scalp, and recommend the best treatment plan."
  },
  {
    icon: PlanIcon,
    title: "Customized Plan",
    desc: "Based on your consultation, we design a personalized treatment protocol tailored to your specific needs, hair type, and desired outcomes."
  },
  {
    icon: TreatIcon,
    title: "Treatment Session",
    desc: "Receive your treatment in our state-of-the-art clinic. Our experienced team ensures your comfort throughout the procedure with advanced techniques."
  },
  {
    icon: FollowIcon,
    title: "Follow-Up Care",
    desc: "We provide comprehensive aftercare instructions and schedule follow-up appointments to monitor your progress and optimize your results."
  }
];

// ─── Benefits Data ───
const BENEFITS_DATA = [
  {
    icon: BoostIcon,
    title: "Boosted Hair Growth",
    desc: "Our treatments stimulate dormant follicles and promote active hair growth, resulting in thicker, fuller hair over time."
  },
  {
    icon: NaturalIcon,
    title: "Natural Looking Results",
    desc: "Advanced techniques ensure that your restored hair blends seamlessly with your natural hair, creating an undetectable, beautiful outcome."
  },
  {
    icon: TimeIcon,
    title: "Long-Lasting Effects",
    desc: "From permanent hair transplants to maintenance therapies, our treatments provide durable results that stand the test of time."
  },
  {
    icon: PainIcon,
    title: "Minimally Invasive",
    desc: "Most of our hair treatments are non-surgical or minimally invasive, with little to no downtime, so you can return to your daily routine quickly."
  },
  {
    icon: CostIcon,
    title: "Cost-Effective Solutions",
    desc: "We offer a range of treatments at various price points, ensuring effective hair restoration is accessible without compromising on quality."
  },
  {
    icon: ConfidenceIcon,
    title: "Boosted Confidence",
    desc: "Restoring your hair does more than improve your appearance—it transforms how you feel about yourself, boosting your confidence and self-esteem."
  }
];

export default function HairTreatmentsPage() {
  const heroBgRef = useRef(null);
  const treatmentWrapperRefs = useRef([]); // measured element per treatment card (unmoved)
  const treatmentImageRefs = useRef([]); // element the parallax transform is applied to
  const faqWrapperRef = useRef(null);
  const faqImageRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const observerRef = useRef(null);

  // Combined scroll-based parallax: hero background + treatment images + FAQ image
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;

      // Hero background parallax (unchanged behavior)
      if (heroBgRef.current) {
        const offset = window.scrollY * 0.3;
        heroBgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }

      const vh = window.innerHeight;

      // Treatment card images
      treatmentWrapperRefs.current.forEach((wrapper, i) => {
        const img = treatmentImageRefs.current[i];
        if (!wrapper || !img) return;
        const rect = wrapper.getBoundingClientRect();
        const distance = rect.top + rect.height / 2 - vh / 2;
        img.style.setProperty("--parallax-y", `${distance * 0.15}px`);
      });

      // FAQ image
      if (faqWrapperRef.current && faqImageRef.current) {
        const rect = faqWrapperRef.current.getBoundingClientRect();
        const distance = rect.top + rect.height / 2 - vh / 2;
        faqImageRef.current.style.setProperty("--parallax-y", `${distance * 0.15}px`);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // set initial positions on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observerRef.current = observer;

    const elements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-right, .scroll-animate-up, .scroll-animate-scale, .stagger-children"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="hair-hero">
        <div
          className="hair-hero-bg"
          ref={heroBgRef}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="hair-hero-overlay" />
        <div className="hair-hero-content">
          <div className="hair-hero-eyebrow">
            <span className="dot" />
            <span>Advanced Hair Solutions</span>
          </div>
          <h1 className="hair-hero-title">
            Hair Treatments
          </h1>
          <p className="hair-hero-subtitle">
            Discover our comprehensive range of advanced hair restoration treatments.
            From surgical transplants to cutting-edge regenerative therapies, we offer
            personalized solutions to restore your hair and your confidence.
          </p>
        </div>
      </section>

      {/* ─── Treatments Detail Section ─── */}
      <section className="hair-section">
        <div className="hair-section-inner">
          <div className="hair-section-header scroll-animate-up">
            <div className="hair-section-eyebrow">
              <span className="dot" />
              <span>Our Treatments</span>
            </div>
            <h2 className="hair-section-title">
              <span className="title-white">Comprehensive</span>{" "}
              <span className="title-gray">Hair Solutions</span>
            </h2>
            <p className="hair-section-desc">
              Explore our full spectrum of hair treatments, each designed to address
              specific hair concerns with the latest medical advancements.
            </p>
          </div>

          {TREATMENTS_DATA.map((treatment, index) => {
            const Icon = treatment.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={treatment.id}
                className={`treatment-card ${isReversed ? "reverse" : ""}`}
              >
                {/* Image */}
                <div className={`${isReversed ? "scroll-animate-right" : "scroll-animate"}`}>
                  <div
                    className="treatment-image-wrapper"
                    ref={(el) => (treatmentWrapperRefs.current[index] = el)}
                  >
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="treatment-image"
                      loading={index < 2 ? "eager" : "lazy"}
                      ref={(el) => (treatmentImageRefs.current[index] = el)}
                    />
                    <div className="treatment-image-overlay" />
                  </div>
                </div>

                {/* Content */}
                <div className={`treatment-content ${isReversed ? "scroll-animate" : "scroll-animate-right"}`}>
                  <div className="treatment-icon-circle">
                    <Icon className="treatment-icon" />
                  </div>
                  <h3 className="treatment-card-title">{treatment.title}</h3>
                  <p className="treatment-card-desc">{treatment.description}</p>
                  <div className="treatment-features">
                    {treatment.features.map((feature) => (
                      <span key={feature} className="treatment-feature-tag">
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
                  <a href="/contact" className="treatment-cta">
                    Book Consultation
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

      {/* ─── Why Choose Us ─── */}
      <section className="why-choose-section">
        <div className="hair-section-inner">
          <div className="hair-section-header scroll-animate-up">
            <div className="hair-section-eyebrow">
              <span className="dot" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="hair-section-title">
              <span className="title-white">Why</span>{" "}
              <span className="title-gray">Choose Elan Studio</span>
            </h2>
            <p className="hair-section-desc">
              We combine expertise, technology, and personalized care to deliver
              exceptional hair restoration results.
            </p>
          </div>

          <div className="why-choose-grid stagger-children">
            {WHY_CHOOSE_DATA.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="why-choose-card">
                  <div className="why-choose-icon">
                    <Icon />
                  </div>
                  <h3 className="why-choose-card-title">{item.title}</h3>
                  <p className="why-choose-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="how-it-works-section">
        <div className="hair-section-inner">
          <div className="hair-section-header scroll-animate-up">
            <div className="hair-section-eyebrow">
              <span className="dot" />
              <span>Process</span>
            </div>
            <h2 className="hair-section-title">
              <span className="title-white">How It</span>{" "}
              <span className="title-gray">Works</span>
            </h2>
            <p className="hair-section-desc">
              Our streamlined process ensures you receive the highest quality care
              from consultation to follow-up.
            </p>
          </div>

          <div className="how-it-works-grid stagger-children">
            {HOW_IT_WORKS_DATA.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="how-it-works-step">
                  <div className="how-it-works-step-number">{index + 1}</div>
                  <div className="how-it-works-step-icon">
                    <Icon />
                  </div>
                  <h3 className="how-it-works-step-title">{step.title}</h3>
                  <p className="how-it-works-step-desc">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section className="benefits-section">
        <div className="hair-section-inner">
          <div className="hair-section-header scroll-animate-up">
            <div className="hair-section-eyebrow">
              <span className="dot" />
              <span>Benefits</span>
            </div>
            <h2 className="hair-section-title">
              <span className="title-white">Benefits of</span>{" "}
              <span className="title-gray">Our Treatments</span>
            </h2>
            <p className="hair-section-desc">
              Experience the transformative benefits of our advanced hair restoration treatments.
            </p>
          </div>

          <div className="benefits-grid stagger-children">
            {BENEFITS_DATA.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <Icon />
                  </div>
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="faq-section">
        <div className="hair-section-inner">
          <div className="hair-section-header scroll-animate-up">
            <div className="hair-section-eyebrow">
              <span className="dot" />
              <span>FAQ</span>
            </div>
            <h2 className="hair-section-title">
              <span className="title-white">Frequently Asked</span>{" "}
              <span className="title-gray">Questions</span>
            </h2>
          </div>

          <div className="faq-layout">
            {/* Left: FAQ List */}
            <div className="faq-list scroll-animate">
              {FAQ_DATA.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeFaq === index ? "active" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={activeFaq === index}
                  >
                    {faq.question}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="scroll-animate-right">
              <div className="faq-image-wrapper" ref={faqWrapperRef}>
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                  alt="Hair treatment consultation"
                  className="faq-image"
                  ref={faqImageRef}
                />
                <div className="faq-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta/>
      <Appointment/>
      

    
    </>
  );
}