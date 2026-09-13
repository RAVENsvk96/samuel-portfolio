"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

import { analytics } from "@/config/analytics";
import {
  consent,
  type ConsentChoice,
  type StoredConsent,
} from "@/config/consent";

export const consentChangeEvent = "portfolio-consent-change";
export const openConsentSettingsEvent = "portfolio-open-consent-settings";

function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const storedValue = window.localStorage.getItem(consent.storageKey);
    if (!storedValue) return null;

    const stored = JSON.parse(storedValue) as Partial<StoredConsent>;
    const updatedAt = Date.parse(stored.updatedAt ?? "");
    const expiresAt =
      updatedAt + consent.retentionDays * 24 * 60 * 60 * 1000;

    if (
      stored.version !== consent.version ||
      (stored.choice !== "accepted" && stored.choice !== "rejected") ||
      !Number.isFinite(updatedAt) ||
      Date.now() >= expiresAt
    ) {
      return null;
    }

    return stored.choice;
  } catch {
    return null;
  }
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(consentChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(consentChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return null;
}

function storeConsent(choice: ConsentChoice) {
  const stored: StoredConsent = {
    version: consent.version,
    choice,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(consent.storageKey, JSON.stringify(stored));
  window.dispatchEvent(new Event(consentChangeEvent));
}

function clearGoogleAnalyticsCookies() {
  const hostname = window.location.hostname;

  document.cookie.split(";").forEach((cookieValue) => {
    const cookieName = cookieValue.split("=")[0]?.trim();
    if (!cookieName?.startsWith("_ga")) return;

    document.cookie = `${cookieName}=; Max-Age=0; path=/`;
    document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=.${hostname}`;
  });
}

export default function CookieConsent() {
  const choice = useSyncExternalStore(
    subscribe,
    readConsent,
    getServerSnapshot,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    function openSettings() {
      setSettingsOpen(true);
    }

    window.addEventListener(openConsentSettingsEvent, openSettings);
    return () => {
      window.removeEventListener(openConsentSettingsEvent, openSettings);
    };
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    const analyticsWasActive = choice === "accepted";

    storeConsent(nextChoice);
    setSettingsOpen(false);

    if (nextChoice === "rejected") {
      clearGoogleAnalyticsCookies();

      if (analyticsWasActive) {
        window.location.reload();
      }
    }
  }

  const showBanner = choice === null || settingsOpen;

  return (
    <>
      {choice === "accepted" && analytics.enabled && (
        <GoogleAnalytics gaId={analytics.measurementId} />
      )}

      {showBanner && (
        <aside
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-3xl rounded-[1.5rem] border border-blue-300/20 bg-[#061B3A]/95 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 id="cookie-consent-title" className="text-lg font-semibold">
                Analytické cookies
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                S vaším súhlasom používam Google Analytics na súhrnné
                vyhodnotenie návštevnosti a zlepšovanie stránky. Bez súhlasu sa
                analytika nenačíta. Viac v{" "}
                <Link
                  href="/ochrana-osobnych-udajov"
                  className="font-semibold text-blue-300 underline underline-offset-4 hover:text-white"
                >
                  informáciách o súkromí
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <button
                type="button"
                onClick={() => saveChoice("rejected")}
                className="min-h-11 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-blue-300/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Odmietnuť
              </button>

              <button
                type="button"
                onClick={() => saveChoice("accepted")}
                className="min-h-11 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Povoliť analytiku
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
