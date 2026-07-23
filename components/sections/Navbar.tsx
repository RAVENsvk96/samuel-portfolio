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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto max-w-6xl px-6"
        aria-label="Hlavná navigácia"
      >
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="Späť na domovskú stránku"
            className="flex h-full items-center"
            onClick={closeMenu}
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
            className="inline-flex size-12 items-center justify-center rounded-xl border border-slate-200 text-slate-950 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:hidden"
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
            className="border-t border-slate-200 pb-6 pt-4 md:hidden"
          >
            <div className="flex flex-col">
              {isBlog ? (
                <>
                  <Link
                    href="/blog"
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    Späť na portfólio
                  </Link>
                </>
              ) : (
                navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))
              )}

              <Button
                href={isBlog ? "/#kontakt" : "#kontakt"}
                className="mt-4 w-full justify-center"
                onClick={closeMenu}
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}