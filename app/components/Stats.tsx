"use client";
import { useLang } from "../context/LanguageContext";

const stats = [
  { value: "50+",  key: "stats.companies" },
  { value: "5,000+", key: "stats.employees" },
  { value: "45",   key: "stats.modules" },
  { value: "99.9%", key: "stats.uptime" },
];

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="bg-[#0f1923] border-y border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, key }) => (
          <div key={key}>
            <div className="text-3xl md:text-4xl font-extrabold text-[#00B4B4] mb-1">{value}</div>
            <div className="text-sm text-white/50">{t(key)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
