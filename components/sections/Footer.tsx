import Image from "next/image";

import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a
            href="#"
            aria-label="Prejsť na začiatok stránky"
            className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          >
            <Image
              src="/images/branding/logo-nav.png"
              alt={profile.name}
              width={220}
              height={70}
              className="h-[56px] max-h-[56px] w-auto object-contain"
            />
          </a>

          <p className="text-sm text-slate-500">
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
                className="rounded-sm text-slate-500 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-sm text-slate-500 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}