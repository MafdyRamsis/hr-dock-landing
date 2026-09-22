# HR Dock — Landing Page

Public marketing website for **HR Dock**, a multi-tenant Egyptian HRMS SaaS. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS 4 |

---

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start

Copy `.env.example` to `.env.local` and configure the three server-only Resend
variables. The demo form deliberately returns an error instead of pretending a
lead was received when email delivery is not configured.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Useful Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
app/
├── layout.tsx          # Root layout — fonts, metadata, global styles
├── page.tsx            # Home / hero page
├── globals.css         # Global CSS (Tailwind base)
├── favicon.ico
├── privacy/            # Privacy policy page
├── terms/              # Terms of service page
└── api/demo-request/   # Validated server-side demo lead delivery
```

---

## Pages

| Route | Content |
|---|---|
| `/` | Main landing page — product overview, features, pricing |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/admin` | Password-protected homepage content editor |

## Website Admin

The `/admin` page manages homepage hero content, pricing plans, client logos,
uploaded imagery, and the main call to action. Configure `ADMIN_PASSWORD` and a
random `ADMIN_SESSION_SECRET` of at least 32 characters.

For production, connect a Vercel Blob store to the project. Vercel supplies
`BLOB_READ_WRITE_TOKEN`; published content and uploaded images then persist
across deployments. Without a Blob token, local development uses `.data/` and
`public/uploads/` as a development-only fallback.

Admin sessions use an HTTP-only, secure, same-site cookie and expire after eight
hours. Uploaded images are restricted to JPG, PNG, WebP, or SVG files up to 5 MB.

---

## Deployment

Deployed on **Vercel** via GitHub auto-deploy. Every push to `master` triggers a new build.

Add `RESEND_API_KEY`, `DEMO_FROM_EMAIL`, and `DEMO_TO_EMAIL` to the Vercel project
for Production and Preview. Verify the sending domain in Resend before using an
`@hr-dock.com` sender.

```bash
git push origin master
```
