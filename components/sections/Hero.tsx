import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />

      <div className="mx-auto flex min-h-[82vh] max-w-5xl flex-col items-center justify-center px-6 py-28 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          {profile.role}
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {profile.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#projekty">Pozrieť práce</Button>

          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
          >
            Kontaktovať ma
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}