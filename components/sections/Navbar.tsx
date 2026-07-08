import Image from "next/image";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#" aria-label="Domov">
          <Image
            src="/images/branding/logo-nav.png"
            alt="Samuel Zelíska"
            width={180}
            height={48}
            priority
            className="h-[96px] w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button href="#kontakt" className="px-5 py-2.5 text-sm">
          Kontakt
        </Button>
      </nav>
    </header>
  );
}