# Spec: First CSS rule

## Goal

Introduce one small styling step by connecting the page to a separate stylesheet and changing the page's font.

## Scope

- Link `styles.css` from the repository-root `index.html`.
- Set only the `body` font family to `system-ui, sans-serif`.
- Do not add colors, layout, other visual rules, JavaScript, dependencies, or a framework.

## Acceptance criteria

- The HTML links to `styles.css` using a relative path.
- The stylesheet contains one `body` rule with `font-family: system-ui, sans-serif`.
