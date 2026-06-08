"use client";

/* ── Shared shell that wraps every mockup in a browser-chrome frame ── */
function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl text-[11px]">
      {/* browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0f1923]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="flex-1 mx-3 h-4 rounded bg-white/10 flex items-center px-2 text-white/30 text-[9px]">
          app.hrdock.com
        </div>
      </div>
      {/* app shell */}
      <div className="flex h-52 bg-[#f0f2f5]">
        {/* sidebar */}
        <div className="w-28 bg-[#1B2A4A] flex flex-col py-2 shrink-0">
          <div className="flex items-center gap-1.5 px-2 mb-3">
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[8px] font-bold text-[#00B4B4]">HR</div>
            <div>
              <div className="text-[8px] font-bold text-white leading-none">HR Dock</div>
              <div className="text-[6px] text-white/40">HR DOCK</div>
            </div>
          </div>
          {["Dashboard","Requests","Employees","Time & Payroll","Talent","HR Ops","Admin"].map((item, i) => (
            <div key={item} className={`px-2 py-1 mx-1 rounded text-[8px] mb-0.5 ${i === 3 ? "bg-[#00B4B4]/20 text-[#00B4B4] font-semibold" : "text-white/50"}`}>
              {item}
            </div>
          ))}
        </div>
        {/* content */}
        {children}
      </div>
    </div>
  );
}

