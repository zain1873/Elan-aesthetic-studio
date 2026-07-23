"use client";
import "./Blog.css";

const posts = [
  {
    title: "What Is PDRN? The Complete Guide to This Powerful",
    excerpt:
      "Introduction Regenerative medicine is a fast-growing field that focuses on helping the body heal",
    author: "Dr. Sara Chaudhary",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "What Is Mesotox — And Why Is Everyone Talking",
    excerpt:
      "The vocabulary of aesthetic medicine is changing. Patients are no longer walking into clinics",
    author: "Dr. Sara Chaudhary",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="blog-eyebrow flex items-center justify-center gap-2">
            <span className="blog-dot" />
            <span>Blog & Article</span>
          </div>
          <h2 className="theme-title">
            Explore Blog &<br />
            <span className="theme-title title-gray">Article</span>
          </h2>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <div className="blog-row" key={post.title}>
              <img className="blog-image" src={post.image} alt={post.title} />

              <div>
                <div className="blog-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                  </svg>
                </div>
                <p className="blog-author">
                  BY: <strong>{post.author}</strong>
                </p>
                <p className="blog-date">{post.date.toUpperCase()}</p>
              </div>

              <div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}