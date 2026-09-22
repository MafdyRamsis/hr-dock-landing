import "server-only";

import { list, put } from "@vercel/blob";
import { promises as fs } from "node:fs";
import path from "node:path";

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  cta: string;
  featured: boolean;
  features: string[];
};

export type SiteContent = {
  hero: {
    badge: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    imageUrl: string;
  };
  pricing: {
    currency: "EGP";
    eyebrow: string;
    title: string;
    subtitle: string;
    annualDiscount: string;
    plans: PricingPlan[];
  };
  clients: {
    title: string;
    subtitle: string;
    logos: { name: string; imageUrl: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  updatedAt: string;
};

export const defaultSiteContent: SiteContent = {
  hero: {
    badge: "Built around the Egyptian workday",
    headline: "Your everyday HR, finally in one place.",
    subtext: "Track attendance, manage leave and employee requests, prepare payroll, and keep your people records together — with workflows built for teams in Egypt.",
    primaryCta: "Request a Demo",
    secondaryCta: "Explore daily workflows",
    imageUrl: "",
  },
  pricing: {
    currency: "EGP",
    eyebrow: "Plans for your team",
    title: "Start with daily HR. Add more as you grow.",
    subtitle: "Tell us your team size and workflows. We’ll recommend a plan and quote it in Egyptian pounds (EGP).",
    annualDiscount: "",
    plans: [
      { name: "Starter", description: "People, attendance and payroll essentials.", monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Contact sales", featured: false, features: ["Employee records", "Attendance, shifts and leave", "Payroll and payslips", "Overtime, loans and expenses"] },
      { name: "Growth", description: "The full employee lifecycle for growing teams.", monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Contact sales", featured: true, features: ["Everything in Starter", "Onboarding, documents and assets", "Training and performance", "Helpdesk, surveys and workflows"] },
      { name: "Enterprise", description: "HR operations plus hiring and AI tools.", monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Contact sales", featured: false, features: ["Everything in Growth", "Recruitment pipeline", "AI candidate screening", "Assessments and talent pool"] },
    ],
  },
  clients: { title: "Built to grow with Egyptian businesses", subtitle: "Trusted by people-first teams building the future of work.", logos: [] },
  cta: { title: "See your daily HR workflow in one place.", subtitle: "Walk through attendance, requests, payroll, and employee records using the way your team works.", button: "Book your demo" },
  updatedAt: new Date(0).toISOString(),
};

const CONTENT_PATH = "cms/site-content.json";
const LOCAL_PATH = path.join(process.cwd(), ".data", "site-content.json");

function mergeContent(value: Partial<SiteContent>): SiteContent {
  // Content published before the EGP switch held USD figures. Never relabel those figures as pounds.
  const legacyPlans = value.pricing && !value.pricing.currency
    ? value.pricing.plans?.map((plan) => ({ ...plan, monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Contact sales" }))
    : undefined;
  return {
    ...defaultSiteContent,
    ...value,
    hero: { ...defaultSiteContent.hero, ...value.hero },
    pricing: { ...defaultSiteContent.pricing, ...value.pricing, currency: "EGP", annualDiscount: legacyPlans ? "" : (value.pricing?.annualDiscount ?? defaultSiteContent.pricing.annualDiscount), subtitle: legacyPlans ? defaultSiteContent.pricing.subtitle : (value.pricing?.subtitle ?? defaultSiteContent.pricing.subtitle), plans: legacyPlans?.length ? legacyPlans : value.pricing?.plans?.length ? value.pricing.plans : defaultSiteContent.pricing.plans },
    clients: { ...defaultSiteContent.clients, ...value.clients, logos: value.clients?.logos ?? defaultSiteContent.clients.logos },
    cta: { ...defaultSiteContent.cta, ...value.cta },
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const { blobs } = await list({ prefix: CONTENT_PATH, limit: 1 });
      if (!blobs[0]) return defaultSiteContent;
      const response = await fetch(blobs[0].url, { cache: "no-store" });
      if (!response.ok) return defaultSiteContent;
      return mergeContent(await response.json());
    }
    return mergeContent(JSON.parse(await fs.readFile(LOCAL_PATH, "utf8")));
  } catch {
    return defaultSiteContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const normalized = mergeContent({ ...content, updatedAt: new Date().toISOString() });
  const serialized = JSON.stringify(normalized, null, 2);
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(CONTENT_PATH, serialized, { access: "public", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true, cacheControlMaxAge: 60 });
  } else {
    await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
    await fs.writeFile(LOCAL_PATH, serialized, "utf8");
  }
  return normalized;
}
