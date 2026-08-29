# pirate-barber

Single-page barber-shop site for Max (Pirate Barber, Cove/Cache Valley Utah), live at
`piratebarber.vientapps.com`. Astro, rebuilt from the `sites-agency` template baseline. Remote is
`caden311/pirate-barber`.

## Deploy landmine (fix once, before the next deploy)

The Cloudflare Pages project for this site predates the Astro rebuild (the site used to be plain
HTML at the repo root). Its build settings must be updated ONCE in the Cloudflare dashboard, or the
next push-to-main deploy serves an empty site:

- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

Do NOT disconnect the Git integration; keep it. Once the three settings above are set, push-to-main
auto-deploys keep working exactly as before. See `HANDOFF.md` "Before this goes live".

## Where things live

- All copy: `src/data/site.json` (there is no CMS; edit the JSON).
- All visual design: `src/styles/global.css`.
- Adding photos later: drop files in `public/images/`, then wire `hero.image` / `about.image` /
  `gallery.images` in `src/data/site.json` (layouts switch on automatically). See `HANDOFF.md`.

## Commands

```bash
npm run dev        # astro dev
npm run build      # astro build -> dist/
npm run preview
npm run typecheck  # astro check
```

## Context

- No booking system: the page funnels to call/text only. If Max ever gets Square/Booksy, drop the
  URL into `contact.bookingUrl` and booking CTAs appear across the page automatically.
- `HANDOFF.md` is the client-facing handoff (open questions for Max, unverified facts to confirm
  before publishing, SEO reasoning, why there are no Instagram photos). Read it before changing copy
  or claims.

## Conventions

- Branch + PR; Caden merges by hand. Never push to main, never deploy.
- Never use em dashes in files or commits; use a comma, period, or rewrite.
