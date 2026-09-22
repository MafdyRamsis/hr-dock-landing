import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hr-dock.com"),
  title: "HR Dock — Everyday HR for Egyptian Employers",
  description:
    "Manage attendance, leave, employee requests, payroll, and people records in one place, with workflows built for teams in Egypt.",
  applicationName: "HR Dock",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_EG",
    siteName: "HR Dock",
    title: "HR Dock — Everyday HR for Egyptian Employers",
    description: "Attendance, leave, employee requests, payroll, and people records for teams in Egypt.",
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
