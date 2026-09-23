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
  },
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
