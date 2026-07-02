import type { Metadata } from "next";
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

  authors: [
    {
      name: "Samuel Zelíska",
    },
  ],

  creator: "Samuel Zelíska",

  openGraph: {
    title: "Samuel Zelíska | Web Developer",
    description:
      "Moderné webové stránky pre lokálne firmy.",
    url: "https://samuelzeliska.sk",
    siteName: "Samuel Zelíska",
    locale: "sk_SK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Zelíska | Web Developer",
    description:
      "Moderné webové stránky pre lokálne firmy.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full bg-white font-sans text-slate-950">
        {children}
      </body>
    </html>
  );
}