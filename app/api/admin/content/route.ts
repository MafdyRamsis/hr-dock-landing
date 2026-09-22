import { isAdmin } from "../../../lib/admin-auth";
import { getSiteContent, saveSiteContent, type SiteContent } from "../../../lib/site-content";

export async function GET() {
  if (!(await isAdmin())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  return Response.json(await getSiteContent());
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as SiteContent | null;
  if (!body?.hero || !body?.pricing || !body?.clients || !body?.cta || !Array.isArray(body.pricing.plans)) {
    return Response.json({ error: "Invalid website content." }, { status: 400 });
  }
  if (body.pricing.plans.length > 6 || body.clients.logos.length > 24) return Response.json({ error: "Too many items." }, { status: 400 });
  return Response.json(await saveSiteContent(body));
}
