import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            {profile.role}
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#projekty">Pozrieť projekty</Button>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              Nezáväzná konzultácia
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl">
          <p className="text-sm font-semibold text-blue-600">
            Zameranie
          </p>

          <h2 className="mt-4 text-2xl font-bold text-slate-950">
            Weby pre malé a lokálne firmy
          </h2>

          <p className="mt-4 text-slate-600">
            Pomáham firmám pôsobiť profesionálne online — od prvého návrhu až po nasadenie.
          </p>
        </div>
      </div>
    </section>
  );
}