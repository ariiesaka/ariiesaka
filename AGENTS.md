## Agent skills

### Project notes and issue tracker

Project decisions, approved website copy, research, specs, and tickets live in the local Obsidian vault. Before planning or implementing website work, read `docs/agents/issue-tracker.md` for the canonical note locations and workflow. Keep private planning and unpublished career details in the vault.

### Triage labels

Use `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context documentation uses root `GLOSSARY.md` and `docs/adr/`. See `docs/agents/domain.md`.

## Branch and pull request workflow

- Work in the main checkout on a short-lived local feature branch; do not use Git worktrees.
- Keep changes local until the user explicitly asks you to push and create a pull request.
- After that request, push only the feature branch and open a pull request targeting the repository's default branch (`main` or `master`).
- For every UI change, include real browser screenshots of the before and after states in the pull request description. Include a mobile screenshot when the change affects responsive behavior.
- Never commit to or push directly to `main` or `master`; merge changes only through their pull request.
