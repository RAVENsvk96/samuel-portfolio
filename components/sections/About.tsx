import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { about } from "@/data/about";

export default function About() {
  return (
    <Section
      id="o-mne"
      className="relative overflow-hidden border-t border-white/10 bg-[#04142F] text-white"
    >
      <div className="pointer-events-none absolute -left-56 top-1/3 size-[32rem] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative">
        <SectionHeading
          badge={about.badge}
          title={about.title}
          tone="dark"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div className="space-y-6">
            {about.description.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-xl leading-9 text-slate-200"
                    : "text-lg leading-8 text-slate-300"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Na čom si zakladám
            </p>

            <ul className="mt-7 divide-y divide-white/10">
              {about.values.map((value, index) => (
                <li
                  key={value}
                  className="group flex items-center gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <span
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/10 text-xs font-bold text-blue-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-medium leading-6 text-slate-200 transition-colors group-hover:text-white">
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Section>
  );
}
