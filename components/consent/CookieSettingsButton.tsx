"use client";

import { openConsentSettingsEvent } from "@/components/consent/CookieConsent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(openConsentSettingsEvent))}
      className="rounded-sm text-slate-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
    >
      Nastavenia cookies
    </button>
  );
}
