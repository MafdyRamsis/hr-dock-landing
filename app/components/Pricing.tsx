"use client";

import { useLang } from "../context/LanguageContext";
import type { SiteContent } from "../lib/site-content";

// HR Dock does not publish prices. Each client receives a quotation for its
// team; the approved deal is then invoiced and paid in the app's billing page.
// Any price values saved in the site admin are intentionally not displayed.
export default function Pricing({ content }: { content: SiteContent["pricing"] }) {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <section id="pricing" className="bg-white py-24 text-slate-900 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{ar ? "باقات تناسب فريقك · عرض سعر مخصص" : `${content.eyebrow} · Custom quotes`}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{ar ? "ابدأ من العقبة التي تستهلك وقت فريقك." : content.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{ar ? "أخبرنا بعدد الموظفين والفروع وطريقة العمل الحالية، وسنرسل لك عرض سعر بالجنيه المصري يناسب احتياجك." : content.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {content.plans.map((plan, index) => {
            const displayName = ar ? (["الأساسية", "النمو", "المؤسسات"][index] ?? plan.name) : plan.name;
            return <article key={plan.name} className={`relative flex flex-col rounded-[1.5rem] border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.featured ? "border-indigo-400 bg-slate-900 text-white shadow-xl shadow-indigo-900/15" : "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-indigo-200"}`}>
              {plan.featured && <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-900">{ar ? "الأكثر طلباً" : "Most popular"}</span>}
              <p className={`text-xs font-bold uppercase tracking-[.16em] ${plan.featured ? "text-cyan-300" : "text-indigo-600"}`}>{ar ? `الوحدة ${index + 1}` : `Module ${index + 1}`}</p>
              <h3 className="mt-4 text-2xl font-bold">{displayName}</h3>
              <p className={`mt-2 min-h-12 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>{plan.description}</p>
              <div className="mt-8">
                <p className="text-2xl font-bold tracking-tight">{ar ? "عرض سعر مخصص" : "Custom quote"}</p>
                <p className={`mt-2 text-xs ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{ar ? "حسب حجم فريقك واحتياجات التنفيذ" : "Based on your team size and setup needs"}</p>
              </div>
              <a href="#contact" className={`mt-8 rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${plan.featured ? "bg-indigo-500 text-white hover:bg-indigo-400" : "border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"}`}>{ar ? "اطلب عرض سعر" : plan.cta}</a>
              <div className={`my-7 border-t ${plan.featured ? "border-white/15" : "border-slate-200"}`} />
              <p className={`mb-5 text-xs font-bold uppercase tracking-widest ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>{ar ? "ما تشمله الباقة" : "What's included"}</p>
              <ul className="space-y-4">{plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-5"><span className={`font-bold ${plan.featured ? "text-cyan-300" : "text-indigo-600"}`} aria-hidden="true">✓</span>{feature}</li>)}</ul>
            </article>;
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">{ar ? "بعد اعتماد العرض، تصلك الفاتورة في صفحة الاشتراك داخل HR Dock ويمكنك سدادها إلكترونيًا بأمان عبر Paymob." : "Once your offer is approved, your invoice appears in HR Dock's billing page, where you can pay it securely online through Paymob."}</p>
      </div>
    </section>
  );
}
