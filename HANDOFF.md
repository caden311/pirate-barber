# Pirate Barber — handoff

The site was rebuilt from the `sites-agency` Astro baseline. All copy lives in
`src/data/site.json`; all visual design lives in `src/styles/global.css`.

## Before this goes live

**Cloudflare Pages needs a build command.** The site is no longer plain HTML at
the repo root, so the existing Pages project must be updated once:

- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

Push-to-main deploys keep working exactly as before after that change. Without
it the next deploy will serve an empty site.

## Confirm with Max before publishing

These are on the page but could not be verified from a second public source.

| Item | On the site | Why it needs confirming |
| --- | --- | --- |
| Phone (435) 764-5900 | Yes, it is the only CTA | Only the old site and his Google profile carry it, and they share an author. Everything on this page routes through it. |
| Prices $35 / $20 / $20 | Yes | Single-sourced from the old site. Boneyard in Logan charges $30-50 for a cut, so $35 is low-mid market. |
| Hours | Yes | Old site and Google profile agree, but they are not independent sources. |
| "Cove, Utah" as the location | City only, no street address | 392 Cannibal Rd is a rural residential parcel and his Google profile deliberately hides the street address. The site says "exact address sent when you book" and the schema is service-area, so no home address is published. Decide with him whether to publish it. |
| Beard trim | **Not on the site** | Missing from the old menu entirely. Every Cache Valley competitor sells one and it is the standard upsell. Worth asking. |
| Years cutting | **Not on the site** | No verifiable start date exists. His Instagram starts March 2022 with #careersinthemaking, but do not put a number on the page without asking. |

## Decisions made, and why

- **Local SEO targets Logan and Cache Valley, not Cove.** Cove has a few hundred
  residents and effectively no search volume; all the demand and all the
  competitor listings are Logan-anchored. Cove appears in the address block and
  the FAQ, Logan and Cache Valley carry the title, meta, and H1 subhead.
- **No Instagram photos.** Every usable photo on @pirate.barber is shot inside
  Boneyard Barbering with Boneyard-branded capes legible in frame, and he is not
  on Boneyard's current 11-barber roster. Using them would advertise his former
  shop. The design is built to work image-free and to improve immediately when
  real photos arrive.
- **One review, attributed.** The Google profile has exactly one review and it is
  yours. It is on the page, verbatim, credited to you as a Google review. No
  `aggregateRating` schema is emitted: a single self-authored review is not
  worth the review-spam risk.
- **No booking system.** There is none to link to. The whole page funnels to call
  and text instead, and the FAQ says so plainly.

## Adding photos later

1. Drop files into `public/images/`.
2. In `src/data/site.json`:
   - `hero.image` + `hero.imageAlt` for a hero shot (the layout switches to a
     photo background automatically).
   - `about.image` + `about.imageAlt` for a portrait of Max (About switches to a
     two-column layout with the photo).
   - `gallery.images` as `{ "src": "/images/x.jpg", "alt": "..." }` to turn on
     the work section, which is hidden while the list is empty.

Ask him for 6-8 phone photos: finished cuts from a few angles, one of him, one
of the space. Descriptive `alt` text on each, it is the only image SEO here.

## Biggest wins available

1. **Get more Google reviews.** One review against The Shaky Razor's 251 and
   Z'z Barber Lounge's 257 is the single largest gap. Nothing on the site moves
   the needle as much as asking every client for one.
2. **Claim and fill the Google Business Profile.** Name, phone, hours, and
   service area must match this site exactly. It outranks the website for local
   search.
3. **A booking link.** Square or Booksy would let the site convert at 11pm
   instead of waiting for Max to see a text. Drop the URL into
   `contact.bookingUrl` and booking CTAs appear across the page automatically.
4. **Reactivate the Instagram.** Dormant since October 2023, and the link in bio
   is dead (Boneyard's old Fresha booking page, returns 410). Point it at
   piratebarber.vientapps.com.
