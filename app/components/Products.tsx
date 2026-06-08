"use client";
import { useLang } from "../context/LanguageContext";

const modules = [
  {
    tag: "products.m1.tag",
    name: "products.m1.name",
    sub: "products.m1.sub",
    desc: "products.m1.desc",
    color: "#00B4B4",
    features: [
      "Employees", "Attendance", "Shifts", "Leave", "Holidays",
      "Payroll", "Overtime", "Loans", "Expenses", "OrgChart", "Reports",
    ],
    includes: null,
  },
  {
    tag: "products.m2.tag",
    name: "products.m2.name",
    sub: "products.m2.sub",
    desc: "products.m2.desc",
    color: "#22c55e",
    features: [
      "Training", "Performance", "Onboarding", "Exit", "Disciplinary",
      "Benefits", "Assets", "Letters", "Documents", "Helpdesk",
      "Surveys", "Policies", "Travel", "WFH", "Workflows",
    ],
    includes: "All of Module 1 +",
  },
  {
    tag: "products.m3.tag",
    name: "products.m3.name",
    sub: "products.m3.sub",
    desc: "products.m3.desc",
    color: "#E8604C",
    features: [
      "Recruitment Pipeline", "AI Screening", "Assessment Portal",
      "Job Descriptions", "Talent Pool",
    ],
    includes: "All of Module 2 +",
    isAI: true,
  },
];

export default function Products() {
  const { t } = useLang();

  return (
    <section id="products" className="py-24 bg-[#0f1923]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("products.title")}</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">{t("products.sub")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="relative rounded-2xl border border-white/10 bg-[#1B2A4A]/60 p-6 flex flex-col hover:border-white/20 transition-all"
              style={{ boxShadow: `0 0 40px ${mod.color}10` }}
            >
              {mod.isAI && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8604C] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span>✦</span> AI-Powered
                </div>
              )}

              <div className="mb-4">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ color: mod.color, background: `${mod.color}18` }}
                >
                  {t(mod.tag)}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1" style={{ color: mod.color }}>
                {t(mod.name)}
              </h3>
              <p className="text-white/40 text-xs mb-3">{t(mod.sub)}</p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{t(mod.desc)}</p>

              <div className="mt-auto">
                {mod.includes && (
                  <p className="text-xs font-semibold mb-2" style={{ color: mod.color }}>
                    {mod.includes}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {mod.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
