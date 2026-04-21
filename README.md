# Lakeland Hills Dental — Redesign

Modern single-page redesign mockup for Lakeland Hills Dental (Dr. Joe Jankowski, DMD) in Fairview Heights, IL.

## Quick start

Just open `index.html` in a browser. No build step, no dependencies.

```bash
# Or serve locally with any static server:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Stack

- Plain HTML + CSS (no framework)
- Google Fonts: Inter (sans) + Fraunces (serif italic accents)
- Inline SVG for all icons and illustrations — no image dependencies
- Fully responsive (breakpoints at 900px and 600px)

## Structure

The whole site is a single `index.html` file with CSS in the `<head>`. Sections are clearly commented:

- Top contact bar (phone + address)
- Sticky nav
- Hero (illustrated tooth with floating service pills)
- Stats strip
- Services grid
- About / Dr. Jankowski
- Insurance & financing
- Testimonials
- Contact form
- Footer

## Known placeholders / TODOs

- [ ] **Dr. Jankowski headshot** — currently a styled "JJ" avatar with a `[ DR. JANKOWSKI HEADSHOT ]` label. Replace with real photo in `.doc-portrait` section.
- [ ] **Office photos** — site is currently photo-free by design. Consider adding office interior/exterior photos, possibly as a gallery section or hero background swap.
- [ ] **Testimonials are placeholder** — the three reviews use fabricated names (M. Reynolds, T. Sullivan, K. Harmon). Replace with real Google/Facebook reviews before going live.
- [ ] **Office hours are guessed** (Mon–Fri 8–5, Sat by appt). Confirm with Dr. Jankowski.
- [ ] **Contact form is a demo** — submission triggers an alert. Wire it up to a real backend, Formspree, Netlify Forms, or similar.
- [ ] **Staff section missing** — original site has a "Meet Our Staff" page. Add if desired.
- [ ] **SEO meta tags** — basic `<title>` and `<meta description>` are set. Consider adding OpenGraph tags for social sharing and schema.org LocalBusiness markup for local SEO.
- [ ] **Favicon** — not yet added.

## CSS variables (theme)

All colors live as CSS variables in `:root`. To rebrand, edit these:

```css
--navy-darkest: #051A33;
--navy-dark: #0C3260;
--navy: #185FA5;
--blue: #378ADD;
--blue-light: #7BB8F0;
--blue-pale: #E6F1FB;
--surface: #F4F7FB;
--border: #D8E4EF;
```

## Deployment

Drop the file on any static host:

- **Netlify / Vercel**: drag the folder in, done
- **GitHub Pages**: push to `main`, enable Pages, done
- **Cloudflare Pages**: same
- The site is a single HTML file, so literally any hosting works

## Content source

Content pulled from [lakelandhillsdental.com](https://lakelandhillsdental.com/) and restructured for the modern layout. The copy has been lightly rewritten for voice and flow — compare to the original if you want to preserve specific phrasing.

## Original contact info

- **Phone**: (618) 222-1942
- **Fax**: (618) 222-2819
- **Email**: lakelandhillsdental@live.com
- **Address**: 5011 N. Illinois Street, Suite 1, Fairview Heights, IL 62208
- **Facebook**: https://www.facebook.com/lakelandhillsdental
