"use client";

import { useLang } from "../context/LanguageContext";

export default function About() {
  const { lang, t } = useLang();
  return (
    <section id="about" className="bg-white py-24 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{t("about.sub")}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{lang === "ar" ? "كيف تبدأ مع HR Dock" : "Getting started with HR Dock"}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{lang === "ar" ? "نراجع طريقة عمل فريقك الحالية في العرض التوضيحي ونحدد البيانات والإعدادات التي تحتاجها للبدء." : "In the demo, we review how your team works today and identify the data and settings you’ll need to get started."}</p>
          <a href="#contact" className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">{lang === "ar" ? "تحدث معنا" : "Talk to our team"} <span className="ms-2" aria-hidden="true">↗</span></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [lang === "ar" ? "البيانات والاستيراد" : "Data and migration", lang === "ar" ? "ناقش الملفات الحالية وما يمكن استيراده منها." : "Discuss your current employee records and what can be imported.", "01"],
            [lang === "ar" ? "إعداد الحضور والرواتب" : "Attendance and payroll setup", lang === "ar" ? "راجع الورديات وفترة الرواتب ومسارات الموافقة." : "Review your shifts, payroll cycle and approval flows.", "02"],
            [lang === "ar" ? "صلاحيات الفريق" : "Access for your team", lang === "ar" ? "حدد ما يحتاج الموظفون والمديرون وفريق الموارد البشرية إلى الوصول إليه." : "Decide what employees, managers and HR need to access.", "03"],
            [lang === "ar" ? "التدريب والدعم" : "Training and support", lang === "ar" ? "ناقش احتياجات التدريب والدعم عند بدء الاستخدام." : "Discuss training and support needs for your rollout.", "04"],
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
