# Panic News Network

A Next.js (App Router + TypeScript + Tailwind CSS) site for Panic News Network (PNN) — a satirical news-outlet-style layout (breaking news ticker, category nav, hero story, headline grid) with real story content, ready to iterate on and deploy.

> Note: this repo is still named `fastnewsnetwork-com` on GitHub (the project's original name before the rebrand to Panic News Network). Renaming it is a GitHub Settings action — see the project conversation for details.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this GitHub repository.
2. Vercel auto-detects the Next.js framework — no configuration needed.
3. Click **Deploy**.

Every push to the default branch will trigger a new production deployment; pushes to other branches/PRs get preview deployments automatically.

## Project structure

- `app/layout.tsx` — root layout and global metadata
- `app/page.tsx` — homepage (hero story, headline grid, sidebar, footer)
- `app/story/[slug]/page.tsx` — individual story/article page
- `app/category/[slug]/page.tsx` — category listing page
- `app/globals.css` — Tailwind base styles
- `tailwind.config.ts` — brand color tokens (Alert Red, Digital Blue, Night Navy, Chrome Silver, Accent Pink)
- `lib/stories.ts` — story content (currently the "In Competence We Trust" archive)
- `lib/categories.ts` — category taxonomy
- `public/logo.png` — Panic News Network logo

Story images are still placeholders — swap them for real assets when available.
