import Link from "next/link";
import { ADVOCATE_TITLE, CTA, SITE } from "@/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-14 text-white sm:px-6 sm:py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23c9a227%22 fill-opacity=%220.06%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-400 sm:mb-3 sm:text-sm">
          {ADVOCATE_TITLE}
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
          {SITE.name}
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl">
          {SITE.tagline}
        </p>
        <p className="mt-4 text-sm text-amber-300/90 sm:mt-6 sm:text-base">
          <a href="#contact" className="underline decoration-amber-400/50 underline-offset-2 hover:text-amber-200 hover:decoration-amber-400">
            {CTA.message}
          </a>
          <span className="block mt-1 sm:inline sm:mt-0"> — {CTA.focus}</span>
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="#traffic-challan"
            className="min-h-[44px] rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-amber-400 active:bg-amber-400 sm:min-h-0"
          >
            Traffic Challan Assistance
          </Link>
          <Link
            href="#contact"
            className="min-h-[44px] rounded-lg border-2 border-amber-500 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-500/10 active:bg-amber-500/10 sm:min-h-0"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
