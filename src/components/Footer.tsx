import Link from "next/link";
import { FOOTER, SERVICES_LIST, SITE } from "@/config";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 px-4 py-6 text-center text-sm text-slate-600 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold text-slate-800">{SITE.name}</p>
        <p className="mt-1 text-xs leading-relaxed sm:text-sm">{SERVICES_LIST}</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="#traffic-challan" className="min-h-[44px] flex items-center justify-center hover:text-amber-600 sm:min-h-0">
            Traffic Challan
          </Link>
          <Link href="#services" className="min-h-[44px] flex items-center justify-center hover:text-amber-600 sm:min-h-0">
            Services
          </Link>
          <Link href="#contact" className="min-h-[44px] flex items-center justify-center hover:text-amber-600 sm:min-h-0">
            Contact
          </Link>
        </nav>
        <p className="mt-5 text-xs text-slate-500 sm:mt-6 sm:text-sm">{FOOTER.copyright}</p>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">{FOOTER.maintainedBy}</p>
      </div>
    </footer>
  );
}
