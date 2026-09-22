import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "hr_dock_admin";
const MAX_AGE = 60 * 60 * 8;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function validAdminPassword(candidate: string) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected || !candidate) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function createAdminToken() {
  const expires = Math.floor(Date.now() / 1000) + MAX_AGE;
  const payload = String(expires);
  return `${payload}.${sign(payload)}`;
}

export async function isAdmin() {
  if (!secret()) return false;
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature || Number(expires) < Date.now() / 1000) return false;
  const expected = sign(expires);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const adminCookieOptions = { httpOnly: true, sameSite: "strict" as const, secure: process.env.NODE_ENV === "production", path: "/", maxAge: MAX_AGE };
