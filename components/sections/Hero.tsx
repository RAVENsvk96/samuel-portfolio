import Image from "next/image";

import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/70 blur-[120px]" />

      <div className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
        <Image
          src="/images/branding/logo-hero.png"
          alt={profile.name}
          width={460}
          height={150}
          priority
          className="mb-10 h-45 w-auto object-contain"
        />

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          {profile.role}
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          {profile.headline}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
          {profile.description}
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#projekty">Pozrieť práce</Button>

          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
          >
            Kontaktovať ma
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
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