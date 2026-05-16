"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants/site";
import { BookingLink } from "./BookingLink";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <nav id="navbar" aria-label="Principal">
      <div className="container">
        <Link href="/" className="logo logo--text-only" onClick={closeMobile}>
          AI LEAD<span>SHIELD</span>
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <BookingLink className="btn btn-primary btn-sm">
            Agendar Llamada
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </BookingLink>
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={mobileOpen}
            aria-controls="navMobile"
            aria-label="Menú"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg className="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${mobileOpen ? "open" : ""}`} id="navMobile">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMobile}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <BookingLink className="btn btn-primary" onClick={closeMobile}>
          Agendar Llamada
        </BookingLink>
      </div>
    </nav>
  );
}
