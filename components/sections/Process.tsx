import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { process } from "@/data/process";

export default function Process() {
  return (
    <Section
      id="proces"
      className="relative overflow-hidden border-t border-white/10 bg-[#061B3A] text-white"
    >
      <div className="pointer-events-none absolute -right-48 bottom-0 size-[30rem] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative">
        <SectionHeading
          badge="Proces"
          title="Ako prebieha spolupráca"
          description="Od prvého rozhovoru až po spustenie budete vedieť, čo práve riešime a čo bude nasledovať."
          tone="dark"
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {process.map((item) => (
            <li
              key={item.step}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:border-blue-400/35 hover:bg-white/[0.06] sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/10 text-sm font-bold text-blue-300">
                  {item.step}
                </span>

                <span
                  className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
