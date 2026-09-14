import Section from "@/components/layout/Section";
import TrackedLink from "@/components/analytics/TrackedLink";

const includedItems = [
  "Individuálny návrh a responzívny vývoj",
  "Prehľadná prezentácia služieb a firmy",
  "Kontaktný formulár na získavanie dopytov",
  "Základné technické SEO a optimalizácia výkonu",
  "Analytika návštevnosti s rešpektovaním súkromia",
  "Nasadenie webu do ostrej prevádzky",
];

export default function Offer() {
  return (
    <Section
      className="relative overflow-hidden border-t border-white/10 bg-[#061B3A] py-16 text-white lg:py-20"
      containerClassName="max-w-6xl"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/20 bg-[linear-gradient(135deg,rgba(10,42,88,0.96),rgba(5,25,59,0.98))] shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
        <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Ponuka pre firmy
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Web, ktorý pomáha získavať zákazníkov
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Moderná webová stránka, ktorá dôveryhodne predstaví vašu firmu,
              prehľadne vysvetlí služby a uľahčí zákazníkom kontakt.
            </p>

            <div className="mt-8 border-l-2 border-blue-400 pl-5">
              <p className="text-sm font-medium text-slate-300">
                Firemný web od
              </p>
              <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                1 490 €
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Konečná cena závisí od rozsahu a požiadaviek projektu.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">
              Čo riešenie zahŕňa
            </h3>

            <ul className="mt-6 grid gap-4">
              {includedItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300 sm:text-base">
                  <span
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 bg-white/[0.025] px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p className="text-sm leading-6 text-slate-400">
            Úvodná konzultácia a návrh ďalšieho postupu sú nezáväzné.
          </p>

          <TrackedLink
            href="#kontakt"
            analyticsLocation="offer"
            className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061B3A]"
          >
            Nezáväzne prebrať projekt
          </TrackedLink>
        </div>
      </div>
    </Section>
  );
}
