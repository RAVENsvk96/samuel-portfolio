import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelzeliska.sk"),

  title: {
    default: "Samuel Zelíska | Web Developer",
    template: "%s | Samuel Zelíska",
  },

  description:
    "Tvorím moderné webové stránky pre lokálne firmy. Rýchle, responzívne a profesionálne weby so zameraním na výkon, SEO a používateľský zážitok.",

  keywords: [
    "Web Developer",
    "Next.js",
    "React",
    "Tvorba webových stránok",
    "Frontend Developer",
    "Slovensko",
    "SEO",
  ],

  authors: [{ name: "Samuel Zelíska" }],
  creator: "Samuel Zelíska",
  publisher: "Samuel Zelíska",

  alternates: {
    canonical: "https://samuelzeliska.sk",
  },

  openGraph: {
    title: "Samuel Zelíska | Web Developer",
    description: "Moderné webové stránky pre lokálne firmy.",
    url: "https://samuelzeliska.sk",
    siteName: "Samuel Zelíska",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/branding/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Samuel Zelíska | Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Zelíska | Web Developer",
    description: "Moderné webové stránky pre lokálne firmy.",
    images: ["/images/branding/opengraph-image.png"],
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
  themeColor: "#ffffff",
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
      <body className="min-h-full bg-white font-sans text-slate-950 selection:bg-slate-950 selection:text-white">
        {children}
      </body>

      {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}