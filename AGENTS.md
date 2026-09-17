# SHEMA Makeup Collection - Website

## Project Context
- **Business:** SHEMA - Reselling makeup, body care, and accessories
- **Brands:** Sephora Collection, Victoria's Secret, Juicy Couture
- **Reference:** PDF catalog at `C:\Users\Enman\Downloads\shema-catalogo.pdf`

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (free tier)

## Design Specifications
- **Color Scheme:** Lila/Lavender background (#E6E6FA) + Dark Purple text (#4B0082)
- **Style:** Catalog-style layout matching PDF (product images left, details right)
- **Tagline:** "Multiply Your Beauty"
- **Brand Colors:** Pink/lavender gradient backgrounds, decorative stars/curves

## Product Images
- **Source:** `C:\Users\Enman\OneDrive\Escritorio\Catalogo`
- **Copied to:** `public/products/` (56 images)
- **Files:** 1.jpg through 14.jpg, named product images (amber1.jpg, juicy2.jpg, etc.)

## Product Data
- **Location:** `src/data/products.json`
- **Count:** 30 products initially
- **Categories:** Lip Gloss, Lip Stain, Lip Care, Contour, Mascara, Eyeliner, Blush, Foundation, Body Care, Fragrance, Accessories, Apparel, Gift Set
- **Each product has:** id, brand, name, size, color, price, category, image, description

## Project Structure
```
src/
├── app/
│   ├── page.tsx              # Homepage with hero + featured products
│   ├── layout.tsx            # Root layout with CartProvider
│   ├── products/
│   │   ├── page.tsx          # Product catalog with filters
│   │   └── [id]/page.tsx     # Product detail page
│   ├── cart/page.tsx         # Shopping cart
│   ├── checkout/page.tsx     # Multi-step checkout
│   └── contact/page.tsx      # Contact form
├── components/
│   ├── Header.tsx            # Navigation + cart icon
│   ├── Footer.tsx            # Footer with links
│   └── ProductCard.tsx       # Product card component
├── data/products.json        # Product data
├── hooks/useCart.tsx          # Cart context + hook
└── types/index.ts            # TypeScript interfaces
```

## Key Conventions
- Products are resold (keep original branding: Sephora, Victoria's Secret, Juicy Couture)
- Prices in USD
- Cart persists in localStorage
- Tailwind v4 uses `@theme inline` in globals.css (not tailwind.config.js)

## Commands
- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm start` - Start production server

## Known Issues
- `npm run lint` may timeout on Windows (known ESLint issue)
- Use `npm run build` to verify TypeScript errors instead
