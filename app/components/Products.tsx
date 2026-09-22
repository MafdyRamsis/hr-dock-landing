"use client";

import { useLang } from "../context/LanguageContext";
import ModuleVisual from "./ModuleVisuals";

function BentoPreview({ kind, ar }: { kind: number; ar: boolean }) {
  if (kind === 0) return <div className="mt-7 flex max-w-sm gap-2" aria-hidden="true">{(ar ? ["الملف", "المستندات", "الترحيب"] : ["Profile", "Documents", "Welcome"]).map((step, index) => <div key={step} className="flex-1 rounded-lg border border-slate-200 bg-white/85 px-3 py-2 shadow-sm"><span className={`block h-1.5 w-8 rounded-full ${index === 0 ? "bg-emerald-400" : index === 1 ? "bg-indigo-500" : "bg-slate-200"}`} /><span className="mt-2 block text-[9px] font-semibold text-slate-500">{step}</span></div>)}</div>;
  if (kind === 1) return <div className="mt-7 flex max-w-xs items-center gap-3 rounded-xl border border-slate-200 bg-white/85 p-3 shadow-sm" aria-hidden="true"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[conic-gradient(#4f46e5_0_78%,#67e8f9_78%_92%,#e2e8f0_92%)]"><span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[10px] font-bold text-slate-800">92%</span></div><div className="flex-1"><span className="block text-[9px] font-semibold text-slate-700">{ar ? "حضور اليوم" : "Today's attendance"}</span><div className="mt-2 flex gap-1">{[70, 88, 63, 96, 82].map((width, i) => <span key={i} className="h-1.5 rounded-full bg-indigo-400" style={{ width: `${width / 5}%` }} />)}</div></div></div>;
  if (kind === 2) return <div className="mt-7 max-w-xs rounded-xl border border-slate-200 bg-white/85 p-3 shadow-sm" aria-hidden="true">{(ar ? ["خطاب التعيين", "صورة الهوية"] : ["Employment letter", "ID copy"]).map((name) => <div key={name} className="flex items-center justify-between border-b border-slate-100 py-1.5 text-[9px] font-medium text-slate-600 last:border-0"><span>▤ &nbsp; {name}</span><span className="text-emerald-500">✓</span></div>)}</div>;
  return <div className="mt-7 flex h-14 max-w-xs items-end gap-1.5 rounded-xl border border-slate-200 bg-white/85 px-4 pb-3 pt-2 shadow-sm" aria-hidden="true">{[42, 65, 49, 80, 71, 93, 75, 88].map((height, i) => <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-cyan-400" style={{ height: `${height}%` }} />)}</div>;
}

const highlights = [
  { name: ["Smart onboarding", "تهيئة الموظفين الجدد"], detail: ["Give every new hire a clearer first day, with the right records and steps in one place.", "امنح كل موظف جديد بداية أوضح مع الملفات والخطوات اللازمة في مكان واحد."], module: 2, className: "md:col-span-7", icon: "M5 20v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  { name: ["Time & attendance", "الوقت والحضور"], detail: ["See shifts, check-ins and leave before they become payroll questions.", "تابع الورديات والحضور والإجازات قبل إغلاق الرواتب."], module: 1, className: "md:col-span-5", icon: "M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" },
  { name: ["Document vault", "ملفات الموظفين"], detail: ["Keep letters, policies and employee documents organized and easy to find.", "نظّم الخطابات والسياسات ومستندات الموظفين ليسهل الوصول إليها."], module: 2, className: "md:col-span-5", icon: "M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM14 3v5h4M9 13h6m-6 4h6" },
  { name: ["Useful analytics", "تحليلات عملية"], detail: ["Turn workforce activity into reports your HR team can act on.", "حوّل بيانات الفريق إلى تقارير تساعد الموارد البشرية على اتخاذ القرار."], module: 1, className: "md:col-span-7", icon: "M4 20V4m0 16h16M8 16v-5m4 5V7m4 9v-8" },
] as const;

const groups = [
  { name: ["People & payroll", "الأفراد والرواتب"], module: 1, items: [["Employee records", "ملفات الموظفين"], ["Attendance & shifts", "الحضور والورديات"], ["Leave & holidays", "الإجازات والعطلات"], ["Payroll & payslips", "الرواتب وكشوفها"], ["Overtime, loans & expenses", "الإضافي والسلف والمصروفات"]] },
  { name: ["Employee lifecycle", "دورة حياة الموظف"], module: 2, items: [["Onboarding & exit", "التعيين وإنهاء الخدمة"], ["Documents & letters", "المستندات والخطابات"], ["Assets & benefits", "العهد والمزايا"], ["Policies & workflows", "السياسات وسير العمل"]] },
  { name: ["Growth & support", "التطوير والدعم"], module: 2, items: [["Training & performance", "التدريب والأداء"], ["Helpdesk & surveys", "الدعم والاستبيانات"], ["Travel & remote-work requests", "طلبات السفر والعمل عن بُعد"], ["Disciplinary cases", "الإجراءات التأديبية"]] },
  { name: ["Hiring & AI", "التوظيف والذكاء الاصطناعي"], module: 3, items: [["Recruitment pipeline", "مراحل التوظيف"], ["AI candidate screening", "فرز المرشحين بالذكاء الاصطناعي"], ["Assessments", "التقييمات"], ["Job descriptions & talent pool", "الوصف الوظيفي وقاعدة المواهب"]] },
] as const;

export default function Products() {
  const { lang, t } = useLang();
  const index = lang === "ar" ? 1 : 0;

  return (
    <section id="products" className="bg-slate-50 py-24 text-slate-900 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{lang === "ar" ? "المنصة" : "The platform"}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{t("products.title")}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t("products.sub")}</p>
        </div>

        <div id="features" className="mt-12 grid gap-5 md:grid-cols-12">
          {highlights.map((item, indexOfItem) => (
            <article key={item.name[0]} className={`group relative min-h-72 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60 ${item.className}`}>
              <div className={`absolute -bottom-20 -right-10 h-64 w-64 rounded-full blur-3xl ${indexOfItem % 2 === 0 ? "bg-indigo-100" : "bg-cyan-100"}`} />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d={item.icon} /></svg></span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">{lang === "ar" ? `الوحدة ${item.module}+` : `Module ${item.module}+`}</span>
                </div>
                <BentoPreview kind={indexOfItem} ar={lang === "ar"} />
                <div className="mt-auto pt-10">
                  <h3 className="text-2xl font-bold tracking-tight">{item.name[index]}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">{item.detail[index]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{lang === "ar" ? "جميع الإمكانات" : "Explore the modules"}</p><h3 className="mt-3 text-3xl font-bold tracking-tight">{lang === "ar" ? "كل ما تحتاجه، منظّم بوضوح" : "Everything you need, clearly organized"}</h3></div>
          <a href="#pricing" className="inline-flex shrink-0 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100">{lang === "ar" ? "قارن الباقات ←" : "Compare plans →"}</a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <article key={group.name[0]} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">{lang === "ar" ? `الوحدة ${group.module} وما بعدها` : `Module ${group.module} onward`}</span>
              <h4 className="mt-3 text-lg font-bold">{group.name[index]}</h4>
              <ul className="mt-5 space-y-3">{group.items.map((feature) => <li key={feature[0]} className="flex gap-2 text-sm leading-5 text-slate-600"><span className="text-indigo-600" aria-hidden="true">✓</span>{feature[index]}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="mt-7 text-center text-sm text-slate-500">{lang === "ar" ? "كل وحدة تشمل ما قبلها." : "Each module includes the ones before it."}</p>

        <div className="mt-24">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">{lang === "ar" ? "شاهد المنصة" : "See the platform in action"}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{lang === "ar" ? "صورة أوضح لكل وحدة" : "A clearer picture of every module"}</h3>
          <p className="mt-3 text-sm text-slate-500">{lang === "ar" ? "المعاينات التالية توضيحية وليست بيانات عملاء حقيقية." : "The interface previews below are illustrative, not real customer data."}</p>
          <div className="mt-10 space-y-12">
            {([
              { kind: "payroll", number: "01", name: ["Payroll & attendance", "الرواتب والحضور"], text: ["Start with the work that happens every day: people records, time, leave and the payroll cycle.", "ابدأ بالأعمال اليومية: ملفات الموظفين والوقت والإجازات ودورة الرواتب."], points: [["Attendance & shifts", "الحضور والورديات"], ["Leave to payroll", "الإجازات والرواتب"], ["Egypt-focused settings", "إعدادات مناسبة لمصر"]] },
              { kind: "operations", number: "02", name: ["HR operations", "عمليات الموارد البشرية"], text: ["Give the employee lifecycle a consistent home, from onboarding and documents to requests and development.", "نظّم رحلة الموظف من التهيئة والمستندات إلى الطلبات والتطوير."], points: [["Onboarding & exit", "التعيين وإنهاء الخدمة"], ["Documents & letters", "المستندات والخطابات"], ["Requests & workflows", "الطلبات وسير العمل"]] },
              { kind: "hiring", number: "03", name: ["Recruitment & AI", "التوظيف والذكاء الاصطناعي"], text: ["Track applications, review candidates and keep hiring decisions organized when your team is ready to expand.", "تابع طلبات التوظيف وراجع المرشحين ونظّم قرارات التعيين عندما يحين وقت التوسع."], points: [["Recruitment pipeline", "مراحل التوظيف"], ["Candidate screening", "فرز المرشحين"], ["Assessments", "التقييمات"]] },
            ] as const).map((module, rowIndex) => (
              <article key={module.kind} className="grid items-center gap-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-10">
                <div className={rowIndex % 2 ? "lg:order-2" : ""}>
                  <span className="text-sm font-bold text-indigo-600">{module.number} / 03</span>
                  <h4 className="mt-4 text-3xl font-bold tracking-tight">{module.name[index]}</h4>
                  <p className="mt-4 max-w-md text-base leading-7 text-slate-600">{module.text[index]}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">{module.points.map((point) => <li key={point[0]} className="flex gap-2 text-sm font-medium text-slate-700"><span className="text-cyan-600">✓</span>{point[index]}</li>)}</ul>
                </div>
                <ModuleVisual kind={module.kind} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
