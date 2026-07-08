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
          Máte projekt?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Poďme sa porozprávať o tom, ako môže váš web pôsobiť
          profesionálnejšie, budovať dôveru a prinášať viac zákazníkov.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`mailto:${profile.email}`}>
            Napíšte mi
          </Button>

          <a
            href={`mailto:${profile.email}`}
            className="font-semibold text-slate-300 transition hover:text-white"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </Section>
  );
}