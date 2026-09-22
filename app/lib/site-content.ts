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
    badge: "Built for Egyptian Businesses",
    headline: "Where Modern HR Docks & Workforces Thrive",
    subtext: "HR Dock streamlines payroll, attendance, recruitment, and compliance — all in one platform built for the Egyptian market.",
    primaryCta: "Request a Demo",
    secondaryCta: "See How It Works",
    imageUrl: "",
  },
  pricing: {
    eyebrow: "Simple pricing",
    title: "Choose a plan that grows with you",
    subtitle: "Transparent per-employee pricing with no surprise implementation fees.",
    annualDiscount: "Save 20%",
    plans: [
      { name: "Starter", description: "For small teams building strong foundations.", monthlyPrice: "9", annualPrice: "7", cta: "Start free", featured: false, features: ["Core employee records", "Leave management", "Document storage", "Employee self-service"] },
      { name: "Growth", description: "For growing companies ready to automate.", monthlyPrice: "16", annualPrice: "13", cta: "Start free", featured: true, features: ["Everything in Starter", "Time & attendance", "Smart onboarding", "Advanced reports", "Priority support"] },
      { name: "Enterprise", description: "For complex teams with custom needs.", monthlyPrice: "Custom", annualPrice: "Custom", cta: "Contact sales", featured: false, features: ["Everything in Growth", "Custom roles & workflows", "SSO and API access", "Dedicated success manager"] },
    ],
  },
  clients: { title: "Built to grow with Egyptian businesses", subtitle: "Trusted by people-first teams building the future of work.", logos: [] },
  cta: { title: "Make work feel better—for everyone.", subtitle: "Replace fragmented HR processes with one beautifully simple platform.", button: "Book your demo" },
  updatedAt: new Date(0).toISOString(),
};

const CONTENT_PATH = "cms/site-content.json";
const LOCAL_PATH = path.join(process.cwd(), ".data", "site-content.json");

function mergeContent(value: Partial<SiteContent>): SiteContent {
  return {
    ...defaultSiteContent,
    ...value,
    hero: { ...defaultSiteContent.hero, ...value.hero },
    pricing: { ...defaultSiteContent.pricing, ...value.pricing, plans: value.pricing?.plans?.length ? value.pricing.plans : defaultSiteContent.pricing.plans },
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
