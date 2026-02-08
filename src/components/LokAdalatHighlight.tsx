import Image from "next/image";
import { LOK_ADALAT } from "@/config";

export default function LokAdalatHighlight() {
  return (
    <section
      id="traffic-challan"
      className="border-b border-slate-200 bg-amber-50/50 px-6 py-12 md:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-900 md:text-3xl">
          {LOK_ADALAT.title}
        </h2>
        <p className="mb-2 text-center text-slate-700 md:text-lg">
          {LOK_ADALAT.description}
        </p>
        <p className="mb-8 text-center font-semibold text-amber-700">
          {LOK_ADALAT.cta}
        </p>
        <div className="overflow-hidden rounded-xl border-2 border-amber-200 bg-white shadow-md">
          <div className="relative aspect-[4/3] w-full md:aspect-video">
            <Image
              src={LOK_ADALAT.imagePath}
              alt={LOK_ADALAT.imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
          <p className="border-t border-slate-200 bg-slate-100 px-4 py-2 text-center text-sm text-slate-600">
            Image source: {LOK_ADALAT.imageSource}
          </p>
        </div>
      </div>
    </section>
  );
}
