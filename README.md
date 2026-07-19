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
└── terms/              # Terms of service page
```

---

## Pages

| Route | Content |
|---|---|
| `/` | Main landing page — product overview, features, pricing |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Deployment

Deployed on **Vercel** via GitHub auto-deploy. Every push to `main` triggers a new build.

```bash
git push origin main
```
