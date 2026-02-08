"use client";

import { MARQUEE_TEXT } from "@/config";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-amber-500 py-3 font-semibold text-slate-900 shadow-md">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-8">{MARQUEE_TEXT}</span>
        <span className="mx-8">{MARQUEE_TEXT}</span>
      </div>
    </div>
  );
}
