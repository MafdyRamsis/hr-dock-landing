"use client";

import { useLang } from "../context/LanguageContext";

// What makes HR Dock fit Egyptian companies — every item is a feature that
// exists in the product today.
const items: { title: [string, string]; text: [string, string]; icon: string }[] = [
  {
    title: ["Egyptian tax & social insurance", "الضرائب والتأمينات المصرية"],
    text: ["Income tax brackets, social insurance and the Martyrs Fund are calculated on every payslip, gross-to-net or net-to-gross.", "حساب ضريبة الدخل والتأمينات الاجتماعية وصندوق الشهداء في كل قسيمة راتب، من الإجمالي للصافي أو من الصافي للإجمالي."],
    icon: "M9 7h6m-6 4h6m-6 4h3M6 3h12v18l-3-2-3 2-3-2-3 2z",
  },
  {
    title: ["Fingerprint devices & mobile check-in", "أجهزة البصمة والحضور من الموبايل"],
    text: ["Connect ZKTeco attendance devices, or let employees check in from the app with location — even when the connection drops.", "اربط أجهزة البصمة ZKTeco، أو خلّي الموظفين يسجلوا الحضور من التطبيق بالموقع، حتى لو النت فصل."],
    icon: "M12 11c0 3-1 6-3 8m6-8c0 2.5-.5 5-1.5 7M8 11a4 4 0 0 1 8 0M5 11a7 7 0 0 1 14 0c0 1.5-.2 3-.6 4.5",
  },
  {
    title: ["Arabic everywhere", "العربي في كل مكان"],
    text: ["Screens, payslips, letters and printed sheets switch to Arabic with the system language — for HR and for every employee.", "الشاشات وقسائم الرواتب والخطابات والكشوف المطبوعة تتحول للعربي مع لغة النظام، للموارد البشرية ولكل موظف."],
    icon: "M4 5h7M7.5 3v2m2 0c-.5 3-2.5 6-5.5 8m2-4c1 2 3 3.5 5 4.5M13 21l4-10 4 10m-6.5-3h5",
  },
  {
    title: ["Payslips on WhatsApp", "قسائم الرواتب على واتساب"],
    text: ["Send each employee their payslip on WhatsApp or in the app, and keep a record of who received it.", "ابعت لكل موظف قسيمة راتبه على واتساب أو في التطبيق، مع سجل بمين استلم."],
    icon: "M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.4A9 9 0 1 1 21 12z",
  },
  {
    title: ["Bank transfer & salary sheets", "ملف التحويل البنكي وكشوف الرواتب"],
    text: ["Export the bank salary-transfer file and print the signed salary acknowledgement sheet by department, section and location.", "صدّر ملف تحويل الرواتب للبنك واطبع كشف استلام الرواتب حسب الإدارة والقسم والموقع."],
    icon: "M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3l9 5H3z",
  },
  {
    title: ["An assistant that knows the Labour Law", "مساعد يعرف قانون العمل"],
    text: ["Ask HR questions in Arabic or English and get answers based on Egypt's Labour Law No. 14 of 2025 and your own policies.", "اسأل أسئلة الموارد البشرية بالعربي أو الإنجليزي واحصل على إجابات مبنية على قانون العمل رقم 14 لسنة 2025 وسياسات شركتك."],
    icon: "M8 10h8M8 14h5M12 3a9 9 0 0 0-8 13l-1 5 5-1a9 9 0 1 0 4-17z",
  },
];

export default function EgyptReady() {
  const { lang } = useLang();
  const i = lang === "ar" ? 1 : 0;
  return (
    <section id="egypt" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{i ? "مصمم للسوق المصري" : "Made for Egypt"}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{i ? "قواعد الرواتب المصرية جاهزة من أول يوم." : "Egyptian payroll rules, ready on day one."}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{i ? "مش نظام أجنبي متترجم. HR Dock مبني على طريقة شغل الموارد البشرية والرواتب في مصر." : "Not a foreign system with a translation layer. HR Dock is built around how HR and payroll actually work in Egypt."}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title[0]} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-indigo-600 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d={item.icon} /></svg>
              </span>
              <h3 className="mt-5 text-lg font-bold">{item.title[i]}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text[i]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
