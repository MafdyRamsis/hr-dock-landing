"use client";

import { useLang } from "../context/LanguageContext";

export default function About() {
  const { lang, t } = useLang();
  return (
    <section id="about" className="bg-white py-24 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{t("about.sub")}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{lang === "ar" ? "من تسجيل الحضور إلى القرار التالي" : "From the first check-in to the next decision"}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{t("about.body")}</p>
          <a href="#contact" className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">{lang === "ar" ? "تحدث معنا" : "Talk to our team"} <span className="ms-2" aria-hidden="true">↗</span></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [lang === "ar" ? "قبل إغلاق الرواتب" : "Before payroll cut-off", lang === "ar" ? "راجع بيانات الحضور والإجازات والإضافي في سياق واحد." : "Review attendance, leave and overtime inputs in context.", "01"],
            [lang === "ar" ? "بعد تقديم الطلب" : "After a request is raised", lang === "ar" ? "اعرف ما ينتظر الموافقة ومن المسؤول عن الخطوة التالية." : "See what awaits approval and who owns the next step.", "02"],
            [lang === "ar" ? "عند البحث عن مستند" : "When a file is needed", lang === "ar" ? "ارجع إلى ملف الموظف بدلاً من البحث في رسائل ومجلدات متفرقة." : "Go to the employee record instead of hunting through messages and folders.", "03"],
            [lang === "ar" ? "عندما يسأل المدير" : "When leadership asks", lang === "ar" ? "قدّم صورة أوضح عن الفريق دون تجميع تقارير يدوياً كل مرة." : "Get a clearer workforce picture without rebuilding a report each time.", "04"],
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
