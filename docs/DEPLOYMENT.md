# Deploying to GoDaddy (cPanel)

The contact form sends mail through `src/app/api/email/send` (and related routes under `src/app/api/`), calling the Zoho Mail API with server-only secrets. That means the app needs a real Node.js process at runtime — it can't be served as static files.

This target is a **cPanel shared/Business hosting plan**, which runs Node apps via cPanel's **Setup Node.js App** tool (Phusion Passenger) rather than `next start` directly. Passenger runs a plain entry file — `server.js` at the project root — that listens on `process.env.PORT`; that file already exists in this repo and is what gets set as the app's "Application startup file".

Without SSH/Terminal access, the production build has to happen locally and get uploaded, since cPanel's Node.js Selector only runs `npm install`, not `npm run build`.

## 0. Before you start — verify the Node.js version

In cPanel → **Setup Node.js App**, check which Node.js versions are offered. You need **20.9.0 or higher** (Next.js 16's minimum). If only older versions are available, stop here and contact GoDaddy support about upgrading — the app won't run otherwise.

## 1. Build locally

From the project root:

```bash
npm ci
npm run build
```

This produces `.next/` with the production build.

Optionally sanity-check the exact entry point Passenger will run, before uploading anything:

```bash
NODE_ENV=production PORT=3001 node server.js
```

Then browse `http://localhost:3001` and confirm a few pages load.

## 2. Upload the project to GoDaddy

Via cPanel **File Manager** (or FTP), upload the project to wherever the app should live (e.g. a subdirectory under your account, not necessarily `public_html`). Include:

- All source files (`src/`, `public/`, etc.)
- `.next/` (the build output from step 1)
- `server.js`
- `package.json` and `package-lock.json`

Exclude: `node_modules/`, `.git/`, and any `.env*` file — secrets go into the cPanel UI, not uploaded.

## 3. Create the Node.js app in cPanel

Go to **Setup Node.js App** → **Create Application**:

- **Node.js version**: the ≥ 20.9.0 version confirmed in step 0
- **Application mode**: Production
- **Application root**: the directory uploaded in step 2
- **Application URL**: the domain or subdomain this app should serve (e.g. `aitek.in` or `www.aitek.in`)
- **Application startup file**: `server.js`

Save/Create.

## 4. Set environment variables

Still in that app's settings, in the **Environment Variables** section, add (see `.env.example` in the repo for the exact names):

```
ZOHO_CLIENT_ID=<value>
ZOHO_CLIENT_SECRET=<value>
ZOHO_REFRESH_TOKEN=<value>
ZOHO_ACCOUNT_ID=<value>
```

Never commit real values to the repo.

## 5. Install dependencies

Click **Run NPM Install** in the cPanel UI. This runs `npm install` against the uploaded `package.json` / `package-lock.json` inside the app's own Node environment.

## 6. Start the app

Click **Restart** (or **Start**, on the first run). cPanel/Passenger now runs `node server.js` under the hood and proxies the configured domain to it. No manual nginx/pm2 setup is needed.

## 7. TLS

Once the domain's DNS points at this GoDaddy hosting account, go to **SSL/TLS Status** and let **AutoSSL** issue a free certificate — no certbot involved.

## 8. Verify it's live

Visit the domain, click through a few pages, and submit the contact form to confirm `/api/email/send` actually delivers mail via Zoho.

## Redeploying later

1. Repeat step 1 (build locally).
2. Re-upload the changed files — at minimum `.next/`, plus any changed source.
3. If `package.json` / `package-lock.json` changed, re-run **Run NPM Install** first.
4. Click **Restart**.
