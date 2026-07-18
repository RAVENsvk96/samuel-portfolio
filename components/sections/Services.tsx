import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="sluzby">
      <SectionHeading
        badge="Čo vytváram"
        title="Webové riešenia pre lokálne firmy"
        description="Každý projekt prispôsobujem cieľom firmy a potrebám jej zákazníkov. Výsledkom je prehľadný a dôveryhodný web, ktorý podporuje kontakt, objednávky alebo prezentáciu služieb."
      />

      <ul className="mt-16 divide-y divide-slate-200">
        {services.map((service) => (
          <li
            key={service.title}
            className="grid gap-4 py-8 md:grid-cols-[320px_1fr] md:gap-6"
          >
            <h3 className="text-2xl font-semibold text-slate-950">
              {service.title}
            </h3>

            <p className="max-w-2xl leading-7 text-slate-600">
              {service.description}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
        Každé riešenie zahŕňa responzívne zobrazenie, optimalizáciu výkonu,
        základné technické SEO, funkčný kontaktný formulár a nasadenie webu do
        ostrej prevádzky.
      </p>
    </Section>
  );
}