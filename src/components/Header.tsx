"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/config";

const navLinks = [
  { href: "#traffic-challan", label: "Traffic Challan" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-slate-900 sm:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            {SITE.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link
              href="#traffic-challan"
              className="text-amber-600 transition hover:text-amber-700"
            >
              Traffic Challan
            </Link>
            <Link
              href="#services"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-200 ease-out md:hidden ${menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
          aria-hidden={!menuOpen}
        >
          <nav className="flex flex-col gap-1 border-t border-slate-200 pt-3 pb-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 text-base font-medium ${link.label === "Traffic Challan" ? "text-amber-600" : "text-slate-700"} hover:bg-slate-100 active:bg-slate-100`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
