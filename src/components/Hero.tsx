import Link from "next/link";
import { ADVOCATE_TITLE, CTA, SITE } from "@/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23c9a227%22 fill-opacity=%220.06%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          {ADVOCATE_TITLE}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {SITE.name}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
          {SITE.tagline}
        </p>
        <p className="mt-6 text-amber-300/90">
          <a href="#contact" className="underline decoration-amber-400/50 underline-offset-2 hover:text-amber-200 hover:decoration-amber-400">
            {CTA.message}
          </a>
          {" — "}
          {CTA.focus}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#traffic-challan"
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-amber-400"
          >
            Traffic Challan Assistance
          </Link>
          <Link
            href="#contact"
            className="rounded-lg border-2 border-amber-500 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-500/10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
