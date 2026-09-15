import TrackedLink from "@/components/analytics/TrackedLink";
import Section from "@/components/layout/Section";

const packages = [
  {
    name: "Jednostránkový web",
    price: "390 €",
    description: "Pre živnostníka alebo menšiu firmu, ktorá potrebuje základnú prezentáciu na internete.",
    items: [
      "Jednostránkový web s približne 4 sekciami",
      "Prezentácia služieb a kontaktných údajov",
      "Responzívne zobrazenie na mobile",
      "Základné technické SEO",
      "Nasadenie webu do ostrej prevádzky",
    ],
  },
  {
    name: "Firemný web",
    price: "790 €",
    description: "Pre firmu, ktorá chce dôveryhodne predstaviť služby, realizácie a získavať nové dopyty.",
    items: [
      "Individuálny návrh a responzívny vývoj",
      "Rozsiahlejšia stránka alebo viac podstránok",
      "Prezentácia služieb a realizácií",
      "Kontaktný formulár na získavanie dopytov",
      "Technické SEO a optimalizácia výkonu",
      "Analytika s rešpektovaním súkromia",
    ],
    featured: true,
  },
  {
    name: "Web na mieru",
    price: "1 490 €",
    description: "Pre rozsiahlejší projekt s pokročilým obsahom, funkciami alebo individuálnymi požiadavkami.",
    items: [
      "Štruktúra a dizajn vytvorené na mieru",
      "Viac podstránok a pokročilé sekcie",
      "Blog alebo prípadové štúdie",
      "Pokročilé formuláre a animácie",
      "Analytika a meranie konverzií",
      "Individuálne funkcie podľa zadania",
    ],
  },
] as const;

export default function Offer() {
  return (
    <Section className="relative overflow-hidden border-t border-white/10 bg-[#061B3A] py-16 text-white lg:py-20" containerClassName="max-w-7xl">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Ponuka pre firmy</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vyberte si rozsah svojho webu
          </h2>
          <p className="mt-5 leading-7 text-slate-300">
            Orientačné balíky vám pomôžu získať predstavu o rozsahu a cene. Každý web prispôsobím vášmu podnikaniu.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {packages.map((offer) => {
            const featured = "featured" in offer && offer.featured;

            return (
              <article
                key={offer.name}
                className={`group relative flex flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                  featured
                    ? "border-blue-400/60 bg-[linear-gradient(160deg,rgba(20,66,137,0.72),rgba(8,34,76,0.96))] shadow-[0_24px_70px_rgba(37,99,235,0.18)] hover:border-blue-300/80 hover:shadow-[0_28px_85px_rgba(37,99,235,0.3)]"
                    : "border-white/10 bg-white/[0.04] hover:border-blue-400/35 hover:bg-white/[0.06] hover:shadow-[0_24px_70px_rgba(37,99,235,0.16)]"
                }`}
              >
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{offer.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{offer.description}</p>

                <div className="mt-7 border-l-2 border-blue-400 pl-4">
                  <p className="text-sm font-medium text-slate-300">od</p>
                  <p className="mt-1 text-4xl font-bold tracking-tight text-white">{offer.price}</p>
                </div>

                <ul className="mt-8 grid gap-4 border-t border-white/10 pt-7">
                  {offer.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-3xl text-sm leading-6 text-slate-400">
            Uvedené ceny sú orientačné. Konečná cena závisí od rozsahu, dodaných podkladov a požadovaných funkcií. Úvodná konzultácia a návrh ďalšieho postupu sú nezáväzné.
          </p>

          <TrackedLink
            href="#kontakt"
            analyticsLocation="offer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061B3A]"
          >
            Nezáväzne prebrať projekt
          </TrackedLink>
        </div>
      </div>
    </Section>
  );
}
