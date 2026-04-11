# Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `app/page.tsx` with a 10-section production-quality real estate landing page template.

**Architecture:** Single Server Component file (`app/page.tsx`). All sections defined as internal functions at the top of the file and composed in the default export. No client state, no new dependencies — pure Tailwind + inline SVGs.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript. No new npm packages.

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `app/page.tsx` | Full replacement | All 10 sections: Navbar, Hero, Stats, Properties, HowItWorks, Categories, Testimonials, Agents, CTA, Footer |
| `app/globals.css` | No change | Existing dark background + scroll-behavior kept as-is |

---

## Design Tokens (use these exact classes throughout)

```
Background:      bg-slate-950
Card surface:    bg-white/5 backdrop-blur-md border border-white/[0.08]
Primary accent:  sky-500  (#0ea5e9)
Accent hover:    sky-400
Secondary:       blue-600
Muted text:      text-slate-400
Body text:       text-slate-300
Heading:         text-white
Border:          border-white/[0.08]
Radius-card:     rounded-2xl
Radius-input:    rounded-xl
Shadow:          shadow-2xl shadow-black/50
Transition:      transition-all duration-300
```

---

### Task 1: Scaffold the file with data + section stubs

**Files:**
- Modify: `app/page.tsx` (full replacement)

- [ ] **Step 1: Replace the entire file** with scaffolding that defines all placeholder data arrays and stub section functions, then composes them in the default export.

```tsx
// app/page.tsx

/* ─── Placeholder data ──────────────────────────────────────── */

const NAV_LINKS = ["Buy", "Rent", "Sell", "Agents"] as const;

const STATS = [
  { value: "12,400+", label: "Properties Listed" },
  { value: "48", label: "Cities Covered" },
  { value: "9,800+", label: "Satisfied Clients" },
  { value: "4.9★", label: "Average Rating" },
];

const PROPERTIES = [
  {
    id: 1,
    price: "$485,000",
    address: "1842 Peachtree Rd NE",
    city: "Atlanta, GA 30309",
    beds: 4,
    baths: 3,
    sqft: "2,340",
    type: "Single Family",
    gradient: "from-slate-700 to-slate-800",
  },
  {
    id: 2,
    price: "$1,250 / mo",
    address: "620 Glen Iris Dr NE",
    city: "Atlanta, GA 30308",
    beds: 2,
    baths: 2,
    sqft: "1,100",
    type: "Apartment",
    gradient: "from-slate-800 to-slate-700",
  },
  {
    id: 3,
    price: "$1,175,000",
    address: "3340 Habersham Rd NW",
    city: "Atlanta, GA 30305",
    beds: 5,
    baths: 4,
    sqft: "4,820",
    type: "Luxury",
    gradient: "from-slate-700 to-slate-900",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Search Properties",
    description:
      "Browse thousands of listings filtered by location, price, and type. Our smart search finds exactly what you need.",
  },
  {
    number: "02",
    title: "Schedule a Visit",
    description:
      "Book in-person or virtual tours directly from any listing. Our agents confirm within 24 hours.",
  },
  {
    number: "03",
    title: "Close the Deal",
    description:
      "Get expert guidance through negotiations, paperwork, and closing. We handle the details so you don't have to.",
  },
];

const CATEGORIES = [
  { label: "Residential", count: "8,200+ listings", color: "from-sky-900/40 to-slate-900" },
  { label: "Commercial", count: "1,340+ listings", color: "from-blue-900/40 to-slate-900" },
  { label: "Luxury", count: "620+ listings", color: "from-indigo-900/40 to-slate-900" },
  { label: "Land & Lots", count: "980+ listings", color: "from-violet-900/40 to-slate-900" },
];

const TESTIMONIALS = [
  {
    quote:
      "Found our dream home in under two weeks. The platform made it incredibly easy to filter and schedule tours without any hassle.",
    name: "Sarah Johnson",
    role: "Home Buyer",
    initials: "SJ",
  },
  {
    quote:
      "As an investor, I needed reliable data and fast listings. This platform delivers both. Closed three deals in one quarter.",
    name: "Marcus Williams",
    role: "Real Estate Investor",
    initials: "MW",
  },
  {
    quote:
      "The rental search was smooth from start to finish. Found a great apartment and signed digitally the same day.",
    name: "Priya Patel",
    role: "Renter",
    initials: "PP",
  },
];

const AGENTS = [
  { name: "James Carter", specialty: "Luxury Residential", listings: 42, initials: "JC" },
  { name: "Diana Reyes", specialty: "Commercial Properties", listings: 31, initials: "DR" },
  { name: "Tom Nguyen", specialty: "First-Time Buyers", listings: 57, initials: "TN" },
];

/* ─── Section components ────────────────────────────────────── */

function Navbar() {
  return <nav>NAVBAR</nav>;
}

function Hero() {
  return <section>HERO</section>;
}

function Stats() {
  return <section>STATS</section>;
}

function FeaturedProperties() {
  return <section>PROPERTIES</section>;
}

function HowItWorks() {
  return <section>HOW IT WORKS</section>;
}

function PropertyCategories() {
  return <section>CATEGORIES</section>;
}

function Testimonials() {
  return <section>TESTIMONIALS</section>;
}

function FeaturedAgents() {
  return <section>AGENTS</section>;
}

function CTABanner() {
  return <section>CTA</section>;
}

function Footer() {
  return <footer>FOOTER</footer>;
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedProperties />
      <HowItWorks />
      <PropertyCategories />
      <Testimonials />
      <FeaturedAgents />
      <CTABanner />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Verify the file compiles**

```bash
cd /Users/ign/Desktop/Projects/ATL/Real-Estate-App-Template && pnpm typecheck 2>&1 | tail -5
```

Expected: no errors (stubs return valid JSX).

- [ ] **Step 3: Commit scaffold**

```bash
git add app/page.tsx && git commit -m "feat: scaffold landing page with data and section stubs"
```

---

### Task 2: Implement Navbar

**Files:**
- Modify: `app/page.tsx` — replace `Navbar` stub

- [ ] **Step 1: Replace the Navbar stub**

```tsx
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/[0.06] bg-slate-950/80">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1L1 6v9h5v-5h4v5h5V6L8 1z" fill="white" />
          </svg>
        </div>
        <span className="font-semibold text-white text-lg tracking-tight">[Agency Name]</span>
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="hidden sm:block text-sm text-slate-400 hover:text-white transition-colors duration-200"
        >
          Sign in
        </a>
        <a
          href="#"
          className="text-sm font-medium bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Verify typecheck passes**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Navbar section"
