import { CTA, PHONE_LINK, PHONE_NUMBER, SITE, SERVICES_LIST } from "@/config";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
          Contact
        </h2>
        <h3 className="mb-6 text-3xl font-bold md:text-4xl">
          {SITE.contactHeading}
        </h3>
        <p className="mb-2 font-medium text-amber-400">
          <a href={CTA.callLink} className="underline decoration-amber-400/50 underline-offset-2 hover:decoration-amber-400">
            {CTA.message}
          </a>
        </p>
        <p className="mb-6 text-sm text-amber-300/80">
          {CTA.focus}
        </p>
        <p className="mb-8 text-slate-300">
          {SITE.contactSubtext}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={CTA.callLink}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            <span aria-hidden>📞</span>
            Call {PHONE_NUMBER}
          </a>
          {CTA.whatsappLink && (
            <a
              href={CTA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-emerald-500 bg-emerald-500/10 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500/20"
            >
              <span aria-hidden>💬</span>
              Drop a message
            </a>
          )}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          {SITE.name} — {SERVICES_LIST}
        </p>
      </div>
    </section>
  );
}
