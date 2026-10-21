# Personal website notes and issue tracker

The private Obsidian Knowledge vault is the source of truth for project planning. The website repository is public, so keep private planning and unpublished career details in the vault.

## Note layout

- `Projects/Personal Website/Overview.md` is the project hub: goal, audience, settled decisions, and links to the other project notes.
- `Projects/Personal Website/Content.md` holds the current public-facing copy and page outline. `Knowledge/Career Profile.md` remains the source for career facts and publication boundaries.
- `Projects/Personal Website/Tracker.md` is the index of feature status and links to their specs and tickets.
- Each feature has `Projects/Personal Website/Features/<slug>/spec.md` and one or more numbered notes in `issues/`.
- `Projects/Personal Website/Research.md` holds background research, separate from active work tracking.

## Workflow

1. Before planning or implementing, read `Overview.md`, `Tracker.md`, and the relevant feature spec and ticket.
2. Update the existing note that owns a decision or status. Keep one canonical copy of each fact; use links elsewhere.
3. For new work, create one feature spec with a goal, scope, and acceptance criteria; create one small numbered ticket per independently executable task; link both from `Tracker.md`.
4. Keep ticket comments under `## Comments` in the ticket note.

Allowed `Work` values are `queued`, `in-progress`, `in-review`, `done`, and `cancelled`. `Status` is only for triage; use the labels and meanings in `docs/agents/triage-labels.md`. Start new tickets at `Status: needs-triage` and `Work: queued`. When work is accepted, remove `Status` and set `Work: in-progress`. When a PR opens, set `Work: in-review` and record its URL. After merge and verification, set `Work: done`; for rejected work, set `Work: cancelled`.

When a skill asks to publish or fetch a ticket, update or read the feature-specific Obsidian notes and the tracker index. `.scratch/` is ignored temporary workspace, not the project tracker or a source of truth.

## Wayfinding

If a wayfinding workflow is used, store its map at `Projects/Personal Website/Wayfinding/<effort>/map.md` and child tickets under that effort's `issues/` folder. Keep the map sections for Destination, Notes, Decisions so far, Not yet specified, and Out of scope. Number tickets, record blockers, claim before research, and mark resolved tickets with their answer and a context pointer in the map.
