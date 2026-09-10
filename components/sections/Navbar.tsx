"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

type NavbarProps = {
  variant?: "portfolio" | "blog";
};

export default function Navbar({
  variant = "portfolio",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isBlog = variant === "blog";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03193E]/95 backdrop-blur-xl">
      <nav
        className="mx-auto max-w-6xl px-5 sm:px-6"
        aria-label="Hlavná navigácia"
      >
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="Späť na domovskú stránku"
            className="flex h-full items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
            onClick={closeMenu}
          >
            <Image
              src="/images/branding/logo-horizontal.svg"
              alt="Samuel Zelíska"
              width={360}
              height={100}
              priority
              className="h-11 w-auto object-contain sm:h-12"
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {isBlog ? (
              <>
                <Link
                  href="/blog"
                  className="font-semibold text-white transition hover:text-blue-400"
                >
                  Blog
                </Link>

                <Link
                  href="/"
                  className="transition hover:text-blue-400"
                >
                  Späť na portfólio
                </Link>
              </>
            ) : (
              navigation
                .filter((item) => item.label !== "Kontakt")
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={
                      item.label === "Blog"
                        ? "font-semibold text-white transition hover:text-blue-400"
                        : "transition hover:text-blue-400"
                    }
                  >
                    {item.label}
                  </Link>
                ))
            )}
          </div>

          <div className="hidden md:block">
            <Button
              href={isBlog ? "/#kontakt" : "#kontakt"}
              className="px-5 py-2.5 text-sm"
            >
              Kontakt
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-blue-400/60 hover:bg-white/10 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03193E] md:hidden"
            aria-label={isMenuOpen ? "Zavrieť navigáciu" : "Otvoriť navigáciu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 pb-6 pt-4 md:hidden"
          >
            <div className="flex flex-col">
              {isBlog ? (
                <>
                  <Link
                    href="/blog"
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 hover:text-blue-300"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 transition hover:bg-white/10 hover:text-blue-300"
                  >
                    Späť na portfólio
                  </Link>

                  <Link
                    href="/#kontakt"
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 transition hover:bg-white/10 hover:text-blue-300"
                  >
                    Kontakt
                  </Link>
                </>
              ) : (
                navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={
                      item.label === "Blog"
                        ? "rounded-xl px-4 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 hover:text-blue-300"
                        : "rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 transition hover:bg-white/10 hover:text-blue-300"
                    }
                  >
                    {item.label}
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
