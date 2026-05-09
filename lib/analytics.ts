const fallbackMeasurementId = "G-MXZBNZ1498";

export const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_ID?.trim() || fallbackMeasurementId;
