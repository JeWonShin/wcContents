# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000/wcContents)
npm run build    # static export → ./out
npm run lint     # ESLint
```

No test suite exists. Build is the primary correctness check — always run `npm run build` before committing.

## Deployment

Pushing to `main` or `claude/new-session-k44g43` triggers GitHub Actions (`.github/workflows/deploy.yml`), which builds and pushes `./out` to the `gh-pages` branch via `peaceiris/actions-gh-pages@v4`.

Live URL: **https://jewonshin.github.io/wcContents/**

## Architecture

Next.js 15 App Router, fully static export (`output: "export"`). No server-side code, no API routes, no database.

### Key config constraints
- `basePath: "/wcContents"` — all paths and asset references must account for this
- `trailingSlash: true` — links must end with `/` or use Next `<Link>` which handles it automatically
- `images: { unoptimized: true }` — required for static export; use plain `<img>` or Next `<Image>` with unoptimized

### Page structure
Each route is a standalone Server Component with its own `export const metadata`. Pages are under `src/app/`:
- `/` — Home: Hero → QuickMenu → Trust → Equipment → Gallery preview → CTA
- `/about` — Company intro + equipment table
- `/services` — 6 service cards (살수 ×4, 포크레인, 조경건설), each with `id` anchor for deep-linking
- `/pricing` — Day/monthly price tables + FAQ
- `/gallery` — Category filter + placeholder grid
- `/contact` — Contact info + `<QuoteForm>` (only client component on the page)
- `/privacy` — Static legal page

### Shared components (`src/components/`)
- **`OkSalsuLogo`** — Brand logo (red gradient circle "OK" + 살수 text). Props: `size: "sm"|"md"|"lg"`, `dark: boolean` (white text for dark backgrounds). Used in Header and Footer.
- **`Header`** — `"use client"`, fixed top bar with desktop nav + mobile hamburger.
- **`Footer`** — Dark blue (`bg-brand-primary`) footer with logo, contact, links.
- **`FloatingButtons`** — Fixed bottom-right KakaoTalk + phone buttons.
- **`QuoteForm`** — `"use client"`, controlled form for quote requests. Fields: name, phone, address, date, vehicleType, message, privacy consent.

### Styling
Tailwind CSS v3. Custom brand tokens (use these, not raw hex):

| Token | Value | Use |
|---|---|---|
| `brand-primary` | `#10416E` | Dark navy — headings, footer bg |
| `brand-secondary` | `#1F6FB2` | Mid blue — buttons, accents |
| `brand-accent` | `#2E86C1` | Lighter blue — hover states |
| `brand-light` | `#BBD7EC` | Borders, dividers |
| `brand-bg` | `#F4F9FD` | Section backgrounds |
| `brand-gray` | `#5D6D7E` | Body text, subtitles |
| `phone` | `#25D366` | Phone CTA buttons (green) |
| `kakao` | `#FEE500` | KakaoTalk button (yellow) |

Utility classes in `globals.css`: `.btn-cta`, `.btn-cta-outline`, `.card`, `.price-table`, `.section-title`, `.section-subtitle`, `.floating-btn`.

### Business info (single source of truth)
- 상호: OK살수 | 대표: 이준희
- 전화: `010-4894-5037` (tel href: `tel:01048945037`)
- 주소: 경기도 평택시 안중읍 송담3로 56-15
- 모든 문의(살수차·포크레인·조경건설)는 동일 번호로 수렴
