"use client";

import { useLang } from "../context/LanguageContext";

const groups = [
  { name: ["People & payroll", "الأفراد والرواتب"], description: ["The essentials for every workday", "أساسيات كل يوم عمل"], module: 1, items: [["Employee records", "ملفات الموظفين"], ["Attendance & shifts", "الحضور والورديات"], ["Leave & holidays", "الإجازات والعطلات"], ["Payroll & payslips", "الرواتب وكشوفها"], ["Overtime, loans & expenses", "الإضافي والسلف والمصروفات"], ["Reports & organization chart", "التقارير والهيكل التنظيمي"]] },
  { name: ["Employee lifecycle", "دورة حياة الموظف"], description: ["From first day to next opportunity", "من أول يوم إلى الخطوة التالية"], module: 2, items: [["Onboarding & exit", "التعيين وإنهاء الخدمة"], ["Documents & letters", "المستندات والخطابات"], ["Assets & benefits", "العهد والمزايا"], ["Policies & workflows", "السياسات وسير العمل"]] },
  { name: ["Growth & support", "التطوير والدعم"], description: ["Make HR more useful to every team", "اجعل الموارد البشرية أقرب لكل فريق"], module: 2, items: [["Training & performance", "التدريب والأداء"], ["Helpdesk & surveys", "الدعم والاستبيانات"], ["Travel & remote-work requests", "طلبات السفر والعمل عن بُعد"], ["Disciplinary cases", "الإجراءات التأديبية"]] },
  { name: ["Hiring & AI", "التوظيف والذكاء الاصطناعي"], description: ["Bring your hiring workflow together", "اجمع خطوات التوظيف في مكان واحد"], module: 3, items: [["Recruitment pipeline", "مراحل التوظيف"], ["AI candidate screening", "فرز المرشحين بالذكاء الاصطناعي"], ["Assessments", "التقييمات"], ["Job descriptions & talent pool", "الوصف الوظيفي وقاعدة المواهب"]] },
] as const;

export default function Products() {
  const { lang, t } = useLang();
  const index = lang === "ar" ? 1 : 0;

  return (
    <section id="products" className="bg-[#0f1923] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#00B4B4]">{lang === "ar" ? "استكشف المنصة" : "Explore the platform"}</p>
          <h2 className="text-4xl font-bold md:text-5xl">{t("products.title")}</h2>
          <p className="mt-5 text-lg text-white/60">{t("products.sub")}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2" aria-label={lang === "ar" ? "الوحدات المتاحة" : "Available modules"}>
          {["products.m1.name", "products.m2.name", "products.m3.name"].map((key, i) => (
            <span key={key} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="me-2 font-bold text-[#00B4B4]">0{i + 1}</span>{t(key)}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.name[0]} className="rounded-2xl border border-white/10 bg-[#1B2A4A]/60 p-7 shadow-xl shadow-black/10 transition-colors hover:border-[#00B4B4]/50">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{group.name[index]}</h3>
                  <p className="mt-1 text-sm text-white/50">{group.description[index]}</p>
                </div>
                <span className="rounded-full bg-[#00B4B4]/15 px-3 py-1 text-xs font-semibold text-[#5de0dc]">
                  {lang === "ar" ? `الوحدة ${group.module} وما بعدها` : `Module ${group.module} onward`}
                </span>
              </div>
              <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item[0]} className="flex gap-2 text-sm text-white/80"><span className="text-[#00B4B4]" aria-hidden="true">✓</span>{item[index]}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#00B4B4]/25 bg-[#00B4B4]/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/75">{lang === "ar" ? "كل وحدة تشمل ما قبلها. اعرف ما يناسب حجم فريقك واحتياجاته." : "Each module includes the ones before it. Find the right fit for your team and its needs."}</p>
          <a href="#pricing" className="shrink-0 rounded-xl bg-[#00B4B4] px-5 py-3 text-center text-sm font-semibold text-[#0f1923] transition-colors hover:bg-[#5de0dc]">{lang === "ar" ? "قارن الباقات" : "Compare plans"}</a>
        </div>
      </div>
    </section>
  );
}
