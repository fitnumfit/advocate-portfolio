import Link from "next/link";
import { CTA, SITE } from "@/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900">
            {SITE.name}
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
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
        </div>
      </div>
    </header>
  );
}
