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
  "hero.badge": { en: "Built around the Egyptian workday", ar: "مصمم ليوم العمل في مصر" },
  "hero.headline": { en: "Your everyday HR, finally in one place.", ar: "إدارة الموارد البشرية اليومية، أخيراً في مكان واحد." },
  "hero.sub": {
    en: "Track attendance, manage leave and employee requests, prepare payroll, and keep your people records together — with workflows built for teams in Egypt.",
    ar: "تابع الحضور، وأدر الإجازات وطلبات الموظفين، وجهّز الرواتب، واحتفظ بملفات فريقك في مكان واحد — بسير عمل يناسب فرق العمل في مصر.",
  },
  "hero.cta1": { en: "Request a Demo", ar: "اطلب عرضاً توضيحياً" },
  "hero.cta2": { en: "Explore daily workflows", ar: "استكشف سير العمل اليومي" },

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
    en: "See HR Dock in action. Fill in your details and our team will reach out within 24 hours.",
    ar: "شاهد HR Dock عملياً. أدخل بياناتك وسيتواصل معك فريقنا خلال 24 ساعة.",
  },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.company": { en: "Company Name", ar: "اسم الشركة" },
  "contact.email": { en: "Work Email", ar: "البريد الإلكتروني للعمل" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.message": { en: "Message (optional)", ar: "رسالة (اختياري)" },
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
  "products.title": { en: "Start with the daily essentials. Grow from there.", ar: "ابدأ بأساسيات العمل اليومي، ثم توسّع." },
  "products.sub": { en: "People and payroll first. Add the employee lifecycle and hiring tools as your team needs them. Every module builds on the last.", ar: "ابدأ بإدارة الأفراد والرواتب، ثم أضف أدوات دورة حياة الموظف والتوظيف حسب احتياج فريقك. كل وحدة تشمل ما قبلها." },
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
  "about.sub": { en: "Built for teams working in Egypt.", ar: "مصمم لفرق العمل في مصر." },
  "about.body": { en: "HR Dock brings the everyday work of HR together: employee records, attendance, leave, requests, and payroll. Arabic and English access, multi-company structures, and configurable payroll settings help teams adapt the platform to the way they operate in Egypt.", ar: "يجمع HR Dock أعمال الموارد البشرية اليومية: ملفات الموظفين والحضور والإجازات والطلبات والرواتب. يساعد الوصول بالعربية والإنجليزية، ودعم الشركات المتعددة، وإعدادات الرواتب القابلة للتهيئة الفرق على استخدام المنصة بما يناسب عملها في مصر." },
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
