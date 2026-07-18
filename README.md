# STC Consultants — Website

A static React + Vite + Tailwind site. No backend, no API keys, no billing required.

## Run locally
```bash
npm install
npm run dev
```

## Deploy for free — pick one

### Option A: Vercel (easiest, recommended)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: Vite (auto-detected). Click Deploy.
4. Done — you get a free `*.vercel.app` URL, and can add a custom domain for free.

### Option B: Netlify
1. Push this folder to a GitHub repo.
2. Go to app.netlify.com → "Add new site" → "Import an existing project".
3. Build command: `npm run build`, Publish directory: `dist`.
4. Deploy — free `*.netlify.app` URL.

### Option C: GitHub Pages (fully free, stays inside GitHub)
1. In `vite.config.ts`, set `base: '/your-repo-name/'` (must match your repo name exactly).
2. Push this folder to a GitHub repo.
3. In the repo: Settings → Pages → Source → select "GitHub Actions".
4. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.
5. Your site goes live at `https://<username>.github.io/<repo-name>/`.

## Notes
- This project originally included the `@google/genai` SDK and an Express server from the AI Studio template, but neither was actually used anywhere in the code — they've been removed since they added no value and only existed to support AI Studio's own paid Cloud Run hosting.
- Two images in `src/assets/images/` are quite large (600–770 KB). Consider compressing them (e.g. via squoosh.app) before deploying for faster load times.
