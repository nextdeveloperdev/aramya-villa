import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const skipLinkClass = [
  "sr-only",
  "focus:not-sr-only",
  "focus:fixed",
  "focus:top-4",
  "focus:left-4",
  "focus:z-[100]",
  "focus:rounded-full",
  "focus:bg-palm-900",
  "focus:px-5",
  "focus:py-3",
  "focus:text-sm",
  "focus:text-shell",
].join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Boutique Ocean-Front Villa in Talpe, Galle`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "boutique villa Sri Lanka",
    "Talpe villa",
    "Galle hotel",
    "ocean front villa Sri Lanka",
    "south coast Sri Lanka accommodation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2E28",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className={skipLinkClass}>
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}