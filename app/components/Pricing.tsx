"use client";

import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import type { SiteContent } from "../lib/site-content";

const numeric = /^\d+(?:\.\d{1,2})?$/;

export default function Pricing({ content }: { content: SiteContent["pricing"] }) {
  const { lang } = useLang();
  const [annual, setAnnual] = useState(true);
  const hasRates = content.plans.some((plan) => numeric.test(plan.monthlyPrice) && numeric.test(plan.annualPrice) && plan.monthlyPrice !== plan.annualPrice);

  return (
    <section id="pricing" className="bg-white py-24 text-slate-900 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{lang === "ar" ? "باقات تناسب فريقك · الأسعار بالجنيه المصري" : `${content.eyebrow} · Quotes in EGP`}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{lang === "ar" ? "ابدأ بأساسيات الموارد البشرية ثم توسّع" : content.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{lang === "ar" ? "أخبرنا بحجم فريقك وسير العمل المطلوب. سنقترح الباقة المناسبة ونقدم عرض سعر بالجنيه المصري." : content.subtitle}</p>
          {hasRates && <div className="mt-8 inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1" role="group" aria-label="Billing period">
            <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)} className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${!annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>{lang === "ar" ? "شهري" : "Monthly"}</button>
            <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)} className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>{lang === "ar" ? "سنوي" : "Annual"} {content.annualDiscount && <span className="ms-1 rounded-full bg-cyan-100 px-2 py-0.5 text-xs text-cyan-800">{content.annualDiscount}</span>}</button>
          </div>}
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {content.plans.map((plan, index) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            const isNumeric = numeric.test(price);
            const displayName = lang === "ar" ? (["الأساسية", "النمو", "المؤسسات"][index] ?? plan.name) : plan.name;
            return <article key={plan.name} className={`relative flex flex-col rounded-[1.5rem] border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.featured ? "border-indigo-400 bg-slate-900 text-white shadow-xl shadow-indigo-900/15" : "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-indigo-200"}`}>
              {plan.featured && <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-900">{lang === "ar" ? "الأكثر طلباً" : "Most popular"}</span>}
              <p className={`text-xs font-bold uppercase tracking-[.16em] ${plan.featured ? "text-cyan-300" : "text-indigo-600"}`}>{lang === "ar" ? `الوحدة ${index + 1}` : `Module ${index + 1}`}</p>
              <h3 className="mt-4 text-2xl font-bold">{displayName}</h3>
              <p className={`mt-2 min-h-12 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>{plan.description}</p>
              <div className="mt-8">
                <p className="text-4xl font-bold tracking-tight">{isNumeric ? `${content.currency} ${Number(price).toLocaleString("en-EG")}` : (lang === "ar" ? "تواصل معنا" : price)}</p>
                <p className={`mt-2 text-xs ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{isNumeric ? (lang === "ar" ? "لكل موظف / شهرياً" : "per employee / month") : (lang === "ar" ? "عرض السعر بالجنيه المصري" : "Your quote will be in EGP")}</p>
              </div>
              <a href="#contact" className={`mt-8 rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${plan.featured ? "bg-indigo-500 text-white hover:bg-indigo-400" : "border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"}`}>{lang === "ar" ? "اطلب عرض سعر" : plan.cta}</a>
              <div className={`my-7 border-t ${plan.featured ? "border-white/15" : "border-slate-200"}`} />
              <p className={`mb-5 text-xs font-bold uppercase tracking-widest ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>{lang === "ar" ? "ما تشمله الباقة" : "What's included"}</p>
              <ul className="space-y-4">{plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-5"><span className={`font-bold ${plan.featured ? "text-cyan-300" : "text-indigo-600"}`} aria-hidden="true">✓</span>{feature}</li>)}</ul>
            </article>;
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">{lang === "ar" ? "الأسعار النهائية تعتمد على حجم الفريق واحتياجات التنفيذ. لا توجد أسعار منشورة حالياً." : "Final quotes depend on team size and implementation needs. Public rates are not set yet."}</p>
      </div>
    </section>
  );
}
