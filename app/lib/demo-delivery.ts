export function getDemoDeliveryConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.DEMO_FROM_EMAIL?.trim();
  const to = process.env.DEMO_TO_EMAIL?.trim();
  return apiKey && from && to ? { apiKey, from, to } : null;
}

// Where the demo form posts. With Resend configured, this site's own
// /api/demo-request sends the email; otherwise the HR Dock app saves the
// request and emails it to hello@hr-dock.com through its own mail service.
export function getDemoEndpoint() {
  if (getDemoDeliveryConfig()) return "/api/demo-request";
  const api = (process.env.HR_DOCK_API_URL?.trim() || "https://api.hr-dock.com/api/v1").replace(/\/+$/, "");
  return `${api}/public/demo-request`;
}
