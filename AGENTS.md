## Agent skills

### Issue tracker

Issues and specs live as Markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context documentation uses root `GLOSSARY.md` and `docs/adr/`. See `docs/agents/domain.md`.

## Branch and pull request workflow

- Work in the main checkout on a short-lived local feature branch; do not use Git worktrees.
- Keep changes local until the user explicitly asks you to push and create a pull request.
- After that request, push only the feature branch and open a pull request targeting the repository's default branch (`main` or `master`).
- Never commit to or push directly to `main` or `master`; merge changes only through their pull request.
