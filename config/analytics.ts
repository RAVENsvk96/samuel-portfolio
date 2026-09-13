const measurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const analytics = {
  enabled: measurementId.length > 0,
  measurementId,
} as const;
