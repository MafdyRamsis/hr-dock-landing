import { ADMIN_COOKIE, adminCookieOptions, createAdminToken, validAdminPassword } from "../../../lib/admin-auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }));
  if (!validAdminPassword(typeof password === "string" ? password : "")) {
    return Response.json({ error: "Incorrect password." }, { status: 401 });
  }
  (await cookies()).set(ADMIN_COOKIE, createAdminToken(), adminCookieOptions);
  return Response.json({ ok: true });
}
