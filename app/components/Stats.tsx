"use client";

import { useLang } from "../context/LanguageContext";

const steps = [
  { number: "01", title: ["Know who is in", "اعرف من حضر"], detail: ["Attendance, shifts and leave in one view", "الحضور والورديات والإجازات في شاشة واحدة"] },
  { number: "02", title: ["Handle requests", "أنجز الطلبات"], detail: ["Keep employee requests moving", "تابع طلبات الموظفين بسهولة"] },
  { number: "03", title: ["Prepare payroll", "جهّز الرواتب"], detail: ["Bring time and payroll work together", "اربط بيانات الوقت بالرواتب"] },
  { number: "04", title: ["Keep records ready", "نظّم الملفات"], detail: ["Find the people information you need", "اعثر على بيانات الموظفين وقت الحاجة"] },
] as const;

export default function Stats() {
  const { lang } = useLang();
  const index = lang === "ar" ? 1 : 0;
  return (
    <section id="daily-work" className="border-y border-white/10 bg-[#0f1923] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[.18em] text-[#00B4B4]">{lang === "ar" ? "العمل اليومي أولاً" : "Daily work first"}</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold md:text-3xl">{lang === "ar" ? "من أول تسجيل حضور حتى إتمام الرواتب" : "From the first check-in to the final payroll run"}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="text-sm font-bold text-[#00B4B4]">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title[index]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.detail[index]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
