"use client";

import { MARQUEE_TEXT } from "@/config";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-amber-500 py-2 font-semibold text-slate-900 shadow-md sm:py-3">
      <div className="flex animate-marquee whitespace-nowrap text-sm sm:text-base">
        <span className="mx-4 sm:mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-4 sm:mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-4 sm:mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-4 sm:mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-4 sm:mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-4 sm:mx-8">{MARQUEE_TEXT}</span>
      </div>
    </div>
  );
}
