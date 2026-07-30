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

| Token             | Value     | Use                             |
| ----------------- | --------- | ------------------------------- |
| `brand-primary`   | `#10416E` | Dark navy — headings, footer bg |
| `brand-secondary` | `#1F6FB2` | Mid blue — buttons, accents     |
| `brand-accent`    | `#2E86C1` | Lighter blue — hover states     |
| `brand-light`     | `#BBD7EC` | Borders, dividers               |
| `brand-bg`        | `#F4F9FD` | Section backgrounds             |
| `brand-gray`      | `#5D6D7E` | Body text, subtitles            |
| `phone`           | `#25D366` | Phone CTA buttons (green)       |
| `kakao`           | `#FEE500` | KakaoTalk button (yellow)       |

Utility classes in `globals.css`: `.btn-cta`, `.btn-cta-outline`, `.card`, `.price-table`, `.section-title`, `.section-subtitle`, `.floating-btn`.

### Business info — single source of truth is `src/lib/site.ts`

**Never hardcode business info in a page or component.** Import it from `@/lib/site`:

| Export                                                                 | Value / purpose                                          |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| `PHONE` / `PHONE_HREF` / `PHONE_INTL`                                  | `010-4894-5037` · `tel:01048945037` · `+82-10-4894-5037` |
| `KAKAO_URL` / `KAKAO_CHANNEL`                                          | 오픈채팅 링크 · 채널명                                   |
| `ADDRESS` + `ADDRESS_STREET`/`_LOCALITY`/`_REGION`/`POSTAL_CODE`/`GEO` | 표시용 전체 주소 · JSON-LD용 분할                        |
| `BIZ_NAME` / `OWNER_NAME` / `BIZ_REG_NO` / `BIZ_TAX_TYPE`              | OK살수 · 이준희 · 209-31-66281 · 일반과세자              |
| `SERVICE_AREAS`                                                        | 활동지역 배열 (표시 순서 그대로)                         |
| `HOURS` + `hoursLabel()`                                               | `{opens, closes}` 구조 — JSON-LD와 표시용 겸용           |
| `SITE_URL` / `siteUrl(path)`                                           | `https://ok살수.kr` — OG·JSON-LD 절대 URL                |
| `BASE_PATH` / `asset(path)`                                            | 정적 자산 경로 접두사                                    |

`asset()` is required for raw `<img src>` and `<link href>` — Next does **not** apply `basePath` to those.
`next/link` handles it automatically, so don't wrap those.

모든 문의(살수차·포크레인·조경건설)는 동일 번호로 수렴.
