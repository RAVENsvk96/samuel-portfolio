export type CtaLocation =
  | "hero"
  | "navigation_desktop"
  | "navigation_mobile";

type EventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: EventParameters,
    ) => void;
  }
}

function trackEvent(eventName: string, parameters?: EventParameters) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
}

export function trackCtaClick(location: CtaLocation) {
  trackEvent("cta_click", {
    cta_location: location,
  });
}

export function trackContactSubmit() {
  trackEvent("contact_submit", {
    form_location: "contact_section",
  });
}
