import { put } from "@vercel/blob";
import { promises as fs } from "node:fs";
import path from "node:path";
import { isAdmin } from "../../../lib/admin-auth";

const allowed = new Set(["image/jpeg", "image/png", "image/webp", "image/svg+xml"]);

export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const data = await request.formData();
  const file = data.get("file");
  if (!(file instanceof File) || !allowed.has(file.type) || file.size > 5 * 1024 * 1024) {
    return Response.json({ error: "Use a JPG, PNG, WebP, or SVG image under 5 MB." }, { status: 400 });
  }
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-100);
  const pathname = `cms/uploads/${Date.now()}-${safeName}`;
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(pathname, file, { access: "public", addRandomSuffix: true });
    return Response.json({ url: blob.url });
  }
  const localDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(localDir, { recursive: true });
  const localName = `${Date.now()}-${safeName}`;
  await fs.writeFile(path.join(localDir, localName), Buffer.from(await file.arrayBuffer()));
  return Response.json({ url: `/uploads/${localName}` });
}
