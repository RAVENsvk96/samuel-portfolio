"use client";

import { useEffect, useState } from "react";

const visibilityThreshold = 600;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > visibilityThreshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Prejsť na začiatok stránky"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full border border-blue-300/35 bg-[#061B3A]/90 text-white shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-300/75 hover:bg-[#072655] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-3 focus-visible:ring-offset-[#03193E] sm:bottom-7 sm:right-7 sm:size-14 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span
        className="absolute -inset-1.5 rounded-full border border-blue-400/10 transition duration-500 group-hover:scale-110 group-hover:border-blue-300/25"
        aria-hidden="true"
      />
      <span
        className="absolute -right-0.5 top-1 size-1.5 rounded-full bg-blue-300 shadow-[0_0_9px_rgba(147,197,253,0.95)]"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 24 24"
        className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 14 6-6 6 6" />
        <path d="M12 8v10" />
      </svg>
    </button>
  );
}
