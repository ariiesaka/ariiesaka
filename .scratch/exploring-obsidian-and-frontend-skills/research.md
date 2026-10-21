# Research: Obsidian and frontend skills

Reviewed 2026-10-21. Scope: how Obsidian could support learning/building this site, and a small set of Codex-compatible skills.

## Obsidian in this project

- An Obsidian vault is a folder on the computer; notes are ordinary Markdown text files, editable by other tools, and Obsidian refreshes when files change outside the app. Notes can link with either Obsidian wikilinks (**[[Note]]**) or Markdown links (**[Note](relative/path.md)**); backlinks show incoming references, and Graph view visualizes note links. [Data storage](https://obsidian.md/help/data-storage), [internal links](https://obsidian.md/help/links), [backlinks](https://obsidian.md/help/plugins/backlinks), [Graph view](https://obsidian.md/help/plugins/graph)
- That fits the repository's existing **.scratch/<feature>/spec.md** and numbered issue files: open the repository folder as a vault to browse the project notes, and add ordinary Markdown links between a spec, its tiny issues, and concept notes. Obsidian can be a reading/navigation layer; it does not require moving the tracker into a new format. The tracker conventions are documented in [docs/agents/issue-tracker.md](../../docs/agents/issue-tracker.md).
- Obsidian writes vault settings under a root **.obsidian/** folder, including preferences, themes, and community-plugin settings. Opening the repo as a vault may therefore create files that Git can see; decide later whether to ignore or intentionally track them. [Vault storage and settings](https://obsidian.md/help/data-storage)
- Privacy needs care because this repository is public: anyone on the internet can read committed repository files, and removing sensitive content from Git history takes coordinated cleanup. Keep private reflections, credentials, and personal contact details out of committed **.scratch** notes. [GitHub repository visibility](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories), [removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- Obsidian's privacy summary says desktop/mobile vault data stays on-device unless using services such as Sync or Publish; it also says the app may connect for updates, plugin/theme browsing, and embedded websites. The local vault itself is not encrypted. Sync has end-to-end and standard encryption choices; the cited security page says end-to-end is the default. These are Obsidian's own policy statements, not an independent audit of every plugin or sync provider; its policy says listed community plugins must disclose network use. [Privacy policy](https://obsidian.md/privacy), [Sync security](https://obsidian.md/help/Obsidian%20Sync/Security%20and%20privacy)

**Practical fit:** use the repo vault for non-sensitive project specs and short learning notes; keep private journaling in a separate local vault. Prefer standard Markdown links in committed notes for portability.

## Skills to consider

Codex supports folder-based skills with a **SKILL.md** and optional references/scripts; the open Agent Skills format is designed to be portable across compatible agents. [Codex skill docs](https://developers.openai.com/plugins/build/skills), [Agent Skills overview](https://agentskills.io/home)

| Skill | Why it fits | Availability here |
| --- | --- | --- |
| [Matt Pocock teach](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md) | Best match for the slow learning goal: it creates short, scoped lessons, practice loops, and learning records grounded in a stated mission. Its teaching workspace writes files relative to where it is invoked, so use a dedicated learning folder rather than the repository root. | The skill folder exists in the cached Matt Pocock 1.3.1 plugin, but it was not listed among skills surfaced to this session. Treat as unavailable until enabled/discovered; no third-party download appears necessary. |
| [Matt Pocock prototype](https://github.com/mattpocock/skills/tree/main/skills/engineering/prototype) | Already available in this session. Use it to explore one small layout or interaction as a throwaway prototype before changing the real site. It complements teaching but does not itself provide a paced curriculum. | Available now. |
| [PracticalSwan frontend-design](https://github.com/PracticalSwan/agent-skills/blob/main/frontend-design/SKILL.md) | Covers semantic HTML, WCAG 2.2 AA basics, responsive behavior, and checking the rendered result; the repository explicitly gives Codex setup guidance. It is implementation-oriented rather than a beginner lesson, so pair it with the teach workflow and ask for one explained change at a time. | Would need installation into Codex skills. The inspected file reports version 2.0, updated 2026-09-08, with MIT/Apache-2.0 licensing. |

A focused [web-accessibility skill](https://github.com/magnus919/agent-skills/blob/main/web-accessibility/SKILL.md) is another option for a later milestone involving navigation, forms, keyboard behavior, or screen readers; it is framework-neutral and MIT-licensed, but its detailed verification workflow is more than a first static page needs. It would need installation.

For a beginner-friendly source alongside a skill, MDN gives a sensible sequence: its HTML structure module says no prior HTML is needed, its CSS basics module expects HTML familiarity, and its responsive design guide builds on HTML and CSS basics. [HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content), [CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics), [responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

## Source and fit caveats

- The skills are community-authored instruction files, not formal frontend courses or guarantees of code quality. Recommendations above are based on their current repository content and stated Codex compatibility; review instructions before installing. Skill repositories may change.
- Obsidian's privacy page summary is the vendor's published policy; its linked detailed policy history includes a 2023 update. Verify the current policy before relying on it for sensitive data.
- The teach skill's folder is locally present but absent from this session's exposed skill list; its actual invocation/enablement status needs confirmation in Codex.



