const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_TO_EMAIL;
  const from = process.env.DEMO_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Demo request email is not configured");
    return Response.json({ error: "Demo requests are temporarily unavailable." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 2000);

  if (!name || !company || !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Please provide your name, company, and a valid work email." }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `HR Dock demo request — ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        message || "No message provided.",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Demo request delivery failed", response.status);
    return Response.json({ error: "We couldn't send your request. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
