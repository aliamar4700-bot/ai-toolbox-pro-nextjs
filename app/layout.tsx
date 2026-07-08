import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Toolbox Pro - Premium SaaS Productivity Suite",
  description: "Create ATS-compliant resumes, dynamic cold emails, study summaries, customize habits, optimize PDFs, compress images, and generate scannable vector QR codes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-brand-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
