import Image from "next/image";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a href="#" aria-label="Domov">
            <Image
              src="/images/branding/logo-nav.png"
              alt={profile.name}
              width={180}
            height={48}
            priority
            className="h-25 w-auto"
            />
          </a>

          <p className="text-sm text-slate-500">
            © 2026 {profile.name}. Všetky práva vyhradené.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="text-slate-500 transition hover:text-blue-600"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}