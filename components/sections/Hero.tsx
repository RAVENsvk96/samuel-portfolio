import Image from "next/image";

import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "SEO",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute left-1/2 top-12 -z-10 size-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-[100px] sm:size-96 sm:blur-[120px]" />

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-5xl flex-col items-center justify-center px-6 py-12 text-center sm:py-16 lg:py-20">
        <div className="relative mb-8 hidden h-32 w-72 sm:block lg:h-36 lg:w-80">
          <Image
            src="/images/branding/logo-hero.png"
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 1024px) 320px, 288px"
            className="object-contain"
          />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 sm:text-sm sm:tracking-[0.35em]">
          {profile.role}
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
          {profile.description}
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <Button
            href="#projekty"
            className="w-full sm:w-auto"
          >
            Pozrieť práce
          </Button>

          <a
            href="#kontakt"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
          >
            Kontaktovať ma
          </a>
        </div>

        <div className="mt-10 hidden flex-wrap justify-center gap-3 md:flex">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur-sm transition-colors duration-300 hover:border-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}