```

---

### Task 3: Implement Hero

**Files:**
- Modify: `app/page.tsx` — replace `Hero` stub

- [ ] **Step 1: Replace the Hero stub**

```tsx
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
      {/* Faux property image: deep gradient suggesting architecture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(14,165,233,0.12),transparent_60%),radial-gradient(ellipse_at_70%_60%,rgba(37,99,235,0.10),transparent_60%)]" />
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-6">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          [City] &rsquo;s Most Trusted Real Estate Platform
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          Find Your Perfect{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Property
          </span>{" "}
          <br className="hidden sm:block" />
          in [City Name]
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
          Thousands of listings — homes, apartments, commercial spaces, and luxury
          estates — all in one place. Start your search today.
        </p>

        {/* Search bar */}
        <div className="mt-8 w-full max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 bg-white/[0.06] backdrop-blur-md border border-white/[0.10] rounded-2xl p-2">
            {/* Location */}
            <div className="flex-1 flex items-center gap-2 bg-white/[0.06] rounded-xl px-4 py-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 shrink-0" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                placeholder="Enter city, neighborhood, or ZIP"
                className="bg-transparent text-sm text-white placeholder:text-slate-500 outline-none w-full"
              />
            </div>
            {/* Type */}
            <select
              className="bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-slate-300 outline-none border-0 cursor-pointer"
              defaultValue=""
              aria-label="Property type"
            >
              <option value="" disabled>Property Type</option>
              <option value="buy">For Sale</option>
              <option value="rent">For Rent</option>
              <option value="commercial">Commercial</option>
            </select>
            {/* Beds */}
            <select
              className="bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-slate-300 outline-none border-0 cursor-pointer"
              defaultValue=""
              aria-label="Bedrooms"
            >
              <option value="" disabled>Beds</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            {/* Search button */}
            <button className="bg-sky-500 hover:bg-sky-400 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500 text-center">
            Popular: Downtown · Midtown · Buckhead · Decatur · Virginia-Highland
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Hero section with search bar"
```

---

### Task 4: Implement Stats Strip

**Files:**
- Modify: `app/page.tsx` — replace `Stats` stub

- [ ] **Step 1: Replace the Stats stub**

```tsx
function Stats() {
  return (
    <section className="border-y border-white/[0.06] bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center ${
              i < 3 ? "md:border-r md:border-white/[0.06]" : ""
            }`}
          >
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span className="mt-1 text-sm text-slate-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Stats strip"
```

---

### Task 5: Implement Featured Properties

**Files:**
- Modify: `app/page.tsx` — replace `FeaturedProperties` stub

- [ ] **Step 1: Replace the FeaturedProperties stub**

```tsx
function FeaturedProperties() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-sky-400 mb-2 uppercase tracking-widest">
              Handpicked for you
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured Properties
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200"
          >
            View all listings
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-950/40 hover:-translate-y-1"
            >
              {/* Faux image */}
              <div
                className={`h-52 bg-gradient-to-br ${p.gradient} relative flex items-end p-4`}
              >
                {/* Price badge */}
                <span className="bg-sky-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                  {p.price}
                </span>
                {/* Type badge */}
                <span className="absolute top-4 right-4 bg-black/40 backdrop-blur text-slate-200 text-xs px-2.5 py-1 rounded-full border border-white/10">
                  {p.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <p className="font-semibold text-white">{p.address}</p>
                  <p className="text-sm text-slate-400">{p.city}</p>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {p.beds} beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l2 2-2 5 3.5 3.5L16 15l2-2" />
                      <path d="M5 8a7 7 0 0014 0" />
                    </svg>
                    {p.baths} baths
                  </span>
                  <span>{p.sqft} sqft</span>
                </div>

                <button className="w-full text-center text-sm font-medium text-sky-400 border border-sky-500/30 hover:bg-sky-500/10 rounded-xl py-2.5 transition-all duration-200 cursor-pointer">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Featured Properties section"
```

---

### Task 6: Implement How It Works

**Files:**
- Modify: `app/page.tsx` — replace `HowItWorks` stub

- [ ] **Step 1: Replace the HowItWorks stub**

```tsx
function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-sky-400 mb-2 uppercase tracking-widest">Simple process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-sky-500/30 via-blue-500/30 to-sky-500/30" />

          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-4 relative">
              {/* Number circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-950/50 z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement How It Works section"
```

---

### Task 7: Implement Property Categories

**Files:**
- Modify: `app/page.tsx` — replace `PropertyCategories` stub

- [ ] **Step 1: Replace the PropertyCategories stub**

```tsx
/* SVG icons for each category — index-matched to CATEGORIES array */
const CATEGORY_ICONS = [
  /* Residential — house */
  <svg key="house" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  /* Commercial — building */
  <svg key="building" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="9" y1="7" x2="9" y2="7.01" />
    <line x1="15" y1="7" x2="15" y2="7.01" />
    <line x1="9" y1="12" x2="9" y2="12.01" />
    <line x1="15" y1="12" x2="15" y2="12.01" />
    <line x1="9" y1="17" x2="9" y2="17.01" />
    <line x1="15" y1="17" x2="15" y2="17.01" />
  </svg>,
  /* Luxury — star */
  <svg key="star" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  /* Land — map-pin */
  <svg key="map" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>,
];

function PropertyCategories() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-sky-400 mb-2 uppercase tracking-widest">Browse by type</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Property Categories</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.label}
              href="#"
              className={`group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${cat.color} p-8 text-center hover:border-sky-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 transition-all duration-300 rounded-2xl" />
              <div className="relative z-10 text-sky-300 group-hover:text-sky-200 transition-colors duration-200">
                {CATEGORY_ICONS[i]}
              </div>
              <div className="relative z-10">
                <p className="font-semibold text-white">{cat.label}</p>
                <p className="mt-1 text-xs text-slate-400">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Property Categories section"
```

---

### Task 8: Implement Testimonials

**Files:**
- Modify: `app/page.tsx` — replace `Testimonials` stub

- [ ] **Step 1: Replace the Testimonials stub**

```tsx
function Testimonials() {
  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-sky-400 mb-2 uppercase tracking-widest">What clients say</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Trusted by Thousands</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6 hover:border-sky-500/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#0ea5e9" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Testimonials section"
```

---

### Task 9: Implement Featured Agents

**Files:**
- Modify: `app/page.tsx` — replace `FeaturedAgents` stub

- [ ] **Step 1: Replace the FeaturedAgents stub**

```tsx
function FeaturedAgents() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-sky-400 mb-2 uppercase tracking-widest">Expert team</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet Our Agents</h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
            Our licensed agents bring local expertise and data-driven strategy to every transaction.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {AGENTS.map((agent) => (
            <div
              key={agent.name}
              className="flex flex-col items-center text-center gap-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 hover:border-sky-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold ring-4 ring-sky-500/20">
                {agent.initials}
              </div>
              <div>
                <p className="font-semibold text-white text-lg">{agent.name}</p>
                <p className="text-sm text-slate-400 mt-0.5">{agent.specialty}</p>
              </div>
              <span className="bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium px-3 py-1 rounded-full">
                {agent.listings} active listings
              </span>
              <button className="w-full text-sm font-medium text-white bg-white/[0.06] hover:bg-sky-500/20 hover:text-sky-300 border border-white/[0.08] hover:border-sky-500/30 rounded-xl py-2.5 transition-all duration-200 cursor-pointer">
                Contact Agent
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Featured Agents section"
```

---

### Task 10: Implement CTA Banner

**Files:**
- Modify: `app/page.tsx` — replace `CTABanner` stub

- [ ] **Step 1: Replace the CTABanner stub**

```tsx
function CTABanner() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
          Ready to Find Your <br />
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Next Home?
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Join thousands of buyers, renters, and investors who trust [Agency Name] to
          find the right property at the right price.
        </p>

        {/* Email capture */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/[0.07] backdrop-blur border border-white/[0.12] text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-500/50 transition-colors duration-200"
            aria-label="Email address"
          />
          <button className="bg-sky-500 hover:bg-sky-400 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer">
            Get Started
          </button>
        </div>
        <p className="text-xs text-slate-600">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: implement CTA Banner section"
```

---

### Task 11: Implement Footer

**Files:**
- Modify: `app/page.tsx` — replace `Footer` stub

- [ ] **Step 1: Replace the Footer stub**

```tsx
const FOOTER_LINKS = {
  Company: ["About Us", "Careers", "Press", "Contact"],
  Properties: ["For Sale", "For Rent", "Commercial", "Luxury"],
  Resources: ["Blog", "Market Reports", "Mortgage Calculator", "Help Center"],
};

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-slate-950 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L1 6v9h5v-5h4v5h5V6L8 1z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-white">[Agency Name]</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              [City]&rsquo;s premier real estate platform. Buy, sell, or rent with confidence.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] flex items-center justify-center transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] flex items-center justify-center transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] flex items-center justify-center transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} [Agency Name]. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Typecheck**

```bash
pnpm typecheck 2>&1 | tail -5
```

- [ ] **Step 3: Final commit**

```bash
git add app/page.tsx && git commit -m "feat: implement Footer — landing page complete"
```

---

### Task 12: Final verification

- [ ] **Step 1: Full typecheck**

```bash
pnpm typecheck 2>&1
```

Expected: no errors.

- [ ] **Step 2: Lint**

```bash
pnpm lint 2>&1 | tail -20
```

Fix any issues reported. Common ones: `no-unused-vars` (remove unused imports), `react/no-unescaped-entities` (use `&rsquo;` etc. — already done in plan).

- [ ] **Step 3: Start dev server and do a visual pass**

```bash
pnpm dev
```

Open http://localhost:3000 and verify:
- Navbar is fixed and visible on scroll
- Hero fills the viewport with gradient background + search bar
- Stats strip shows 4 columns on desktop, 2×2 on mobile
- 3 property cards render with gradient image placeholders
- How It Works has 3 numbered steps with a connecting line on desktop
- 4 category tiles in a 2×2 grid (mobile) / 4-column (desktop)
- 3 testimonial cards with star ratings
- 3 agent cards with avatar circles
- CTA banner has email input + button
- Footer has 4 columns with social icons and bottom bar

- [ ] **Step 4: Commit final**

```bash
git add -A && git commit -m "feat: real estate landing page template complete"
```
