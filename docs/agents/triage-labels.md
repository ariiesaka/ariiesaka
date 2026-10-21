# Triage Labels

The skills speak in terms of five canonical triage roles. This file maps those roles to the `Status` values used in the private Obsidian tracker for this project.

| Label in mattpocock/skills | Label in our tracker | Meaning |
| --- | --- | --- |
| `needs-triage` | `needs-triage` | Maintainer needs to evaluate this issue |
| `needs-info` | `needs-info` | Waiting on reporter for more information |
| `ready-for-agent` | `ready-for-agent` | Fully specified, ready for an AFK agent |
| `ready-for-human` | `ready-for-human` | Requires human implementation |
| `wontfix` | `wontfix` | Will not be actioned |

When a skill mentions a role (e.g. "apply the AFK-ready triage label"), use the corresponding label string from this table.

`Status` records triage routing, not implementation progress. Remove it when work is accepted and track implementation in `Work`. For an issue, `ready-for-human` means a human must implement it; when triaging a pull request, it means the PR is ready for human review or merge.
