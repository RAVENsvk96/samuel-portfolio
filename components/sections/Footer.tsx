import Image from "next/image";
import Link from "next/link";

import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#03193E] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Link
            href="/"
            aria-label="Prejsť na domovskú stránku"
            className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
          >
            <Image
              src="/images/branding/logo-horizontal.svg"
              alt={profile.name}
              width={360}
              height={100}
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="text-sm text-slate-400">
            © {currentYear} {profile.name}. Všetky práva vyhradené.
          </p>
        </div>

        <nav aria-label="Odkazy v pätičke">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:justify-end">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profil, otvorí sa v novom okne"
                className="rounded-sm text-slate-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-sm text-slate-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
              >
                E-mail
              </a>
            </li>

            <li>
              <Link
                href="/ochrana-osobnych-udajov"
                className="rounded-sm text-slate-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
              >
                Ochrana osobných údajov
              </Link>
            </li>

            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
