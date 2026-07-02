import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { about } from "@/data/about";

export default function About() {
  return (
    <Section id="o-mne" className="bg-slate-50">
      <SectionHeading badge={about.badge} title={about.title} />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-6">
          {about.description.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Na čom si zakladám
          </p>

          <div className="mt-8 space-y-4">
            {about.values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-colors duration-300 hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-medium text-slate-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}