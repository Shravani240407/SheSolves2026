# SheSolves 2026 — ACM-W PCCOE

Landing page for **SheSolves 2026**, a one-day ideathon / build event run by the
ACM-W Student Chapter at Pimpri Chinchwad College of Engineering (PCCOE) for
women in computing. The site introduces the event, lays out the schedule, and
drives registrations.

**Live sections:** Hero → About → Event Details → Schedule → Why Participate → Register → Footer

---

## Tech stack

Pure front-end, no build step or framework — open `index.html` and it runs.

| Layer      | Choice                                                        |
|------------|----------------------------------------------------------------|
| Markup     | Semantic HTML5                                                 |
| Styling    | Vanilla CSS3 (custom properties, Grid, Flexbox, media queries) |
| Behavior   | Vanilla JavaScript (ES6+, no dependencies)                      |
| Icons      | [Font Awesome 6.5.2](https://fontawesome.com/) (CDN)            |
| Fonts      | [Google Fonts](https://fonts.google.com/) (CDN) — see below      |

No package manager, bundler, or framework is used. Everything ships as three
static files plus the chapter logo.

### Fonts

| Role                       | Typeface          |
|-----------------------------|-------------------|
| Display / headings          | Space Grotesk     |
| Body copy                   | Inter             |
| Labels, eyebrows, code       | JetBrains Mono    |
| Handwritten accents          | Caveat            |

### Design system

The color palette is drawn directly from the ACM-W PCCOE logo:

| Token         | Hex       | Source                                  |
|---------------|-----------|------------------------------------------|
| `--cyan`      | `#0297CF` | "acm-w" wordmark / outer chevron          |
| `--blue`      | `#04609F` | "PCCOE" wordmark / inner chevron          |
| `--navy`      | `#06263D` | Darkened for text and dark sections       |
| `--paper`     | `#F5F9FC` | Page background                            |

The logo's diamond/chevron shape recurs as a lightweight motif — rotated-square
icon containers on the event detail cards, and diamond step-markers on the
schedule — instead of decorative circles or numbers.

---

## Project structure

```
.
├── index.html          # Page markup — all sections
├── style.css           # All styling, design tokens, responsive rules
├── script.js           # Mobile nav, registration modal, scroll reveal
├── acmw_new_logo.png   # ACM-W PCCOE chapter logo (used in nav, hero, footer, modal)
└── README.md
```

---

## Features

- **Responsive layout** — breakpoints for tablet (`≤1000px`), mobile
  (`≤700px`), and small mobile (`≤430px`).
- **Mobile navigation** — animated hamburger menu with icon toggle.
- **Horizontally scrollable schedule** — a day-long timeline with custom
  scrollbar styling.
- **Registration modal** — accessible dialog (`role="dialog"`,
  `aria-modal`, focus return on close, closes on `Escape` or outside click).
- **Scroll-reveal animation** — cards and panels fade/slide in via
  `IntersectionObserver`.
- **Accessibility & quality floor**:
  - Skip-to-content link
  - Visible `:focus-visible` states
  - `aria-expanded` on the mobile menu toggle
  - `prefers-reduced-motion` respected (disables non-essential animation)

---

## Running locally

No build tools needed.

```bash
# Just open it directly
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Or serve it (recommended, avoids any `file://` restrictions in some browsers):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Editing content

| To change...              | Edit...                                              |
|----------------------------|-------------------------------------------------------|
| Event date / time / venue  | `#details` section in `index.html`                    |
| Schedule items              | `#schedule` timeline events in `index.html`            |
| Colors / fonts / spacing    | CSS custom properties at the top of `style.css`        |
| Nav links, footer links     | `<nav>` and `<footer>` in `index.html`                  |
| Registration link behavior  | `registerBtn` handler in `script.js`                    |

---

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid,
custom properties, and `IntersectionObserver` — no polyfills included.

---

## Credits

Built for **ACM-W PCCOE** · SheSolves 2026 · `shesolves@acm-w.org`
