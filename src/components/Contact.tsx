import { CTA, PHONE_LINK, PHONE_NUMBER, SITE, SERVICES_LIST } from "@/config";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-amber-400 sm:text-sm">
          Contact
        </h2>
        <h3 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
          {SITE.contactHeading}
        </h3>
        <p className="mb-2 text-sm font-medium text-amber-400 sm:text-base">
          <a href={CTA.callLink} className="underline decoration-amber-400/50 underline-offset-2 hover:decoration-amber-400">
            {CTA.message}
          </a>
        </p>
        <p className="mb-4 text-xs text-amber-300/80 sm:mb-6 sm:text-sm">
          {CTA.focus}
        </p>
        <p className="mb-6 text-sm text-slate-300 sm:mb-8 sm:text-base">
          {SITE.contactSubtext}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <a
            href={CTA.callLink}
            className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400 active:bg-amber-400 sm:min-h-0"
          >
            <span aria-hidden>📞</span>
            Call {PHONE_NUMBER}
          </a>
          {CTA.whatsappLink && (
            <a
              href={CTA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-500 bg-emerald-500/10 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500/20 active:bg-emerald-500/20 sm:min-h-0"
            >
              <span aria-hidden>💬</span>
              Drop a message
            </a>
          )}
        </div>
        <p className="mt-6 text-xs text-slate-500 sm:mt-8 sm:text-sm">
          {SITE.name} — {SERVICES_LIST}
        </p>
      </div>
    </section>
  );
}
