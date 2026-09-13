"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/data/navigation";

type NavbarProps = {
  variant?: "portfolio" | "blog";
};

type MenuIconProps = {
  label: string;
};

const orbitPositions = [
  "left-1/2 top-[3%] -translate-x-1/2",
  "right-[5%] top-[29%]",
  "bottom-[8%] right-[15%]",
  "bottom-[8%] left-[15%]",
  "left-[5%] top-[29%]",
];

function MenuIcon({ label }: MenuIconProps) {
  if (label === "Služby") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  }

  if (label === "Projekty") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H10l2 2h7.5A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" />
      </svg>
    );
  }

  if (label === "Proces") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M8 6h3a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3M8 18h3a3 3 0 0 0 3-3" />
      </svg>
    );
  }

  if (label === "O mne") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M5 3h11l3 3v15H5z" />
      <path d="M16 3v4h4M8 12h8M8 16h6" />
    </svg>
  );
}

export default function Navbar({ variant = "portfolio" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isBlog = variant === "blog";

  const resolveHref = (href: string) =>
    isBlog && href.startsWith("#") ? `/${href}` : href;

  const primaryItems = navigation
    .filter((item) => item.label !== "Kontakt")
    .map((item) => ({ ...item, href: resolveHref(item.href) }));

  const contactHref = isBlog ? "/#kontakt" : "#kontakt";
  const currentLabel = isBlog ? "Blog" : activeLabel;

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isBlog) return;

    const sectionItems = navigation.filter((item) =>
      item.href.startsWith("#"),
    );
    let frameId = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.38;
        const activeSection = sectionItems.find((item) => {
          const section = document.getElementById(item.href.slice(1));

          if (!section) return false;

          const bounds = section.getBoundingClientRect();
          return bounds.top <= marker && bounds.bottom > marker;
        });

        setActiveLabel(
          activeSection && activeSection.label !== "Kontakt"
            ? activeSection.label
            : null,
        );
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isBlog]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const visibleMenu = () =>
      window.matchMedia("(min-width: 768px)").matches
        ? desktopMenuRef.current
        : mobileMenuRef.current;

    const selector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const frame = window.requestAnimationFrame(() => {
      visibleMenu()?.querySelector<HTMLElement>(selector)?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const items = Array.from(
        visibleMenu()?.querySelectorAll<HTMLElement>(selector) ?? [],
      ).filter((item) => item.offsetParent !== null);

      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[70] border-b border-white/10 bg-[#03193E]/95 backdrop-blur-xl">
        <nav className="mx-auto max-w-6xl px-5 sm:px-6" aria-label="Hlavná navigácia">
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

            <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block">
              <div className="relative flex items-center overflow-hidden rounded-full border border-blue-300/20 bg-[#061B3A]/65 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
                <span
                  className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/45 to-transparent"
                  aria-hidden="true"
                />

                <span
                  className="size-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.9)]"
                  aria-hidden="true"
                />

                <span className="ml-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Dostupnosť
                </span>

                <span
                  className="mx-3 h-4 w-px bg-white/15"
                  aria-hidden="true"
                />

                <span className="whitespace-nowrap text-xs font-medium text-slate-200">
                  Prijímam nové projekty
                </span>
              </div>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className={`orbit-trigger group relative inline-flex size-12 items-center justify-center rounded-full border text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-3 focus-visible:ring-offset-[#03193E] md:size-14 ${
                isMenuOpen
                  ? "border-blue-300 bg-blue-500/15 shadow-[0_0_28px_rgba(59,130,246,0.3)]"
                  : "border-blue-300/30 bg-white/[0.03] hover:border-blue-300/70 hover:bg-blue-500/10"
              }`}
              aria-label={isMenuOpen ? "Zavrieť navigáciu" : "Otvoriť orbitálne menu"}
              aria-expanded={isMenuOpen}
              aria-controls="navigation-overlay"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="absolute -inset-2 rounded-full border border-blue-400/10 transition duration-500 group-hover:rotate-45" aria-hidden="true" />
              <span className="absolute -right-1 top-0 size-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.9)]" aria-hidden="true" />
              {isMenuOpen ? (
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              ) : (
                <span className="relative block size-6" aria-hidden="true">
                  <span className="absolute left-0 top-[6px] h-0.5 w-6 rotate-[-28deg] rounded-full bg-current" />
                  <span className="absolute left-0 top-[15px] h-0.5 w-6 rotate-[-28deg] rounded-full bg-current" />
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          id="navigation-overlay"
          className="navigation-backdrop fixed inset-0 z-[60] bg-[#010815]/78 backdrop-blur-[5px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}
        >
          <div
            ref={desktopMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Orbitálne menu"
            className="pointer-events-none absolute inset-0 hidden md:block"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%]">
              <div className="orbit-menu pointer-events-auto relative size-[min(33rem,64vh)] min-h-[28rem] min-w-[28rem] rounded-full border border-blue-300/25 bg-[#061B3A]/35 shadow-[0_0_80px_rgba(37,99,235,0.09)] backdrop-blur-sm">
                <div className="absolute inset-[8%] rounded-full border border-blue-400/15" />
                <div className="absolute inset-[22%] rounded-full border border-blue-400/20" />
                <div className="absolute inset-[34%] rounded-full border border-blue-400/15" />
                <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-300/25 to-transparent" />
                <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />

                {primaryItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    style={{ animationDelay: `${110 + index * 70}ms` }}
                    aria-current={
                      currentLabel === item.label ? "location" : undefined
                    }
                    className={`orbit-item group absolute ${orbitPositions[index]} flex w-24 flex-col items-center gap-2 text-center text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                      currentLabel === item.label
                        ? "text-blue-200"
                        : "text-slate-100 hover:text-blue-300"
                    }`}
                  >
                    <span
                      className={`relative flex size-[4.5rem] items-center justify-center rounded-full border bg-[#061B3A]/95 text-white transition duration-300 ${
                        currentLabel === item.label
                          ? "border-blue-200 bg-blue-500/20 shadow-[0_0_34px_rgba(96,165,250,0.35)]"
                          : "border-blue-200/60 shadow-[0_0_24px_rgba(59,130,246,0.12)] group-hover:border-blue-300"
                      }`}
                    >
                      {currentLabel === item.label && (
                        <span
                          className="absolute -right-0.5 top-1 size-2 rounded-full bg-blue-200 shadow-[0_0_10px_rgba(147,197,253,1)]"
                          aria-hidden="true"
                        />
                      )}
                      <MenuIcon label={item.label} />
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    menuButtonRef.current?.focus();
                  }}
                  className="absolute left-1/2 top-1/2 inline-flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300 bg-[#072655] text-white shadow-[0_0_35px_rgba(37,99,235,0.28)] transition duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#061B3A]"
                  aria-label="Zavrieť navigáciu"
                >
                  <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>

                <Link
                  href={contactHref}
                  onClick={closeMenu}
                  className="orbit-contact absolute bottom-[-12%] left-1/2 inline-flex items-center gap-3 rounded-full border border-blue-400/70 bg-[#072655]/95 py-2 pl-2 pr-5 font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-blue-500">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <path d="M3 6h18v12H3z" />
                      <path d="m3 7 9 7 9-7" />
                    </svg>
                  </span>
                  Kontaktovať ma
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobilné menu"
            className="pointer-events-auto absolute inset-x-0 bottom-0 md:hidden"
          >
            <div
              style={{
                borderTopLeftRadius: "50% 14%",
                borderTopRightRadius: "50% 14%",
              }}
              className="mobile-arc relative -ml-[10vw] flex h-[70svh] min-h-[35rem] w-[120vw] flex-col overflow-hidden border-t border-blue-300/70 bg-[#061B3A]/98 shadow-[0_-28px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute left-1/2 top-5 h-1 w-14 -translate-x-1/2 rounded-full bg-blue-200/80" aria-hidden="true" />
              <div className="absolute left-1/2 top-[-17vw] aspect-square w-[92vw] -translate-x-1/2 rounded-full border border-blue-400/10" aria-hidden="true" />

              <div className="mx-auto flex h-full w-[min(24rem,83vw)] flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-20">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Navigácia
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-5">
                {primaryItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    style={{ animationDelay: `${90 + index * 55}ms` }}
                    aria-current={
                      currentLabel === item.label ? "location" : undefined
                    }
                    className={`arc-item group flex flex-col items-center gap-2 rounded-2xl py-1 text-center font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                      index === primaryItems.length - 1 ? "col-span-2" : ""
                    } ${
                      currentLabel === item.label
                        ? "text-blue-200"
                        : "text-white"
                    }`}
                  >
                    <span
                      className={`relative flex size-16 items-center justify-center rounded-full border bg-[#072655]/70 text-white transition duration-300 group-active:scale-95 ${
                        currentLabel === item.label
                          ? "border-blue-200 bg-blue-500/20 shadow-[0_0_28px_rgba(96,165,250,0.32)]"
                          : "border-blue-300/45 group-hover:border-blue-200 group-hover:bg-blue-500/15"
                      }`}
                    >
                      {currentLabel === item.label && (
                        <span
                          className="absolute -right-0.5 top-1 size-2 rounded-full bg-blue-200 shadow-[0_0_10px_rgba(147,197,253,1)]"
                          aria-hidden="true"
                        />
                      )}
                      <MenuIcon label={item.label} />
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              <Link
                href={contactHref}
                onClick={closeMenu}
                className="arc-contact mt-auto inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.3)] transition active:scale-[0.98] hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-3 focus-visible:ring-offset-[#061B3A]"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M3 6h18v12H3z" />
                  <path d="m3 7 9 7 9-7" />
                </svg>
                Kontaktovať ma
                <span aria-hidden="true">→</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes navigation-backdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes orbit-menu {
          from { opacity: 0; transform: scale(0.28) rotate(-32deg); }
          to { opacity: 1; transform: scale(1) rotate(0); }
        }

        @keyframes orbit-item {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes orbit-contact {
          from { opacity: 0; transform: translate(-50%, 18px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @keyframes mobile-arc {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes arc-item {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .navigation-backdrop { animation: navigation-backdrop 220ms ease-out both; }
        .orbit-menu { animation: orbit-menu 560ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .orbit-item { animation: orbit-item 380ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .orbit-contact { animation: orbit-contact 380ms 420ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .mobile-arc { animation: mobile-arc 500ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .arc-item { animation: arc-item 360ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .arc-contact { animation: arc-item 360ms 330ms cubic-bezier(0.22, 1, 0.36, 1) both; }

        @media (prefers-reduced-motion: reduce) {
          .navigation-backdrop,
          .orbit-menu,
          .orbit-item,
          .orbit-contact,
          .mobile-arc,
          .arc-item,
          .arc-contact {
            animation-duration: 1ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </>
  );
}
