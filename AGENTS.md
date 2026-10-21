## Agent skills

### Issue tracker

Issues and specs live as Markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context documentation uses root `GLOSSARY.md` and `docs/adr/`. See `docs/agents/domain.md`.

## Branch and pull request workflow

- Make each change on a short-lived feature branch.
- Open a pull request for every change targeting the repository's default branch (`main` or `master`).
- Never commit to or push directly to `main` or `master`; merge changes only through their pull request.
