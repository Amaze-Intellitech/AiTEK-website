# AITEK Site

Marketing site for AITEK — a consulting-led, engineering-backed partner for Digital Business Engineering, Enterprise Architecture, and Agentic AI transformation.

For the full story of what the site argues, how its content is organized, and the engineering decisions behind it, see [`../docs/SITE-OVERVIEW.md`](../docs/SITE-OVERVIEW.md) — kept outside this folder so it doesn't ship as part of the app.

## Overview

The site makes one argument before anything else: most digital transformation fails from a lack of strategic clarity, not a lack of tooling. AITEK positions itself as a consulting-led, engineering-backed partner that closes that gap through Digital Business Engineering, Enterprise Architecture, and Agentic AI — helping organizations move from manual operations to self-optimizing, autonomous enterprises.

The content is organized around five industry verticals — Manufacturing, Oil & Gas, Insurance, Healthcare, Pharmaceuticals — each addressed from two angles:

- **Industries** — the business problem, challenges, and outcomes per vertical
- **Solutions** — the technical answer, as four AI capability pages (AI/ML, AI Agents, Agentic Framework, Tools)

Alongside that, an **Expertise** tree (Consulting, Domain, Functions) serves visitors who think in capabilities rather than industries, a dedicated **Digital Business Engineering** page covers AITEK's flagship transformation methodology, and **About**/**Contact** round out the site. See `../docs/SITE-OVERVIEW.md` for the full route map and the reasoning behind each engineering decision.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**, CSS-first theming via OKLCH custom properties in `src/app/globals.css` (light/dark, no `tailwind.config.js`)
- **Urbanist** (headings) + **Inter** (body) + **Geist Mono**, self-hosted via `next/font/google`
- **framer-motion** for scroll-reveal and menu/step transitions
- No UI kit — a small hand-built primitive set under `src/components/ui/`, reused across every page

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint        # ESLint
npx tsc --noEmit     # type-check
npm run build        # production build
npm run start         # serve the production build locally
```

## Project structure

```
src/
  app/          Routes (App Router) — thin page components, no business logic
  components/   Header, Footer, ContactForm, and shared UI primitives (components/ui/)
  content/      Typed content objects (industries.ts, expertise.ts, solutions.ts, about.ts, …)
                consumed by the page components — copy changes never touch layout code
docs/
  SITE-OVERVIEW.md   The site's narrative, content architecture, and route map
```

## Deploying

The contact form sends mail through `src/app/api/email/send` (and related routes under `src/app/api/`), which call the Zoho Mail API using server-only secrets. That means the app needs an actual Node.js process at runtime — it can't be served as static files.

For the full step-by-step walkthrough, see [`../docs/DEPLOYMENT.md`](../docs/DEPLOYMENT.md) — kept outside this folder alongside `SITE-OVERVIEW.md` so it doesn't ship as part of the app. Summary below.

### Environment variables

Four server-only env vars are required (see `.env.example`): `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`, `ZOHO_ACCOUNT_ID`. Never commit real values.

### GoDaddy cPanel (Setup Node.js App)

This target is a cPanel shared/Business hosting plan, which runs Node apps via cPanel's **Setup Node.js App** tool (Phusion Passenger) rather than `next start` directly. Passenger needs a plain entry file — `server.js` at the project root — that listens on `process.env.PORT`; that's what to set as the app's "Application startup file".

Without SSH/Terminal access, the production build has to happen locally and get uploaded, since cPanel's Node.js Selector only runs `npm install`, not `npm run build`:

1. **Build locally**: `npm ci && npm run build` (requires Node ≥ 20.9.0 — confirm the cPanel Node.js Selector offers this version before proceeding).
2. **Smoke-test the entry point** that Passenger will run: `NODE_ENV=production PORT=3001 node server.js`, then check a few routes at `http://localhost:3001`.
3. **Upload** the project via cPanel File Manager or FTP — source files, `.next/`, `server.js`, `package.json`, `package-lock.json`, `public/` — excluding `node_modules/`, `.git/`, and any `.env*` files.
4. **Create the app** in cPanel → *Setup Node.js App*: set the Node.js version, application mode to Production, application root to the uploaded directory, application URL to the target domain/subdomain, and application startup file to `server.js`.
5. **Set environment variables** in the same tool's Environment Variables section (the 4 Zoho vars above).
6. **Run NPM Install** from the cPanel UI to install dependencies from the uploaded `package.json`/`package-lock.json`.
7. **Restart** the app from the Node.js Selector.

TLS is handled by cPanel's AutoSSL once the domain resolves to the hosting account — no certbot/nginx involved.

**Redeploying**: repeat the build-locally step, re-upload changed files (at least `.next/`), and Restart. Re-run "Run NPM Install" first if `package.json`/`package-lock.json` changed.
