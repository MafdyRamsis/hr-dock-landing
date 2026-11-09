import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hr-dock.com"),
  title: "HR Dock — Attendance, Approvals & Payroll for Teams in Egypt",
  description:
    "Stop chasing attendance edits, leave approvals and employee files at payroll cut-off. HR Dock connects everyday HR work for teams in Egypt.",
  applicationName: "HR Dock",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_EG",
    siteName: "HR Dock",
    title: "HR Dock — Attendance, Approvals & Payroll for Teams in Egypt",
    description: "Bring attendance, leave, requests, payroll and employee records into a clearer workflow for teams in Egypt.",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HR Dock — attendance, leave and payroll for teams in Egypt" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "HR Dock",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android, iOS",
            url: "https://www.hr-dock.com",
            inLanguage: ["en", "ar"],
            areaServed: "EG",
            description: "Attendance, leave, requests, payroll and employee records in one Arabic/English HR platform for teams in Egypt.",
            publisher: { "@type": "Organization", name: "HR Dock", url: "https://www.hr-dock.com", logo: "https://www.hr-dock.com/logo.png", email: "hello@hr-dock.com" },
          }) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
