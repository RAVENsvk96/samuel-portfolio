import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section
      id="sluzby"
      className="relative overflow-hidden border-t border-white/10 bg-[#061B3A] text-white"
    >
      <div className="pointer-events-none absolute -right-40 top-8 size-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative">
        <SectionHeading
          badge="Čo vytváram"
          title="Webové riešenia pre lokálne firmy"
          description="Každý projekt prispôsobujem cieľom firmy a potrebám jej zákazníkov. Výsledkom je prehľadný a dôveryhodný web, ktorý podporuje kontakt, objednávky alebo prezentáciu služieb."
          tone="dark"
        />

        <ul className="mt-14 grid gap-4 lg:mt-16">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="group grid gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-blue-400/35 hover:bg-white/[0.06] sm:p-8 md:grid-cols-[4rem_18rem_1fr] md:items-start md:gap-6"
            >
              <span
                className="text-sm font-semibold tabular-nums text-blue-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {service.title}
              </h3>

              <p className="max-w-2xl leading-7 text-slate-300">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-400">
          Každé riešenie zahŕňa responzívne zobrazenie, optimalizáciu výkonu,
          základné technické SEO, funkčný kontaktný formulár a nasadenie webu do
          ostrej prevádzky.
        </p>
      </div>
    </Section>
  );
}
