"use client";

import { useLang } from "../context/LanguageContext";

const steps = [
  { number: "01", title: ["Payroll cut-off is a chase", "إغلاق الرواتب يتحول إلى مطاردة"], detail: ["Attendance edits, overtime and leave arrive from different people and files.", "تصل تعديلات الحضور والإضافي والإجازات من أشخاص وملفات مختلفة."], answer: ["Review the inputs together before payroll.", "راجع المدخلات معاً قبل إعداد الرواتب."] },
  { number: "02", title: ["Approvals disappear in chats", "الموافقات تضيع بين الرسائل"], detail: ["A manager misses a leave or employee request, and HR has to follow up again.", "يفوت المدير طلب إجازة أو طلب موظف، فتبدأ الموارد البشرية المتابعة من جديد."], answer: ["Give requests a visible path and status.", "امنح الطلبات مساراً وحالة واضحة."] },
  { number: "03", title: ["The right file is hard to find", "الملف المطلوب يصعب العثور عليه"], detail: ["Contracts, letters and employee history are scattered when they are needed most.", "تتوزع العقود والخطابات وسجل الموظف وقت الحاجة إليها."], answer: ["Keep each employee's records together.", "احتفظ بسجلات كل موظف في مكان واحد."] },
  { number: "04", title: ["Leaders need answers now", "الإدارة تحتاج إجابات الآن"], detail: ["Headcount, absence and team activity take too long to assemble across locations.", "يستغرق جمع بيانات عدد الموظفين والغياب ونشاط الفرق وقتاً طويلاً عبر الفروع."], answer: ["See the operational picture in one view.", "شاهد صورة العمل في واجهة واحدة."] },
] as const;

export default function Stats() {
  const { lang } = useLang();
  const index = lang === "ar" ? 1 : 0;
  return (
    <section id="daily-work" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[.2em] text-slate-500">{lang === "ar" ? "مصمم لفرق العمل في مصر" : "Designed for teams in Egypt"}</p>
        <div className="mt-8 grid grid-cols-2 gap-5 border-b border-slate-200 pb-14 md:grid-cols-4">
          {[
            ["M4 7h16M7 4v6m10-6v6M5 12h14v8H5z", lang === "ar" ? "سير عمل يومي" : "Daily workflows"],
            ["M4 6h16v12H4zM8 10h8m-8 4h5", lang === "ar" ? "العربية والإنجليزية" : "Arabic & English"],
            ["M7 3h10v18H7zM10 17h4", lang === "ar" ? "ويب وجوال" : "Web & mobile"],
            ["M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z", lang === "ar" ? "بيانات منظّمة" : "Organized records"],
          ].map(([path, label]) => (
            <div key={label} className="flex items-center justify-center gap-3 text-slate-500">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d={path} /></svg></span>
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{lang === "ar" ? "المشكلات التي نحلها" : "The problems we help solve"}</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">{lang === "ar" ? "أين يتعطل يوم فريق الموارد البشرية؟" : "Where does your HR day get stuck?"}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">{lang === "ar" ? "ليست المشكلة نقص الجداول؛ بل انتقال البيانات والقرارات بينها كل يوم." : "The problem is rarely a lack of spreadsheets. It's the handoffs between people, files and decisions."}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/70">
              <span className="text-sm font-bold text-indigo-600">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title[index]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.detail[index]}</p>
              <p className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold leading-6 text-indigo-700">{step.answer[index]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
