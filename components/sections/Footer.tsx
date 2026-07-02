import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {profile.name}. Všetky práva vyhradené.</p>

        <div className="flex gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-blue-600"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}