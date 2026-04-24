# Probiota Innovations Website

Production-ready Next.js website for Probiota Innovations — a B2B private label gummy & supplement manufacturer.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript
- **Styling:** CSS Modules + Global CSS (no Tailwind)
- **Globe:** globe.gl + three.js (client-side only)
- **Deployment:** Vercel

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                  # Pages (file-based routing)
  page.js             # Home
  about-us/page.js    # About Us
  capabilities/page.js # Capabilities (with 3D Globe)
  certifications/page.js
  contact/page.js
  api/contact/route.js # Contact form API endpoint
components/
  layout/             # Header, Footer
  sections/           # Hero, CtaBanner, GlobeSection
data/                 # Static content (swap for API later)
public/
  images/             # All brand images
  certifications/     # SVG certification logos
```

## Deployment to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Import Project" → select your GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Done. No environment variables needed.

## Future API Integration

All page content is stored in data files or inline arrays. To connect a backend:

1. Replace static data with `fetch()` calls in Server Components
2. The contact form already POSTs to `/api/contact` — add your email service (SendGrid, Resend) or database logic there
3. No refactoring needed — the component architecture supports this out of the box

## Founder Images

Place the founder headshots as:
- `public/images/shrilakshmi.jpg`
- `public/images/anshika.jpg`
