import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { process } from "@/data/process";

export default function Process() {
  return (
    <Section id="proces" className="bg-white">
      <SectionHeading
        badge="Proces"
        title="Ako prebieha spolupráca"
        description="Jednoduchý a prehľadný postup od prvého rozhovoru až po spustenie webu."
      />

      <ol className="mt-14 divide-y divide-slate-200">
        {process.map((item) => (
          <li
            key={item.step}
            className="grid gap-4 py-8 md:grid-cols-[120px_1fr]"
          >
            <p className="text-sm font-semibold text-blue-600">{item.step}</p>

            <div>
              <h3 className="text-2xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}