import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="sluzby">
      <SectionHeading
        badge="Čo vytváram"
        title="Webové riešenia pre lokálne firmy"
        description="Každý projekt navrhujem individuálne podľa potrieb klienta. Cieľom nie je len pekný dizajn, ale web, ktorý pôsobí dôveryhodne a pomáha firme rásť."
      />

      <div className="mt-16 divide-y divide-slate-200">
        {services.map((service) => (
          <div
            key={service.title}
            className="grid gap-6 py-8 md:grid-cols-[320px_1fr]"
          >
            <h3 className="text-2xl font-semibold text-slate-950">
              {service.title}
            </h3>

            <p className="leading-7 text-slate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}