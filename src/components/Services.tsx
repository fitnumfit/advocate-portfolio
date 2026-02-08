const SERVICES = [
  {
    id: "traffic-challan",
    name: "Traffic Challan",
    description:
      "Lok Adalat settlement, challan disputes, license issues & fine reduction. Get expert assistance for quick resolution.",
    highlight: true,
    icon: "🚦",
  },
  {
    name: "Criminal Cases",
    description: "Defence and representation in criminal matters with dedicated legal support.",
    icon: "⚖️",
  },
  {
    name: "Family Cases",
    description: "Family disputes, custody, maintenance and related family law matters.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    name: "Court Marriage",
    description: "Registration and legal support for court marriages.",
    icon: "💒",
  },
  {
    name: "Divorce",
    description: "Mutual consent divorce, contested divorce and related proceedings.",
    icon: "📜",
  },
  {
    name: "Cheque Bounce",
    description: "Section 138 NI Act matters, recovery and settlement.",
    icon: "📄",
  },
  {
    name: "Contract & Agreement",
    description: "Drafting, review and dispute resolution for contracts.",
    icon: "📋",
  },
  {
    name: "Rent Agreement",
    description: "Rental agreements, tenant-landlord disputes and registration.",
    icon: "🏠",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-xs font-medium uppercase tracking-widest text-amber-600 sm:text-sm">
          Legal Services
        </h2>
        <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:mb-12 sm:text-3xl md:text-4xl">
          How We Can Help You
        </h3>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              id={service.highlight ? "traffic-challan" : undefined}
              className={`rounded-xl border-2 p-4 shadow-sm transition hover:shadow-md sm:p-6 ${
                service.highlight
                  ? "border-amber-500 bg-amber-50/80 ring-2 ring-amber-500/30"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="mb-2 flex items-center gap-3 sm:mb-3">
                <span className="text-xl sm:text-2xl">{service.icon}</span>
                <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                  {service.name}
                  {service.highlight && (
                    <span className="ml-2 rounded bg-amber-500 px-2 py-0.5 text-xs font-semibold text-slate-900">
                      Popular
                    </span>
                  )}
                </h4>
              </div>
              <p className="text-sm text-slate-600 sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
