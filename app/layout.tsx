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

const siteUrl = "https://www.samuelzeliska.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Samuel Zelíska | Tvorba webových stránok",
    template: "%s | Samuel Zelíska",
  },

  description:
    "Tvorím rýchle a profesionálne webové stránky pre živnostníkov, lokálne firmy a menšie spoločnosti. Dôraz kladiem na dôveryhodnosť, použiteľnosť, výkon a technické SEO.",

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
      "Rýchle a profesionálne webové stránky pre živnostníkov, lokálne firmy a menšie spoločnosti.",
    url: siteUrl,
    siteName: "Samuel Zelíska",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/branding/opengraph-banner-v2.png",
        width: 1200,
        height: 630,
        alt: "Samuel Zelíska – tvorba webových stránok",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Zelíska | Tvorba webových stránok",
    description:
      "Rýchle a profesionálne webové stránky pre živnostníkov, lokálne firmy a menšie spoločnosti.",
    images: [
      {
        url: "/images/branding/opengraph-banner-v2.png",
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
  themeColor: "#ffffff",
  colorScheme: "light",
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
    </html>
  );
}