"use client";

import { useLang } from "../context/LanguageContext";

export default function About() {
  const { lang, t } = useLang();
  return (
    <section id="about" className="bg-white py-24 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{t("about.sub")}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{lang === "ar" ? "مصمم حول طريقة عمل فريقك" : "Built around the way your team works"}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{t("about.body")}</p>
          <a href="#contact" className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">{lang === "ar" ? "تحدث معنا" : "Talk to our team"} <span className="ms-2" aria-hidden="true">↗</span></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [lang === "ar" ? "منظم" : "Organized", lang === "ar" ? "ملفات الموظفين والوثائق والطلبات في مكان واحد." : "People records, documents and requests in one place.", "01"],
            [lang === "ar" ? "عملي" : "Practical", lang === "ar" ? "الحضور والإجازات والرواتب في سير عمل مترابط." : "Attendance, leave and payroll in a connected workflow.", "02"],
            [lang === "ar" ? "قابل للتوسع" : "Ready to grow", lang === "ar" ? "أضف عمليات الموارد البشرية والتوظيف حسب الحاجة." : "Add HR operations and hiring as you need them.", "03"],
            [lang === "ar" ? "مناسب لمصر" : "Egypt-focused", lang === "ar" ? "وصول بالعربية والإنجليزية وإعدادات قابلة للتهيئة." : "Arabic and English access with configurable settings.", "04"],
          ].map(([title, detail, number]) => (
            <div key={number} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="text-sm font-bold text-cyan-700">{number}</span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
