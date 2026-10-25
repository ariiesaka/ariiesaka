---
name: ariiesaka.dev
description: A minimal, text-first professional profile for Judah Magaini.
colors:
  ink: "#253532"
  paper: "#ebe8d8"
  muted: "color-mix(in oklab, fg 64%, bg)"
  faint: "color-mix(in oklab, fg 30%, bg)"
  wash: "color-mix(in oklab, fg 7%, bg)"
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
motion:
  ease-out: "cubic-bezier(0.23, 1, 0.32, 1)"
  ease-in-out: "cubic-bezier(0.77, 0, 0.175, 1)"
---

# Design System: ariiesaka.dev

## Overview

**Creative North Star: “Quiet Editorial Profile”**

The page is a compact, candid professional introduction. Recruiters and fellow engineers should quickly recognize Judah Magaini, see his current and previous employers, and find a clear way to contact him. Small, satisfying details reward people who poke at it, without getting in the way of reading.

**Key characteristics:**
- Text-first, single-column layout.
- Two-color palette: green (ink) by default, with a paper theme one click away.
- Name, employer sentence, one side project (kana), and a contact sentence.
- No cards, sections, or decorative imagery beyond the favicon hand next to the name.

## Colors

- **Ink** (#253532): default background; text color in the paper theme.
- **Paper** (#ebe8d8): default text color; background in the paper theme.
- **Muted / faint / wash**: `color-mix` of the text color into the background (64%, 30%, 7%) for supporting text, resting underlines and hover fills.
- The theme toggle (top right) swaps ink and paper with a circular wipe from the button and remembers the choice.

## Typography

IBM Plex Sans with a system sans-serif fallback, weights 400 and 700 only. 2rem bold for the name, 1rem regular for body text. Keep copy lowercase except brand names.

## Layout

Center a single reading column capped at 34rem. Order: name, employer sentence, side project sentence, contact sentence. On narrow screens, align content near the top.

## Links and controls

- Links are inline with a faint resting underline that strengthens on hover, and a visible focus outline.
- The kana link shows the kana icon on hover (mouse only). The icon grows out of the link, trails the pointer below-right so it never covers the name, and returns into the link in exact reverse.
- The hand next to the name slides left behind it on hover (back on leave) or on tap (back after ~2s).
- The copy button after the email link turns into a drawn check with a "copied" tooltip.

## Motion

- Strong ease-out for entrances and presses; ease-in-out for things moving on screen.
- Presses scale to 0.92–0.97; UI transitions stay under 300ms; the first-load reveal is a 70ms stagger.
- Only transform, opacity, filter and clip-path animate. Hover effects are gated to fine pointers. Reduced motion keeps fades only.

## Do and Don't

### Do
- Keep the content candid, short, and easy to scan.
- Keep the two-color palette and lowercase copy.
- Keep links visibly interactive and keyboard accessible.

### Don't
- Add a separate experience section, cards, extra colors, or shadows beyond the kana icon.
- Add navigation or sections that repeat the introduction.
- Add libraries or frameworks; the site is plain HTML, CSS and one small script.
