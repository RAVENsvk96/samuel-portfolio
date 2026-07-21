import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Samuel Zelíska",
  description:
    "Praktické články o vývoji moderných webových stránok, SEO, výkone a skúsenostiach z reálnych projektov.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Blog
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Praktické články o tvorbe moderných webových stránok.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Píšem o vývoji Starter Kit Pro, SEO, výkone webov a skúsenostiach z
          reálnych projektov. Cieľom je zdieľať poznatky, ktoré pomáhajú firmám
          aj vývojárom vytvárať kvalitnejšie webové stránky.
        </p>
      </section>
    </main>
  );
}
