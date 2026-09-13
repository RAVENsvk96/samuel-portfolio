import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import CookieConsent from "@/components/consent/CookieConsent";
import ScrollToTop from "@/components/ui/ScrollToTop";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.samuelzeliska.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Samuel Zelíska | Tvorba webových stránok",
    template: "%s | Samuel Zelíska",
  },

  description:
    "Tvorba moderných webových stránok pre podnikateľov a firmy. Od návrhu až po spustenie s dôrazom na čistý dizajn, výkon, použiteľnosť a technické SEO.",

  authors: [
    {
      name: "Samuel Zelíska",
      url: siteUrl,
    },
  ],
  creator: "Samuel Zelíska",
  publisher: "Samuel Zelíska",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Samuel Zelíska | Tvorba webových stránok",
    description:
      "Moderné webové stránky pre podnikateľov a firmy – od prvého návrhu až po spustenie.",
    url: siteUrl,
    siteName: "Samuel Zelíska",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/branding/opengraph-banner-v3.png",
        width: 1280,
        height: 640,
        alt: "Samuel Zelíska – tvorba webových stránok",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Zelíska | Tvorba webových stránok",
    description:
      "Moderné webové stránky pre podnikateľov a firmy – od prvého návrhu až po spustenie.",
    images: [
      {
        url: "/images/branding/opengraph-banner-v3.png",
        alt: "Samuel Zelíska – tvorba webových stránok",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#03193E",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-slate-950 selection:bg-blue-400 selection:text-[#03193E]">
        {children}
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
