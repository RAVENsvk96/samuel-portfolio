import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Informácie o spracúvaní osobných údajov a používaní analytických súborov cookies na stránke Samuel Zelíska.",
  alternates: {
    canonical: "/ochrana-osobnych-udajov",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#04142F] text-white">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-blue-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          ← Späť na portfólio
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Súkromie
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Ochrana osobných údajov
        </h1>
        <p className="mt-5 text-sm text-slate-400">
          Posledná aktualizácia: 14. septembra 2026
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">Prevádzkovateľ</h2>
            <p className="mt-3">
              Prevádzkovateľom tejto webovej stránky je {profile.name},
              Slovenská republika. V otázkach ochrany osobných údajov ma môžete
              kontaktovať na{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-semibold text-blue-300 underline underline-offset-4 hover:text-white"
              >
                {profile.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Kontaktný formulár</h2>
            <p className="mt-3">
              Pri odoslaní formulára spracúvam meno, e-mailovú adresu a obsah
              správy. Údaje používam výhradne na vybavenie otázky alebo dopytu a
              následnú komunikáciu o možnej spolupráci.
            </p>
            <p className="mt-3">
              Právnym základom je vykonanie opatrení pred uzatvorením zmluvy na
              vašu žiadosť. Ak spolupráca nevznikne, komunikáciu uchovávam najviac
              12 mesiacov od jej ukončenia, pokiaľ nie je potrebná dlhšie na
              ochranu právnych nárokov alebo splnenie zákonnej povinnosti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Príjemcovia údajov</h2>
            <p className="mt-3">
              Technickými sprostredkovateľmi môžu byť Vercel, ktorý zabezpečuje
              prevádzku webu, a Resend, ktorý zabezpečuje doručenie správ z
              kontaktného formulára. Údaje neposkytujem na predaj ani ich
              nepoužívam na automatizované rozhodovanie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Analytika a cookies</h2>
            <p className="mt-3">
              Google Analytics sa načíta iba po vašom výslovnom súhlase. Pomáha
              mi pochopiť návštevnosť a vyhodnotiť, ktoré časti stránky sú
              užitočné. Súhlas môžete kedykoľvek zmeniť cez odkaz Nastavenia
              cookies v pätičke. Odmietnutie nemá vplyv na fungovanie stránky.
            </p>
            <p className="mt-3">
              Voľba súhlasu sa uchováva v lokálnom úložisku prehliadača 180 dní.
              Google Analytics môže po súhlase používať analytické cookies,
              napríklad <code className="text-blue-300">_ga</code>. Doba
              uchovávania analytických údajov závisí od nastavenia služby Google
              Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Vaše práva</h2>
            <p className="mt-3">
              Máte právo požadovať prístup k svojim údajom, ich opravu, vymazanie
              alebo obmedzenie spracúvania a v príslušných prípadoch aj prenosnosť
              údajov či namietať proti spracúvaniu. Súhlas s analytikou môžete
              kedykoľvek odvolať bez vplyvu na zákonnosť predchádzajúceho
              spracúvania.
            </p>
            <p className="mt-3">
              Ak sa domnievate, že sú vaše údaje spracúvané v rozpore s právnymi
              predpismi, môžete podať sťažnosť Úradu na ochranu osobných údajov
              Slovenskej republiky.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
