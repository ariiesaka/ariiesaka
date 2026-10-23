---
name: ariiesaka.dev
description: A minimal, text-first professional profile for Judah Magaini.
colors:
  neutral-bg: "#111111"
  neutral-text: "#f5f5f5"
  neutral-muted: "#b8b8b8"
  link-underline: "#888888"
typography:
  display:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
spacing:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  text-link:
    textColor: "{colors.neutral-text}"
    padding: "0.6rem 0"
    minHeight: "44px"
---

# Design System: ariiesaka.dev

## Overview

**Creative North Star: “Quiet Editorial Profile”**

The page is a compact, candid professional introduction. Recruiters and fellow engineers should quickly recognize Judah Magaini, see his current and previous employers, and find a clear way to contact him.

**Key characteristics:**
- Text-first, single-column layout.
- Always-dark grayscale palette with high-contrast text.
- One compact introduction with a short employer-history sentence and a connection sentence.
- No standalone experience list, cards, or decorative company logos.

## Colors

- **Ink Black** (#111111): Page background.
- **Soft White** (#f5f5f5): Main text and headings.
- **Muted Gray** (#b8b8b8): Supporting text.
- **Underline Gray** (#888888): Resting link underline.
- The raising-hand emoji appears only as the favicon.

## Typography

Use IBM Plex Sans with a system sans-serif fallback. Keep hierarchy compact: 2rem bold for the name and 1rem regular for body text. Use weight and size, not decorative styling, for emphasis.

## Layout

Center a single reading column capped at 65ch with 1rem of inline page padding on desktop. Keep the name, employer history, and contact sentence in that order, with 2rem of space before the contact sentence. On narrow screens, align the content near the top and let text wrap naturally.

## Interaction

The LinkedIn and email links remain inline in the final sentence, with at least 44px of height for comfortable tapping, soft-white text, a muted resting underline, and a visible keyboard focus outline.

## Do and Don't

### Do
- Keep the content candid, short, and easy to scan.
- Preserve the dark, grayscale presentation.
- Keep links visibly interactive and keyboard accessible.

### Don't
- Add a separate Experience section, decorative imagery, colored interface accents, cards, or shadows without a new content need.
- Add extra navigation or page sections that repeat the introduction.
