"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.features": { en: "Features", ar: "المميزات" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.demo": { en: "Request Demo", ar: "طلب عرض" },

  // Hero
  "hero.badge": { en: "HR built for the realities of work in Egypt", ar: "موارد بشرية تناسب واقع العمل في مصر" },
  "hero.headline": { en: "Payroll shouldn't start with a spreadsheet hunt.", ar: "إعداد الرواتب لا يجب أن يبدأ بالبحث بين الجداول." },
  "hero.sub": {
    en: "When attendance, leave, overtime and employee records live in different places, month-end becomes a chase. HR Dock brings the work that feeds payroll into one clearer workflow.",
    ar: "عندما تتفرق بيانات الحضور والإجازات والعمل الإضافي وملفات الموظفين، يصبح إغلاق الشهر مرهقاً. يجمع HR Dock الأعمال المؤثرة في الرواتب ضمن سير عمل أوضح.",
  },
  "hero.cta1": { en: "Show me the workflow", ar: "شاهد سير العمل" },
  "hero.cta2": { en: "See the problems we solve", ar: "المشكلات التي نحلها" },

  // Features
  "features.title": { en: "Built for the work your team does every day", ar: "مصمم للعمل الذي ينجزه فريقك كل يوم" },
  "features.sub": {
    en: "Start with the essentials. Extend into reporting, mobile access, and hiring when you need them.",
    ar: "ابدأ بالأساسيات، ثم أضف التقارير والوصول عبر الجوال والتوظيف عندما تحتاج إليها.",
  },
  "features.payroll.title": { en: "Smart Payroll", ar: "رواتب ذكية" },
  "features.payroll.desc": {
    en: "Automate salary calculations, deductions, bonuses, and configurable Egyptian payroll workflows.",
    ar: "أتمتة حسابات الرواتب والخصومات والمكافآت وسير عمل الرواتب القابل للتهيئة للسوق المصري.",
  },
  "features.attendance.title": { en: "Attendance & Leave", ar: "الحضور والإجازات" },
  "features.attendance.desc": {
    en: "Track check-ins, manage leave requests, and sync with your payroll automatically.",
    ar: "تتبع تسجيل الدخول وإدارة طلبات الإجازة والمزامنة مع الرواتب تلقائياً.",
  },
  "features.recruitment.title": { en: "Recruitment Pipeline", ar: "خط التوظيف" },
  "features.recruitment.desc": {
    en: "Post jobs, screen applicants, and onboard new hires — all without leaving HR Dock.",
    ar: "انشر الوظائف وفلتر المتقدمين وأدمج الموظفين الجدد — كل ذلك داخل HR Dock.",
  },
  "features.analytics.title": { en: "HR Analytics", ar: "تحليلات الموارد البشرية" },
  "features.analytics.desc": {
    en: "Real-time dashboards and reports to make data-driven HR decisions.",
    ar: "لوحات بيانات وتقارير في الوقت الفعلي لاتخاذ قرارات مبنية على البيانات.",
  },
  "features.multitenancy.title": { en: "Multi-Company Support", ar: "دعم متعدد الشركات" },
  "features.multitenancy.desc": {
    en: "Manage multiple business entities under one account with isolated data per company.",
    ar: "إدارة كيانات أعمال متعددة تحت حساب واحد مع بيانات معزولة لكل شركة.",
  },
  "features.mobile.title": { en: "Mobile App", ar: "تطبيق الجوال" },
  "features.mobile.desc": {
    en: "Employees can submit requests, check payslips, and clock in/out from anywhere.",
    ar: "يمكن للموظفين تقديم الطلبات وعرض قسائم الرواتب وتسجيل الدخول من أي مكان.",
  },

  // Contact
  "contact.title": { en: "Request a Demo", ar: "اطلب عرضاً توضيحياً" },
  "contact.sub": {
    en: "Tell us your team size and where work slows down—attendance corrections, approvals, payroll cut-off or employee files. We'll tailor the conversation to your workflow.",
    ar: "أخبرنا بحجم فريقك وما يعطّل العمل: تصحيح الحضور، الموافقات، إغلاق الرواتب أو ملفات الموظفين. سنخصص العرض وفقاً لسير عملك.",
  },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.company": { en: "Company Name", ar: "اسم الشركة" },
  "contact.email": { en: "Work Email", ar: "البريد الإلكتروني للعمل" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.message": { en: "What's your biggest HR bottleneck? (optional)", ar: "ما أكبر عقبة تواجه فريق الموارد البشرية؟ (اختياري)" },
  "contact.submit": { en: "Request Demo", ar: "اطلب العرض" },
  "contact.success": {
    en: "Thanks! Your request was received. We'll be in touch soon.",
    ar: "شكراً! تم استلام طلبك وسنتواصل معك قريباً.",
  },
  "contact.sending": { en: "Sending…", ar: "جارٍ الإرسال…" },
  "contact.error": { en: "We couldn't send your request. Please try again.", ar: "تعذر إرسال طلبك. يرجى المحاولة مرة أخرى." },

  // Navbar extras
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.products": { en: "Products", ar: "المنتجات" },
  "nav.clients": { en: "Clients", ar: "عملاؤنا" },

  // Stats
  "stats.market": { en: "Built for Egypt", ar: "مصمم لمصر" },
  "stats.languages": { en: "Arabic & English", ar: "العربية والإنجليزية" },
  "stats.features": { en: "Integrated Features", ar: "ميزة متكاملة" },
  "stats.access": { en: "Web & Mobile Access", ar: "الوصول عبر الويب والجوال" },

  // AI Callout
  "ai.badge": { en: "AI-Powered", ar: "مدعوم بالذكاء الاصطناعي" },
  "ai.title": { en: "AI-assisted recruitment, built into your HR workflow", ar: "توظيف مدعوم بالذكاء الاصطناعي داخل سير عمل الموارد البشرية" },
  "ai.sub": { en: "HR Dock's Recruitment & AI module helps screen candidates, rank applicants, and run structured assessments — giving your team a consistent starting point for every hire.", ar: "تساعد وحدة التوظيف والذكاء الاصطناعي في HR Dock على فلترة المرشحين وتصنيف المتقدمين وإجراء تقييمات منظمة لتوفير نقطة بداية متسقة لكل عملية توظيف." },
  "ai.feat1": { en: "AI Candidate Screening", ar: "فلترة المرشحين بالذكاء الاصطناعي" },
  "ai.feat2": { en: "Smart Applicant Ranking", ar: "تصنيف ذكي للمتقدمين" },
  "ai.feat3": { en: "Automated Assessment Portal", ar: "بوابة تقييم آلية" },
  "ai.feat4": { en: "Talent Pool Intelligence", ar: "ذكاء مجموعة المواهب" },
  "ai.cta": { en: "See AI in Action", ar: "شاهد الذكاء الاصطناعي" },

  // Products
  "products.title": { en: "One workflow for the work behind every payday.", ar: "سير عمل واحد لكل ما يسبق يوم صرف الرواتب." },
  "products.sub": { en: "Connect time, people records and approvals first. Add employee operations and hiring when those handoffs need the same clarity.", ar: "اربط بيانات الوقت وملفات الموظفين والموافقات أولاً، ثم أضف العمليات والتوظيف عندما تحتاج هذه المراحل إلى الوضوح نفسه." },
  "products.m1.name": { en: "Payroll & Attendance", ar: "الرواتب والحضور" },
  "products.m1.tag": { en: "Module 1", ar: "الوحدة الأولى" },
  "products.m1.sub": { en: "الرواتب والحضور", ar: "الرواتب والحضور" },
  "products.m1.desc": { en: "Core HR operations — attendance tracking, leave management, and payroll configurable for Egyptian NOSS and tax workflows.", ar: "عمليات الموارد البشرية الأساسية — تتبع الحضور وإدارة الإجازات ورواتب قابلة للتهيئة لسير عمل التأمينات والضرائب المصرية." },
  "products.m2.name": { en: "HR Operations", ar: "عمليات الموارد البشرية" },
  "products.m2.tag": { en: "Module 2", ar: "الوحدة الثانية" },
  "products.m2.sub": { en: "إدارة الموارد البشرية", ar: "إدارة الموارد البشرية" },
  "products.m2.desc": { en: "Full HR management — documents, org tools, requests, workflows, employee lifecycle & compliance.", ar: "إدارة شاملة للموارد البشرية — المستندات وأدوات التنظيم والطلبات وسير العمل ودورة حياة الموظف." },
  "products.m3.name": { en: "Recruitment & AI", ar: "التوظيف والذكاء الاصطناعي" },
  "products.m3.tag": { en: "Module 3 · AI", ar: "الوحدة الثالثة · ذكاء اصطناعي" },
  "products.m3.sub": { en: "التوظيف والذكاء الاصطناعي", ar: "التوظيف والذكاء الاصطناعي" },
  "products.m3.desc": { en: "Complete talent acquisition — recruitment pipeline, AI candidate screening & assessment portal.", ar: "اكتساب المواهب الكامل — خط التوظيف وفلترة المرشحين بالذكاء الاصطناعي وبوابة التقييم." },

  // About
  "about.title": { en: "About HR Dock", ar: "عن HR Dock" },
  "about.sub": { en: "Practical HR operations for teams in Egypt", ar: "عمليات موارد بشرية عملية لفرق العمل في مصر" },
  "about.body": { en: "HR Dock is designed around the handoffs that consume an HR team's day: checking time data before payroll, routing employee requests, finding the right record and answering management questions. Arabic and English access and configurable settings let you fit those workflows to your organization.", ar: "صُمم HR Dock حول المهام التي تستهلك يوم فريق الموارد البشرية: مراجعة بيانات الوقت قبل الرواتب، وتوجيه طلبات الموظفين، والعثور على الملفات، والإجابة عن أسئلة الإدارة. تتيح الواجهة العربية والإنجليزية والإعدادات القابلة للتهيئة مواءمة هذه المهام مع مؤسستك." },
  "about.v1": { en: "Mission", ar: "المهمة" },
  "about.v1.text": { en: "Make the daily work of HR clearer and easier for Egyptian employers and employees.", ar: "تبسيط العمل اليومي للموارد البشرية لأصحاب الأعمال والموظفين في مصر." },
  "about.v2": { en: "Vision", ar: "الرؤية" },
  "about.v2.text": { en: "Help growing teams move from scattered spreadsheets and messages to connected workflows.", ar: "مساعدة الفرق المتنامية على الانتقال من الجداول والرسائل المتفرقة إلى سير عمل مترابط." },
  "about.v3": { en: "Values", ar: "القيم" },
  "about.v3.text": { en: "Clarity, practicality, and people-first service.", ar: "الوضوح والعملية وخدمة تضع الإنسان أولاً." },

  // Clients & Partners
  "clients.title": { en: "Built to grow with Egyptian businesses", ar: "مصمم لينمو مع الشركات المصرية" },
  "clients.sub": { en: "From your first pilot team to a multi-company group — HR Dock is designed to scale with you.", ar: "من أول فريق تجريبي إلى مجموعة متعددة الشركات — صُمم HR Dock ليتوسع معك." },
  "partners.title": { en: "Our Partners", ar: "شركاؤنا" },
  "partners.sub": { en: "Integration partnerships are being prepared for the tools your team uses.", ar: "نعمل على إعداد شراكات التكامل مع الأدوات التي يستخدمها فريقك." },

  // Footer
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.tagline": { en: "Empowering Your Workforce", ar: "تمكين قوتك العاملة" },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
