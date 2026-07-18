import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="kontakt" className="bg-[#03193E]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Kontakt
        </p>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Máte projekt alebo nápad na nový web?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Napíšte mi stručne, čo potrebujete. Spoločne prejdeme vaše ciele,
          možnosti riešenia a ďalší postup bez zbytočne komplikovaného procesu.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <Button href={`mailto:${profile.email}`}>
            Nezáväzne prebrať projekt
          </Button>

          <p className="text-sm text-slate-400">
            Alebo napíšte priamo na{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
            >
              {profile.email}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}