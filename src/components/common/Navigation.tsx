"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { NAV_LINKS } from "@/lib/constants/site";
import { useBooking } from "./BookingContext";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-4 md:px-12 py-4 md:py-5 bg-black/88 backdrop-blur-2xl border-b border-cyan-500/20">
        <Link
          href="/"
          className="font-black text-lg text-cyan-400 tracking-wider uppercase"
        >
          AI Lead Shield
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/45 text-sm uppercase tracking-widest hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={openBooking}
          className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all"
        >
          Agendar llamada
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className={`w-6 h-1 bg-white/45 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-1 bg-white/45 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-1 bg-white/45 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-black flex flex-col items-center justify-center gap-6 pt-20 animate-fadeIn">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-lg font-bold transition-transform hover:rotate-90 duration-300"
          >
            ✕
          </button>
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-3xl font-black uppercase hover:text-cyan-400 transition-colors animate-fadeIn"
              style={{
                animation: `fadeIn 0.3s ease-out ${0.1 * idx}s backwards`,
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              openBooking();
              setMobileMenuOpen(false);
            }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all animate-fadeIn"
            style={{
              animation: `fadeIn 0.3s ease-out ${0.1 * NAV_LINKS.length}s backwards`,
            }}
          >
            Agendar llamada
          </button>
        </div>
      )}
    </>
  );
}
