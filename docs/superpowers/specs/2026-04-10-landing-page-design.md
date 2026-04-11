# Landing Page Design — ATL Real Estate Template

**Date:** 2026-04-10
**Status:** Approved
**Approach:** Option A — Dark PropTech (Compass-style)

---

## Overview

A full-replacement of `app/page.tsx` with a production-quality real estate landing page. All copy is placeholder text (template). No data fetching — purely presentational, using static placeholder values throughout.

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#020617` (slate-950) — existing globals.css |
| Surface / Card | `#0f172a` (slate-900) |
| Surface elevated | `rgba(255,255,255,0.05)` glassmorphism |
| Primary accent | `#0ea5e9` (sky-500) |
| Primary accent hover | `#38bdf8` (sky-400) |
| Secondary accent | `#2563eb` (blue-600) |
| Muted text | `#94a3b8` (slate-400) |
| Border | `rgba(255,255,255,0.08)` |
| Heading font | `Inter` (system fallback, weight 700/800) |
| Body font | `Inter` (system fallback, weight 400/500) |
| Border radius | `1rem` (16px) cards, `0.75rem` (12px) inputs |
| Shadow | `0 25px 50px -12px rgba(0,0,0,0.5)` |

**Style:** Glassmorphism cards (backdrop-blur, border rgba white 0.08), sky-blue accent on dark slate. Compass/PropTech aesthetic.

---

## Sections (in order)

### 1. Navbar
- Fixed top, full-width, `backdrop-blur-md` + subtle border bottom
- Left: Logo placeholder (wordmark)
- Right: Nav links (Buy, Rent, Sell, Agents) + CTA button ("Get Started")
- Mobile: hidden nav links, hamburger icon (static, no JS interaction needed)

### 2. Hero
- Full-viewport height (`min-h-screen`)
- Background: dark gradient overlay on a placeholder property image (using `bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950`)
- Centered content: eyebrow tag + H1 headline + subheadline
- Integrated search bar below headline: Location input + Property type select + Beds select + Search button (sky-500)
- Scroll-indicator arrow at bottom

### 3. Trust / Stats Strip
- Full-width, `bg-slate-900/50` with border top/bottom
- 4 stat blocks in a row: `[Number] [Label]` — e.g. "12,000+ Properties", "48 Cities", "9,800+ Happy Clients", "4.9★ Rating"
- Dividers between stats on desktop

### 4. Featured Properties
- Section heading + "View all" link
- 3-column grid (1 col mobile, 2 tablet, 3 desktop)
- Each card: property image placeholder, price badge (sky-500), address, beds/baths/sqft row, "View Details" button
- Cards: glassmorphism — `bg-white/5 backdrop-blur border border-white/8 rounded-2xl`

### 5. How It Works
- 3-step horizontal layout (stacked on mobile)
- Each step: numbered circle (sky gradient), icon, title, description
- Steps: "Search Properties" → "Schedule a Visit" → "Close the Deal"

### 6. Property Categories
- 4-tile grid: Residential, Commercial, Luxury, Land
- Each tile: background gradient + inline SVG icon + label + property count
- Hover: scale-up + border glow

### 7. Testimonials
- Section heading
- 3 cards in a row: star rating, quote, avatar placeholder circle, name, role
- Glassmorphism cards

### 8. Featured Agents
- 3 agent cards: avatar placeholder, name, specialty, "X listings" badge, "Contact" button
- Rounded avatar with sky border ring

### 9. CTA Banner
- Full-width dark section with gradient background
- Headline + subheadline
- Email input + "Notify Me" / "Get Started" button
- Sky-500 accent glow behind section

### 10. Footer
- 4-column grid: Logo/tagline, Navigation links (3 cols grouped), Social icons
- Bottom bar: copyright + legal links
- Border top separator

---

## Technical Constraints

- **File:** `app/page.tsx` only — single file replacement
- **No new dependencies** — Tailwind classes only, no new npm packages
- **Icons:** Inline SVGs only — `lucide-react` is not installed
- **Images:** CSS gradient placeholders only — no `<img>` tags requiring real URLs
- **Animations:** CSS transitions only (`transition-all duration-300`). The `motion` library is available in the project but not required for this static template page.
- **No `'use client'`** — pure Server Component (no interactivity needed for template)
- **Responsive:** 375px / 768px / 1024px / 1440px breakpoints
- **Accessibility:** semantic HTML, aria-labels on icon buttons, contrast ≥ 4.5:1

---

## Placeholder Strategy

All copy uses descriptive placeholders:
- Headlines: `[Agency Name]` style where the brand name goes
- Stats: realistic-looking numbers (not lorem ipsum)
- Addresses: generic street names ("123 Main Street, Atlanta, GA")
- Prices: realistic ranges ("$450,000", "$1,250/mo")
- Names: generic ("John Smith", "Sarah Johnson")

---

## Out of Scope

- Actual search functionality
- Real property data / API integration
- Authentication / login flow
- Mobile hamburger menu toggle (static HTML only)
- Dark/light mode toggle
