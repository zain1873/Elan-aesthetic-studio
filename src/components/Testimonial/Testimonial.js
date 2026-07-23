"use client";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Hassan Raza",
    title: '"Great Experience & Visible Results"',
    color: "amber",
    text: "I visited NY Aesthetics for a facial and I'm really impressed with the results. My skin feels much healthier and brighter. The staff is professional and guided me properly throughout the process. Highly recommended!",
    avatar: "https://i.pravatar.cc/80?img=12",
    ny: false,
  },
  {
    name: "Qurat-ul-Ain",
    title: '"Professional & Friendly Staff"',
    color: "amber",
    text: "The environment at NY Aesthetics is very clean and welcoming. The team is extremely friendly and makes you feel comfortable. I got my treatment done and the results were exactly what I wanted.",
    avatar: "https://i.pravatar.cc/80?img=32",
    ny: true,
  },
  {
    name: "Ifrah",
    title: '"Amazing Service & Care"',
    color: "cyan",
    text: "From the moment I walked in, I felt very comfortable. The staff is cooperative and professional. My skin looks much better after just a few sessions. Definitely coming back!",
    avatar: "https://i.pravatar.cc/80?img=45",
    ny: true,
  },
  {
    name: "Malaika",
    title: '"Highly Recommended Clinic"',
    color: "cyan",
    text: "Very professional setup with modern equipment. The doctor suggested the right treatment for me, and I'm happy with the results. It's one of the best aesthetic clinics in Lahore.",
    avatar: "https://i.pravatar.cc/80?img=47",
    ny: false,
  },
];

const googleReviews = [
  { name: "moh noor", time: "4 months ago", avatar: "https://i.pravatar.cc/40?img=5", text: "have done Hydra, carbon peel and glycolic peel and the results are great. Naha was the attendent, she did a great job. Highly..." },
  { name: "Arzoo Adnan", time: "4 months ago", avatar: "https://i.pravatar.cc/40?img=9", text: "Highly recommended people. Dr Maria guides her patients very professionally. Her team is committed with excellence." },
  { name: "Chiabeel sasi", time: "4 months ago", avatar: "https://i.pravatar.cc/40?img=15", text: "I done my hydra and face laser and hair treatments and excesses done from NY aesthetics miss samra done my procedure am..." },
  { name: "Samiya Sheikh", time: "4 months ago", avatar: "https://i.pravatar.cc/40?img=20", text: "Today I visited at my aesthetic I am so impressed with the environment and everything there totally recommended by my side..." },
];

export default function Testimonials() {
  return (
    <section className="testi-section">
      <div className="testi-wrap">
        <div className="testi-heading">
          <div className="testi-eyebrow">
            <span className="testi-dot" />
            <span>Testimonial</span>
          </div>
          <div className="theme-title">
          <h2 className="theme-title">Happy Client</h2>
          <span className="title-gray">Feedback</span>
          </div>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              {t.ny && (
                <img
                  src="/images/logo-service.png"
                  alt="NY"
                  className="ny-watermark"
                />
              )}
              <div className="testi-avatar-wrap">
                <img className="testi-avatar" src={t.avatar} alt={t.name} />
                <span className="testi-quote-badge">&rdquo;</span>
              </div>

              <p className="testi-name">{t.name}</p>
              <p className="testi-role">Customer</p>

              <h3 className={`testi-title ${t.color}`}>{t.title}</h3>
              <p className="testi-text">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="review-strip">
          {googleReviews.map((r) => (
            <div className="review-card" key={r.name}>
              <div className="review-top">
                <div className="review-user">
                  <img className="review-avatar" src={r.avatar} alt={r.name} />
                  <div>
                    <p className="review-name">{r.name}</p>
                    <p className="review-time">{r.time}</p>
                  </div>
                </div>
                <span className="google-icon">G</span>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{r.text}</p>
              <button className="review-more">Read more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}