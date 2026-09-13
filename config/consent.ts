export const consent = {
  storageKey: "samuel-zeliska-cookie-consent",
  version: 1,
  retentionDays: 180,
} as const;

export type ConsentChoice = "accepted" | "rejected";

export type StoredConsent = {
  version: number;
  choice: ConsentChoice;
  updatedAt: string;
};
