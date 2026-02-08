import Link from "next/link";
import { FOOTER, SERVICES_LIST, SITE } from "@/config";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 px-6 py-8 text-center text-sm text-slate-600">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold text-slate-800">{SITE.name}</p>
        <p className="mt-1">{SERVICES_LIST}</p>
        <nav className="mt-4 flex justify-center gap-6">
          <Link href="#traffic-challan" className="hover:text-amber-600">
            Traffic Challan
          </Link>
          <Link href="#services" className="hover:text-amber-600">
            Services
          </Link>
          <Link href="#contact" className="hover:text-amber-600">
            Contact
          </Link>
        </nav>
        <p className="mt-6 text-slate-500">{FOOTER.copyright}</p>
        <p className="mt-1 text-slate-500">{FOOTER.maintainedBy}</p>
      </div>
    </footer>
  );
}
