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
    <section className="relative isolate overflow-hidden bg-[#03193E] text-white">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(96,165,250,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 sm:size-[46rem]" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 sm:size-[34rem]" />
      <div className="absolute left-1/2 top-1/3 -z-10 size-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[110px] sm:size-96" />

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-5xl flex-col items-center justify-center px-6 py-12 text-center sm:py-16 lg:py-20">
        <div className="relative mb-7 hidden size-40 sm:block lg:size-44">
          <Image
            src="/images/branding/logo-sz.png"
            alt="Monogram Samuel Zelíska"
            fill
            priority
            sizes="(min-width: 1024px) 176px, 160px"
            className="object-contain"
          />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
          {profile.role}
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
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
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-blue-400 hover:bg-white/10 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03193E] sm:w-auto"
          >
            Kontaktovať ma
          </a>
        </div>

        <div className="mt-10 hidden flex-wrap justify-center gap-3 md:flex">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors duration-300 hover:border-blue-400/40 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