/* ── 1. Smart Payroll ── */
export function PayrollMockup() {
  const rows = [
    { name: "Ahmed Hassan",    dept: "Engineering", salary: "12,500", tax: "1,875", net: "10,625", status: "Paid" },
    { name: "Sara Mahmoud",   dept: "Marketing",   salary: "9,800",  tax: "1,470", net: "8,330",  status: "Paid" },
    { name: "Omar Salah",     dept: "Sales",       salary: "8,200",  tax: "1,230", net: "6,970",  status: "Pending" },
    { name: "Nour Ibrahim",   dept: "HR",          salary: "7,500",  tax: "1,125", net: "6,375",  status: "Paid" },
  ];
  return (
    <MockupShell>
      <div className="flex-1 p-3 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold text-[#1B2A4A] text-xs">Payroll — June 2026</div>
          <div className="text-[9px] bg-[#E8604C] text-white px-2 py-0.5 rounded-full">Run Payroll</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          {[["Total Payroll","EGP 380,500"],["Employees","48"],["Pending","3"]].map(([l,v])=>(
            <div key={l} className="bg-white rounded p-1.5 border border-gray-100">
              <div className="text-[8px] text-gray-400">{l}</div>
              <div className="font-bold text-[#1B2A4A]">{v}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-5 px-2 py-1 bg-gray-50 text-[8px] text-gray-400 font-medium">
            <span>Employee</span><span>Dept</span><span>Gross (EGP)</span><span>Tax</span><span>Status</span>
          </div>
          {rows.map(r=>(
            <div key={r.name} className="grid grid-cols-5 px-2 py-1 border-t border-gray-50 text-[8px]">
              <span className="text-[#1B2A4A] font-medium truncate">{r.name}</span>
              <span className="text-gray-400">{r.dept}</span>
              <span className="text-[#1B2A4A]">{r.salary}</span>
              <span className="text-[#E8604C]">{r.tax}</span>
              <span className={`font-semibold ${r.status==="Paid"?"text-[#00B4B4]":"text-yellow-500"}`}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

/* ── 2. Attendance & Leave ── */
export function AttendanceMockup() {
  const days = ["Sun","Mon","Tue","Wed","Thu"];
  const employees = [
    { name: "Ahmed H.", statuses: ["present","present","present","late","present"] },
    { name: "Sara M.",  statuses: ["present","absent","present","present","present"] },
    { name: "Omar S.",  statuses: ["leave","leave","present","present","present"] },
    { name: "Nour I.",  statuses: ["present","present","present","present","absent"] },
  ];
  const color: Record<string,string> = {
    present: "bg-[#00B4B4]", absent: "bg-[#E8604C]", late: "bg-yellow-400", leave: "bg-purple-400"
  };
  return (
    <MockupShell>
      <div className="flex-1 p-3 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold text-[#1B2A4A] text-xs">Attendance — Week 23</div>
          <div className="flex gap-2 text-[8px]">
            {[["present","#00B4B4"],["absent","#E8604C"],["late","#FBBF24"],["leave","#A78BFA"]].map(([l,c])=>(
              <span key={l} className="flex items-center gap-1"><span className="w-2 h-2 rounded-full inline-block" style={{background:c}}/>{l}</span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded border border-gray-100 overflow-hidden mb-2">
          <div className="grid grid-cols-6 px-2 py-1 bg-gray-50 text-[8px] text-gray-400">
            <span>Employee</span>{days.map(d=><span key={d} className="text-center">{d}</span>)}
          </div>
          {employees.map(e=>(
            <div key={e.name} className="grid grid-cols-6 px-2 py-1.5 border-t border-gray-50 items-center">
              <span className="text-[8px] text-[#1B2A4A] font-medium">{e.name}</span>
              {e.statuses.map((s,i)=>(
                <div key={i} className="flex justify-center">
                  <span className={`w-4 h-4 rounded-full ${color[s]}`}/>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[["On Time","38","text-[#00B4B4]"],["Late","4","text-yellow-500"],["On Leave","6","text-purple-400"]].map(([l,v,c])=>(
            <div key={l} className="bg-white rounded p-1.5 border border-gray-100 text-center">
              <div className={`font-bold text-base ${c}`}>{v}</div>
              <div className="text-[8px] text-gray-400">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

/* ── 3. Recruitment Pipeline ── */
export function RecruitmentMockup() {
  const stages = [
    { label: "Applied", color: "bg-gray-100 text-gray-600", candidates: ["Youssef A.","Mariam T.","Ali K."] },
    { label: "Interview", color: "bg-blue-50 text-blue-600", candidates: ["Hana S.","Karim M."] },
    { label: "Offer", color: "bg-[#00B4B4]/10 text-[#00B4B4]", candidates: ["Dina R."] },
  ];
  return (
    <MockupShell>
      <div className="flex-1 p-3 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold text-[#1B2A4A] text-xs">Recruitment Pipeline</div>
          <div className="text-[9px] bg-[#1B2A4A] text-white px-2 py-0.5 rounded-full">+ Post Job</div>
        </div>
        <div className="text-[8px] text-gray-400 mb-2">Senior React Developer · 6 applicants</div>
        <div className="grid grid-cols-3 gap-2">
          {stages.map(s=>(
            <div key={s.label} className="bg-white rounded border border-gray-100 p-2">
              <div className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full inline-block mb-2 ${s.color}`}>{s.label}</div>
              {s.candidates.map(c=>(
                <div key={c} className="flex items-center gap-1.5 mb-1.5 bg-gray-50 rounded p-1">
                  <div className="w-4 h-4 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center text-[7px] font-bold shrink-0">{c[0]}</div>
                  <span className="text-[8px] text-[#1B2A4A] truncate">{c}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

/* ── 4. HR Analytics ── */
export function AnalyticsMockup() {
  const bars = [55,70,45,85,60,90,75,65,80,50,95,70];
  return (
    <MockupShell>
      <div className="flex-1 p-3 overflow-hidden">
        <div className="font-bold text-[#1B2A4A] text-xs mb-2">HR Analytics</div>
        <div className="grid grid-cols-4 gap-1.5 mb-2">
          {[["Headcount","248","↑ 12%"],["Turnover","4.2%","↓ 1%"],["Avg Salary","EGP 9.4K","↑ 8%"],["Open Roles","7","→ 0%"]].map(([l,v,c])=>(
            <div key={l} className="bg-white rounded border border-gray-100 p-1.5">
              <div className="text-[7px] text-gray-400">{l}</div>
              <div className="font-bold text-[#1B2A4A] text-[10px]">{v}</div>
              <div className={`text-[7px] ${c.startsWith("↑")?"text-[#00B4B4]":c.startsWith("↓")?"text-[#E8604C]":"text-gray-400"}`}>{c}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded border border-gray-100 p-2">
          <div className="text-[8px] text-gray-400 mb-1.5">Headcount trend (12 months)</div>
          <div className="flex items-end gap-0.5 h-16">
            {bars.map((h,i)=>(
              <div key={i} className="flex-1 rounded-t" style={{height:`${h}%`, background: i===11?"#E8604C":"#00B4B4", opacity: 0.8+i*0.015}}/>
            ))}
          </div>
          <div className="flex justify-between text-[7px] text-gray-300 mt-1">
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ── 5. Multi-Company ── */
export function MultiCompanyMockup() {
  const companies = [
    { name: "Shaheen Group", employees: 248, plan: "Enterprise", active: true },
    { name: "TechCorp Egypt", employees: 95, plan: "Growth", active: true },
    { name: "Nile Ventures", employees: 32, plan: "Starter", active: false },
  ];
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl text-[11px]">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0f1923]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="flex-1 mx-3 h-4 rounded bg-white/10 flex items-center px-2 text-white/30 text-[9px]">
          hub.hrdock.com
        </div>
      </div>
      <div className="bg-[#1B2A4A] p-4 h-52">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-white font-bold text-xs">Platform Hub</div>
            <div className="text-white/40 text-[8px]">Operator View</div>
          </div>
          <div className="text-[9px] bg-[#00B4B4] text-white px-2 py-0.5 rounded-full">+ Add Company</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[["Companies","3"],["Total Users","375"],["Active Now","12"]].map(([l,v])=>(
            <div key={l} className="bg-white/10 rounded p-2 text-center">
              <div className="text-white font-bold">{v}</div>
              <div className="text-white/40 text-[8px]">{l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {companies.map(c=>(
            <div key={c.name} className="bg-white/10 rounded p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#00B4B4]/30 text-[#00B4B4] flex items-center justify-center text-[8px] font-bold">{c.name[0]}</div>
                <div>
                  <div className="text-white text-[8px] font-medium">{c.name}</div>
                  <div className="text-white/40 text-[7px]">{c.employees} employees · {c.plan}</div>
                </div>
              </div>
              <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-semibold ${c.active?"bg-[#00B4B4]/20 text-[#00B4B4]":"bg-white/10 text-white/40"}`}>
                {c.active ? "Active" : "Suspended"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 6. Mobile App ── */
export function MobileAppMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-36 rounded-3xl border-4 border-[#1B2A4A] bg-[#1B2A4A] shadow-2xl overflow-hidden" style={{height: "220px"}}>
        {/* notch */}
        <div className="flex justify-center pt-1 pb-0.5">
          <div className="w-10 h-1.5 bg-black/60 rounded-full"/>
        </div>
        {/* screen */}
        <div className="bg-[#f0f2f5] mx-0.5 rounded-2xl overflow-hidden h-full">
          {/* mobile header */}
          <div className="bg-[#1B2A4A] px-2 pt-2 pb-3">
            <div className="flex items-center justify-between mb-1">
              <div className="text-[7px] text-white/60">Good morning 👋</div>
              <div className="w-4 h-4 rounded-full bg-[#E8604C] text-white flex items-center justify-center text-[6px] font-bold">AF</div>
            </div>
            <div className="text-white font-bold text-[9px]">Ahmed Fathy</div>
            <div className="text-[#00B4B4] text-[7px]">Employee · HR Dock</div>
          </div>
          {/* quick actions */}
          <div className="px-2 py-1.5">
            <div className="grid grid-cols-3 gap-1 mb-2">
              {[["📋","Payroll"],["📅","Leave"],["⏰","Clock In"]].map(([e,l])=>(
                <div key={l} className="bg-white rounded-lg p-1.5 text-center border border-gray-100">
                  <div className="text-sm">{e}</div>
                  <div className="text-[6px] text-gray-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-gray-100 mb-1">
              <div className="text-[7px] font-semibold text-[#1B2A4A] mb-1">Recent Requests</div>
              {[["Leave Request","Approved","text-[#00B4B4]"],["Overtime","Pending","text-yellow-500"]].map(([t,s,c])=>(
                <div key={t} className="flex justify-between items-center py-0.5 border-t border-gray-50">
                  <span className="text-[6px] text-gray-500">{t}</span>
                  <span className={`text-[6px] font-semibold ${c}`}>{s}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#00B4B4] rounded-lg p-1.5 text-center">
              <div className="text-white text-[7px] font-bold">Clock In →</div>
              <div className="text-white/70 text-[6px]">08:00 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
