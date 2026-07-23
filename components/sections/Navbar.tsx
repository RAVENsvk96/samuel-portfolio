import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

type NavbarProps = {
  variant?: "portfolio" | "blog";
};

export default function Navbar({
  variant = "portfolio",
}: NavbarProps) {
  const isBlog = variant === "blog";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Späť na domovskú stránku"
          className="flex h-full items-center"
        >
          <Image
            src="/images/branding/logo-nav.png"
            alt="Samuel Zelíska"
            width={220}
            height={70}
            priority
            className="h-[56px] max-h-[56px] w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {isBlog ? (
            <>
              <Link
                href="/blog"
                className="font-medium text-slate-950 transition hover:text-blue-600"
              >
                Blog
              </Link>

              <Link
                href="/"
                className="transition hover:text-blue-600"
              >
                Späť na portfólio
              </Link>
            </>
          ) : (
            navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))
          )}
        </div>

        <Button
          href={isBlog ? "/#kontakt" : "#kontakt"}
          className="px-5 py-2.5 text-sm"
        >
          Kontakt
        </Button>
      </nav>
    </header>
  );
}