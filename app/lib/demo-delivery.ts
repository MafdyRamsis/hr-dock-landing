export function getDemoDeliveryConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.DEMO_FROM_EMAIL?.trim();
  const to = process.env.DEMO_TO_EMAIL?.trim();
  return apiKey && from && to ? { apiKey, from, to } : null;
}
