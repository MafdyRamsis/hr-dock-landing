import { useLang } from "../context/LanguageContext";

type VisualKind = "payroll" | "operations" | "hiring";
const label = (ar: boolean, en: string, arabic: string) => ar ? arabic : en;

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-rose-300" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span className="ms-3 text-[10px] font-semibold text-slate-500">{title}</span>
        <span className="ms-auto rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-600">HR Dock</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function PayrollVisual({ ar }: { ar: boolean }) {
  const bars = [44, 67, 59, 83, 73, 92, 78];
  return <Frame title={label(ar, "People · Time · Payroll", "الأفراد · الوقت · الرواتب")}>
    <div className="grid grid-cols-3 gap-2">
      {[[label(ar, "Present", "الحاضرون"), "92%"], [label(ar, "Leave", "الإجازات"), "08"], [label(ar, "Payroll", "الرواتب"), label(ar, "Ready", "جاهز")]].map(([itemLabel, value]) => <div key={itemLabel} className="rounded-xl border border-slate-100 bg-slate-50 p-3"><p className="text-[9px] text-slate-500">{itemLabel}</p><p className="mt-1 text-lg font-bold text-slate-900">{value}</p></div>)}
    </div>
    <div className="mt-3 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
      <div className="rounded-xl border border-slate-100 p-3">
        <p className="text-[10px] font-bold text-slate-700">{label(ar, "Weekly attendance", "الحضور الأسبوعي")}</p>
        <div className="mt-4 flex h-20 items-end gap-2">{bars.map((height, index) => <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-cyan-400" style={{ height: `${height}%` }} />)}</div>
        <div className="mt-1 flex justify-between text-[8px] text-slate-400"><span>Sat</span><span>Fri</span></div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[conic-gradient(#4f46e5_0_78%,#67e8f9_78%_92%,#e2e8f0_92%)]"><div className="grid h-14 w-14 place-items-center rounded-full bg-white text-xs font-bold text-slate-800">92%</div></div>
        <div><p className="text-[10px] font-bold text-slate-700">{label(ar, "Today", "اليوم")}</p><p className="mt-1 text-[9px] leading-4 text-slate-500">{label(ar, "Attendance at a glance", "نظرة سريعة على الحضور")}</p></div>
      </div>
    </div>
    <div className="mt-3 flex items-center justify-between rounded-xl bg-indigo-50 px-4 py-3 text-xs"><span className="font-semibold text-slate-700">{label(ar, "Payroll review", "مراجعة الرواتب")}</span><span className="rounded-full bg-white px-2 py-1 font-bold text-indigo-600">{label(ar, "Ready to check", "جاهز للمراجعة")}</span></div>
  </Frame>;
}

function OperationsVisual({ ar }: { ar: boolean }) {
  return <Frame title={label(ar, "HR operations · Employee lifecycle", "عمليات الموارد البشرية · رحلة الموظف")}>
    <div className="flex items-center justify-between"><div><p className="text-xs font-bold text-slate-800">{label(ar, "New employee journey", "رحلة الموظف الجديد")}</p><p className="mt-1 text-[10px] text-slate-500">{label(ar, "A clear start for every hire", "بداية واضحة لكل موظف")}</p></div><span className="rounded-full bg-cyan-50 px-2 py-1 text-[9px] font-bold text-cyan-700">{label(ar, "In progress", "جارٍ التنفيذ")}</span></div>
    <div className="mt-5 grid grid-cols-3 gap-2">
      {[["01", label(ar, "Profile", "الملف"), label(ar, "Done", "مكتمل")], ["02", label(ar, "Documents", "المستندات"), label(ar, "In review", "قيد المراجعة")], ["03", label(ar, "Welcome", "الترحيب"), label(ar, "Next", "التالي")]].map(([number, stepLabel, status], index) => <div key={number} className="rounded-xl border border-slate-100 bg-slate-50 p-3"><span className={`grid h-7 w-7 place-items-center rounded-full text-[9px] font-bold ${index === 0 ? "bg-emerald-100 text-emerald-700" : index === 1 ? "bg-indigo-100 text-indigo-700" : "bg-slate-200 text-slate-500"}`}>{number}</span><p className="mt-3 text-[10px] font-semibold text-slate-800">{stepLabel}</p><p className="mt-1 text-[9px] text-slate-500">{status}</p></div>)}
    </div>
    <div className="mt-3 grid gap-2 sm:grid-cols-2">
      <div className="rounded-xl border border-slate-100 p-3"><p className="text-[10px] font-bold text-slate-700">{label(ar, "Document vault", "ملفات الموظفين")}</p><p className="mt-3 text-[9px] text-slate-500">▤ &nbsp; {label(ar, "Employment letter", "خطاب التعيين")} <span className="float-end text-emerald-600">✓</span></p><p className="mt-2 text-[9px] text-slate-500">▤ &nbsp; {label(ar, "ID copy", "صورة الهوية")} <span className="float-end text-emerald-600">✓</span></p></div>
      <div className="rounded-xl border border-slate-100 p-3"><p className="text-[10px] font-bold text-slate-700">{label(ar, "Requests", "الطلبات")}</p><p className="mt-3 text-[9px] text-slate-500">{label(ar, "Leave request", "طلب إجازة")} <span className="float-end rounded bg-amber-50 px-1 text-amber-700">{label(ar, "Review", "مراجعة")}</span></p><p className="mt-2 text-[9px] text-slate-500">{label(ar, "Asset request", "طلب عهدة")} <span className="float-end rounded bg-indigo-50 px-1 text-indigo-700">{label(ar, "Open", "مفتوح")}</span></p></div>
    </div>
  </Frame>;
}

function HiringVisual({ ar }: { ar: boolean }) {
  const stages = [[label(ar, "Applied", "تقديم"), 12, "bg-indigo-500"], [label(ar, "Screened", "فرز"), 7, "bg-cyan-500"], [label(ar, "Interview", "مقابلة"), 3, "bg-emerald-500"]];
  return <Frame title={label(ar, "Recruitment · Hiring workflow", "التوظيف · سير العمل")}>
    <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold text-slate-800">{label(ar, "Hiring pipeline", "مراحل التوظيف")}</p><p className="mt-1 text-[10px] text-slate-500">{label(ar, "Track candidates from application to decision", "تابع المرشحين من التقديم إلى القرار")}</p></div><span className="rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-bold text-indigo-600">{label(ar, "3 stages", "٣ مراحل")}</span></div>
    <div className="mt-5 grid grid-cols-3 gap-2">
      {stages.map(([name, count, color]) => <div key={name} className="rounded-xl border border-slate-100 bg-slate-50 p-3"><span className={`block h-1 w-8 rounded-full ${color}`} /><p className="mt-3 text-[10px] font-semibold text-slate-700">{name}</p><p className="mt-1 text-xl font-bold text-slate-900">{count}</p></div>)}
    </div>
    <div className="mt-3 rounded-xl border border-slate-100 p-3"><div className="flex justify-between text-[10px]"><span className="font-bold text-slate-700">{label(ar, "Candidate review", "مراجعة المرشحين")}</span><span className="text-slate-400">{label(ar, "Illustrative scores", "درجات توضيحية")}</span></div>
      {[[label(ar, "Candidate A", "مرشح أ"), 88], [label(ar, "Candidate B", "مرشح ب"), 74], [label(ar, "Candidate C", "مرشح ج"), 61]].map(([name, score]) => <div key={name} className="mt-3 flex items-center gap-3 text-[9px] text-slate-600"><span className="w-20 shrink-0">{name}</span><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${score}%` }} /></div><strong className="w-6 text-end text-indigo-600">{score}</strong></div>)}
    </div>
  </Frame>;
}

export default function ModuleVisual({ kind }: { kind: VisualKind }) {
  const { lang } = useLang();
  const ar = lang === "ar";
  if (kind === "payroll") return <PayrollVisual ar={ar} />;
  if (kind === "operations") return <OperationsVisual ar={ar} />;
  return <HiringVisual ar={ar} />;
}
