"use client";

import { useSyncExternalStore } from "react";

function subscribeScroll(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

function getScrollYSnapshot(): number {
  return window.scrollY;
}

function getScrollYServerSnapshot(): number {
  return 0;
}

export function ScrollToTop() {
  const scrollY = useSyncExternalStore(subscribeScroll, getScrollYSnapshot, getScrollYServerSnapshot);
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-fab transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      title="Volver al inicio"
      aria-label="Volver al inicio"
    >
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    </button>
  );
}
