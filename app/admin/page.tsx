import { getSiteContent } from "../lib/site-content";
import { isAdmin } from "../lib/admin-auth";
import AdminEditor from "./AdminEditor";

export const dynamic = "force-dynamic";
export const metadata = { title: "Website Admin — HR Dock", robots: { index: false, follow: false } };

export default async function AdminPage() {
  const authenticated = await isAdmin();
  const content = authenticated ? await getSiteContent() : null;
  return <AdminEditor initialAuthenticated={authenticated} initialContent={content} />;
}
