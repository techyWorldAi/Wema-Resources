# Wema Resources — Website

A modern React + TypeScript + Tailwind CSS site for wemaresources.com, built
around the actual Wema Resources logo (forest green, gold, white).

## Design concept

- **Palette** taken from the logo: Forest Green (`#2F5D34`, dark `#1F3F22`,
  light `#4F8A3D`), Gold (`#D6A93B`, deep `#B8862A`), and a clean white/cream
  base (`#FFFFFF` / `#FAF9F4`) rather than a dark theme.
- **Signature element**: a thin gold "swoosh" (`src/components/Swoosh.tsx`)
  echoes the curve under the logo's "WR" mark — used as an accent under key
  headline words and as a section divider.
- **Type**: Poppins (bold, rounded geometric sans, matching the logo's
  wordmark) for headings, Inter for body copy, IBM Plex Mono for small
  uppercase labels/eyebrows.
- **Background photos**: the hero and the "Core Values" and "Apply" sections
  use a reusable `ImageSection` wrapper that drops in a full-bleed photo with
  a green or soft overlay so text stays readable. Swap any of them out in
  one place — see `siteImages` in `src/content.ts`.
- The real logo (`public/logo.png`, background made transparent) is used in
  the navbar and in the footer.

## Project structure

```
public/
  logo.png              the Wema Resources logo (transparent background)
  favicon.svg
src/
  components/
    Navbar.tsx            sticky nav with logo + mobile menu
    Hero.tsx               headline + background photo + opportunities panel
    OpportunitiesPanel.tsx clean white card listing job categories
    ImageSection.tsx       reusable background-image wrapper (src + overlay)
    Swoosh.tsx              gold swoosh underline + divider (logo motif)
    TrustTicker.tsx         scrolling trust strip
    WhoWeAre.tsx            about / mission section
    CoreValues.tsx          Support · Clarity · Integrity · Transparency (image bg)
    JobCategories.tsx       full job category listing
    Process.tsx             5-step application journey
    CareerSupport.tsx       CV/interview/application support services
    ApplyCard.tsx           reusable CTA card
    CTA.tsx                  mid-page CTA + important info notice (image bg)
    ContactFooter.tsx        contact form + green footer
  content.ts               all copy, typed data, and image URLs
  App.tsx
  main.tsx
  index.css                Tailwind + fonts + swoosh CSS
```

## Getting started

```bash
npm install
npm run dev       # local dev server (Vite)
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build
```

## Swapping background images

Open `src/content.ts` and edit the `siteImages` object — each key is a URL
used by one `ImageSection`. Drop in your own photography (Nairobi office,
candidates, partner sites, etc.) any time; nothing else needs to change.

```ts
export const siteImages = {
  hero: '...',     // hero section background
  values: '...',   // "Our commitment to you" section background
  cta: '...',      // mid-page "Apply" section background
  about: '...',    // photo next to the "Who we are" copy
}
```

## Notes for deployment

- Real form links (job application + career support) point to the existing
  Zoho Forms used by Wema Resources today — update `src/content.ts` if those
  change.
- The contact form opens the visitor's email client via a `mailto:` link
  (no backend yet). Wire it to a real endpoint (Formspree, Zoho Forms embed,
  or a custom API) before launch.
- The placeholder background photos are from Unsplash — replace with
  licensed or original photography before going live.
# Wema-Resources.
