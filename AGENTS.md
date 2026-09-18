# SHEMA Makeup Collection - Website

## Project Context
- **Business:** SHEMA — Reselling makeup, body care, and accessories
- **Brands in catalog:** Sephora Collection, Victoria's Secret, Juicy Couture, Givenchy, Dolce & Gabbana
- **Reference PDF:** `C:\Users\Enman\Downloads\shema-catalogo.pdf`

## Tech Stack
- **Framework:** Next.js 16 (App Router) — `next@16.3.5`
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (PostCSS via `@tailwindcss/postcss`)
- **Database:** Supabase (PostgreSQL + Storage)
- **Hosting:** Netlify

## Design / Colors
- **CSS variables defined in** `src/app/globals.css` — not a `tailwind.config.js` (does not exist)
- **Current palette:** Pink tones — background `#FFD1DC`, foreground `#4A0E2E`, primary `#8B1A4A`, secondary `#D4758C`, accent `#C4687A`, dark-rose `#6B0F3A`
- **Tailwind theme:** Uses `@theme inline` block in globals.css to map CSS vars to Tailwind tokens

## Product Data
- **Stored in:** Supabase `products` table (migrated from static JSON)
- **Seed script:** `seed.sql` — run in Supabase SQL Editor to populate initial 30 products
- **Image files:** `public/products/` — 56 images (1.jpg–14.jpg, amber1.jpg, juicy2.jpg, etc.)
- **Image uploads:** Supabase Storage bucket `product-images` (public)
- **Schema per product:** id, brand, name, size, color, price, category, image, description
- **Categories:** Lip Gloss, Lip Stain, Lip Care, Contour, Mascara, Eyeliner, Blush, Foundation, Body Care, Fragrance, Accessories, Apparel, Gift Set

## Project Structure
```
src/
├── app/
│   ├── page.tsx              # Homepage (async Server Component, fetches from Supabase)
│   ├── layout.tsx            # Root layout (CartProvider wraps here)
│   ├── globals.css           # Tailwind v4 theme + CSS vars
│   ├── products/
│   │   ├── page.tsx          # Catalog with filters (client-side Supabase fetch)
│   │   └── [id]/page.tsx     # Product detail (client-side Supabase fetch)
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── contact/page.tsx
│   └── admin/
│       ├── layout.tsx        # Password gate (NEXT_PUBLIC_ADMIN_PASSWORD)
│       ├── page.tsx          # Product list with edit/delete
│       └── ProductForm.tsx   # Create/edit form + image upload
├── components/               # Header.tsx, Footer.tsx, ProductCard.tsx
├── data/                     # (empty — products moved to Supabase)
├── hooks/useCart.tsx          # Cart context + hook (localStorage)
├── lib/
│   ├── supabase.ts           # Supabase client singleton
│   └── products.ts           # Server functions: getProducts, getProductById
└── types/index.ts
```

## Admin Page
- **URL:** `/admin`
- **Auth:** Password gate via `NEXT_PUBLIC_ADMIN_PASSWORD` env var
- **Features:** Product CRUD, image upload to Supabase Storage
- **GF-friendly:** Clean form UI, no code editing required

## Conventions
- Keep original brand names (Sephora, Victoria's Secret, Juicy Couture, etc.)
- Prices in USD
- Cart state persists in localStorage
- No `tailwind.config.js` — Tailwind v4 configured entirely in globals.css

## Commands
| Command | Notes |
|---------|-------|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build (also verifies TS types) |
| `npm run lint` | ESLint — may timeout on Windows |
| `npm start` | Production server |

## Environment Variables
| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `NEXT_PUBLIC_ADMIN_PASSWORD` | Password for `/admin` access |

## Gotchas
- `npm run lint` can timeout on Windows. Use `npm run build` to check for TypeScript/type errors instead.
- No CI workflows, test suites, or pre-commit hooks configured.
- `CLAUDE.md` just contains `@AGENTS.md` (acts as a pointer).
- Supabase env vars must be set in `.env.local` and in Netlify dashboard.
- If Supabase is not configured, pages show empty states (graceful degradation).
