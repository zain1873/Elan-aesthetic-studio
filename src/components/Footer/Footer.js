import React from "react";
import "./Footer.css"

const BACKGROUND_IMAGE = "/images/footer-bg.jpg";

const socialLinks = [
  { label: "Instagram..", href: "#" },
  { label: "Facebook..", href: "#" },
];

const usefulLinks = [
  { label: "About US", href: "#" },
  { label: "Contact", href: "#" },
];

const moreInfoLinks = [
  { label: "Career", href: "#" },
  { label: "Services", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-neutral-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
        aria-hidden="true"
      />
      {/* Dark overlay so text stays readable on top of the photo */}
      <div className="absolute inset-0 overlay-f" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* Call Us circle */}
          <a
            href="tel:03250005222"
            className="group flex h-56 w-56 shrink-0 flex-col items-center justify-center rounded-full bg-sky-100 transition-colors duration-300 hover:bg-sky-200 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
          >
            <svg
              className="mb-2 h-8 w-8 text-neutral-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-10 sm:w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-3xl tracking-wide text-neutral-900 sm:text-4xl md:text-5xl">
              CALL US
            </span>
          </a>

          {/* Link columns */}
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-12 text-center sm:grid-cols-3 sm:gap-x-10 sm:text-left lg:w-auto lg:gap-x-20">
            {/* Social media + Useful links */}
            <div className="col-span-1 flex flex-col gap-10">
              <div>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                  Social Media
                </h4>
                <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base font-medium tracking-wide text-white/90 transition-colors sm:text-lg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                  Useful Link
                </h4>
                <ul className="flex flex-col gap-2">
                  {usefulLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base font-medium text-white/90 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact info + More info */}
            <div className="col-span-1 flex flex-col gap-10 sm:col-span-2 sm:flex-row sm:justify-between lg:justify-start lg:gap-20">
              <div>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                  Contact Info
                </h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a
                      href="tel:03250005222"
                      className="text-base font-medium text-white/90 transition-colors"
                    >
                      0325-0005222
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:nyaesthetics25@gmail.com"
                      className="break-all text-base font-medium text-white/90 transition-colors"
                    >
                      NYAESTHETICS25@GMAIL.COM
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                  More Info
                </h4>
                <ul className="flex flex-col gap-2">
                  {moreInfoLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base font-medium text-white/90 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/20 pt-6 text-sm text-gray-400 sm:mt-20 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} NY Aesthetics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Term and Condition
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}