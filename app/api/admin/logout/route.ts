import { ADMIN_COOKIE } from "../../../lib/admin-auth";
import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).delete(ADMIN_COOKIE);
  return Response.json({ ok: true });
}
