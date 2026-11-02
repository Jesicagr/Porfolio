import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jesica Aguirre — Desarrolladora Full Stack",
    template: "%s | Jesica Aguirre",
  },
  description:
    "Desarrolladora full stack especializada en Next.js, React, TypeScript y Spring Boot. Sistemas de gestión, SaaS y plataformas web en producción.",
  keywords: [
    "desarrolladora full stack",
    "Next.js",
    "React",
    "TypeScript",
    "Spring Boot",
    "portfolio",
  ],
  authors: [{ name: "Jesica Aguirre" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Jesica Aguirre — Desarrolladora Full Stack",
    description:
      "Sistemas de gestión, SaaS y plataformas web en producción con Next.js, React y Spring Boot.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesica Aguirre — Desarrolladora Full Stack",
    description:
      "Sistemas de gestión, SaaS y plataformas web en producción con Next.js, React y Spring Boot.",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
