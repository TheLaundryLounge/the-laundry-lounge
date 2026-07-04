# The Laundry Lounge — Website

A fast, accessible, mobile-first one-page website built with **Next.js (App Router)** and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Where to add your real business information

Almost everything you'll want to edit lives in **one file**: `lib/data.ts`.

| What | Where |
|---|---|
| Google Form booking link | `GOOGLE_FORM_URL` in `lib/data.ts` |
| Live domain (used in SEO tags & schema) | `SITE_URL` in `lib/data.ts` |
| Phone, email, address, Facebook, Instagram | `business` object in `lib/data.ts` |
| About Us copy, pillars, awards | `aboutCopy`, `aboutPillars`, `awards` in `lib/data.ts` |
| Service overview cards | `services` array in `lib/data.ts` |
| Full price list, grouped by category | `pricingCategories` array in `lib/data.ts` |
| Drop-off hubs (store + partner locations) | `locations` array in `lib/data.ts` |
| Opening hours table | `openingHours` array in `lib/data.ts` |
| FAQ content | `faqs` array in `lib/data.ts` |
| Privacy Policy / Terms pages | Currently linked from the footer to `/privacy-policy` and `/terms-and-conditions` — create these as new pages under `app/` when ready, e.g. `app/privacy-policy/page.tsx` |
| Open Graph share image | Add a 1200×630 image at `public/og-image.jpg` |

Every placeholder in the codebase is marked with a `// TODO:` comment so they're easy to find with a project-wide search — currently just the Facebook page URL (only the page name was supplied) and the live domain.

## Display font

Headings use **Cinzel**, loaded via `next/font/google` in `app/layout.tsx`, to match your existing brand font. Cinzel is a capitals-forward serif, so headings use wider letter-spacing (`tracking-wide`) rather than tight tracking — this is set in `SectionHeading.tsx` and `Hero.tsx`.

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, JSON-LD schema
  page.tsx           Assembles all sections for the one-page site
  globals.css         Tailwind base styles + small accessibility helpers
  robots.ts           robots.txt via Next.js metadata API
  sitemap.ts          sitemap.xml via Next.js metadata API
components/
  Header.tsx          Sticky nav with mobile menu
  Hero.tsx
  Highlights.tsx      Fast turnaround / eco / care feature strip
  About.tsx
  Services.tsx        Overview cards, deep-link to matching pricing category
  Pricing.tsx         Full price list, grouped by category (accordion)
  PricingAutoOpen.tsx Opens the right pricing category when linked via #pricing-<id>
  HowItWorks.tsx
  Locations.tsx       Store + partner drop-off hubs
  OpeningHours.tsx
  BookCta.tsx
  Contact.tsx
  FAQ.tsx
  Footer.tsx
  Illustrations.tsx   Custom on-brand SVG illustrations (no external images)
  ui/
    Button.tsx
    Container.tsx
    SectionHeading.tsx
    Reveal.tsx        Scroll fade-up animation wrapper
lib/
  data.ts             All editable business content lives here
```

## Notes on performance & accessibility

- Fonts are loaded via `next/font` (self-hosted, no layout shift, `display: swap`).
- All illustrations are inline SVG — no image requests, crisp at any size.
- Scroll animations respect `prefers-reduced-motion`.
- Semantic landmarks (`header`, `main`, `footer`, `nav`) and heading hierarchy throughout.
- FAQ accordion uses native `<details>`/`<summary>` — accessible and keyboard-friendly without extra JavaScript.
- Visible focus states are defined globally in `globals.css`.
- `LocalBusiness` JSON-LD schema is generated from `lib/data.ts` in `app/layout.tsx`.
