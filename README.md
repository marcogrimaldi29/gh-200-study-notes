# ⚙️ GH-200 Study Notes

**📖 Read them at [marcogrimaldi29.com/gh-200-study-notes](https://marcogrimaldi29.com/gh-200-study-notes/)** — and if they
help, ⭐ **star this repository** so other candidates can find them too.

Exam-focused study notes for **Exam GH-200: GitHub Actions**, the exam behind the *GitHub Actions* certification. They
teach you to write, read, debug, package, govern and secure workflows — and to tell what a run will do before it
starts — with run graphs, real workflow and action samples, log walk-throughs and exam caveats on every page.

📅 Written against the **GH-200 skills measured as of January 2026**.

---

## 📚 What's Inside

| Page | Covers | Exam Weight |
| --- | --- | --- |
| [Actions Foundations](https://marcogrimaldi29.com/gh-200-study-notes/actions-foundations/) | Events, workflows, jobs, steps, runners and actions, where each file lives, when each part is evaluated, the Actions tab, and the renames and retired syntax you will meet | Prerequisite |
| [Skill 1 · Author Workflows](https://marcogrimaldi29.com/gh-200-study-notes/skill-1-author-workflows/) | Triggers and typed inputs, reusable workflows, conditions, `needs`, service containers, matrices, YAML anchors, contexts and expressions, caching, artifacts, outputs, job summaries and environment protections | 20–25% |
| [Skill 2 · Consume Workflows](https://marcogrimaldi29.com/gh-200-study-notes/skill-2-consume-troubleshoot/) | Reading triggers and logs, diagnosing failed runs, debug logging, matrix variants and re-runs, logs and artifacts in the UI and API, workflow templates, disabling versus deleting | 15–20% |
| [Skill 3 · Author Actions](https://marcogrimaldi29.com/gh-200-study-notes/skill-3-author-actions/) | JavaScript, Docker and composite actions, `action.yml`, the toolkit and workflow commands, troubleshooting, the Marketplace, versioning, and what replaced immutable actions | 15–20% |
| [Skill 4 · Manage Enterprise](https://marcogrimaldi29.com/gh-200-study-notes/skill-4-enterprise/) | Reusable components, access to private actions, organisation policies, GitHub-hosted, larger and self-hosted runners, runner groups, networking, preinstalled software, secrets and variables | 20–25% |
| [Skill 5 · Secure & Optimize](https://marcogrimaldi29.com/gh-200-study-notes/skill-5-secure-optimize/) | Approval gates, trustworthy actions, script injection, `GITHUB_TOKEN` permissions, OIDC federation, SHA pinning and lockfiles, artifact attestations, and cutting minutes and storage | 10–15% |
| [Syntax Reference](https://marcogrimaldi29.com/gh-200-study-notes/syntax-reference/) | Every workflow, job and step key, context availability, expression functions, workflow commands, environment files, default variables, shells and `action.yml` | Deep dive |
| [Exam Tips & Caveats](https://marcogrimaldi29.com/gh-200-study-notes/exam-tips/) | Key numbers, where the study guide, Learn and the docs disagree, commonly mistaken topics, decision trees, a scenario-to-answer table and a pre-exam checklist | Final review |

## ✨ Reading Experience

- **Site-wide search** (<kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>K</kbd> or <kbd>/</kbd>) that finds workflow syntax exactly as you type it — `workflow_dispatch`, `GITHUB_OUTPUT`, `::add-mask::` — and jumps straight to the section that explains it
- **Pages that read like the Actions tab**: run graphs for job dependencies, job logs with folding groups and annotations, workflow files with their paths, and `${{ }}` expressions highlighted the way GitHub's editor does
- **Two-rail navigation** — the page list on the left, and an **On this page** outline on the right that follows you as you scroll
- **Light and dark mode**, switched by the sunrise brand mark that rises into a full sun
- Designed for phones, tablets and laptops alike, with keyboard and screen-reader support

## 🤖 A Note on AI

These notes were researched and written **with the help of AI — [Claude](https://claude.com/claude-code)**, Anthropic's
assistant, working from the official GH-200 study guide, the GH-200T00-A course and its Microsoft Learn modules, the
GitHub Actions documentation and the GitHub Changelog. Every page was reviewed before publication, but AI-assisted
writing can still get details wrong, and GitHub Actions changes quickly. Treat these notes as a study companion and
verify anything decision-critical against the [official documentation](https://docs.github.com/en/actions).

## 🐞 Spotted a Mistake?

GitHub Actions ships changes every few weeks — new runner images, new action majors, new limits — so if something here
is wrong or out of date, please [report an issue](https://github.com/marcogrimaldi29/gh-200-study-notes/issues).

## ⚠️ Disclaimer

These notes are an independent study aid for **learning purposes only**. They are not affiliated with or endorsed by
GitHub or Microsoft. Always verify against the
[official GH-200 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200)
and the [GitHub Actions documentation](https://docs.github.com/en/actions) before relying on any detail here.

## 🤝 Let's Connect

<p align="center">
  <a href="https://marcogrimaldi29.com/"><img src="https://img.shields.io/badge/marcogrimaldi29.com-0b1422?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjUiIHkxPSIxNiIgeDI9IjI3IiB5Mj0iMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiOTUwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzJlYzVjNSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDQ5M2Y4IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM%2BCiAgPGcgc3Ryb2tlPSJ1cmwoI2cpIiBzdHJva2Utd2lkdGg9IjEuOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjEwLjUiIHgyPSIxNiIgeTI9IjcuNSIgLz4KICAgIDxsaW5lIHgxPSIxMC4yIiB5MT0iMTIuNiIgeDI9IjguNCIgeTI9IjEwLjgiIC8%2BCiAgICA8bGluZSB4MT0iMjEuOCIgeTE9IjEyLjYiIHgyPSIyMy42IiB5Mj0iMTAuOCIgLz4KICA8L2c%2BCiAgPHBhdGggZD0iTTguNSAyMCBhNy41IDcuNSAwIDAgMSAxNSAwIHoiIGZpbGw9InVybCgjZykiIC8%2BCiAgPGxpbmUgeDE9IjQuNSIgeTE9IjIwIiB4Mj0iMjcuNSIgeTI9IjIwIiBzdHJva2U9IiMyZWM1YzUiIHN0cm9rZS13aWR0aD0iMS45IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8%2BCjwvc3ZnPgo%3D&logoColor=white" alt="marcogrimaldi29.com" /></a>
  <a href="https://github.com/marcogrimaldi29"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/marco-grimaldi29/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2EyLjA2MiAyLjA2MiAwIDAgMS0yLjA2My0yLjA2NSAyLjA2NCAyLjA2NCAwIDEgMSAyLjA2MyAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyNSAweiIvPjwvc3ZnPg%3D%3D" alt="LinkedIn" /></a>
</p>

Maintained by **Marco Grimaldi**, Cloud Solution Architect. Find more study notes and certification reviews at
**[marcogrimaldi29.com](https://marcogrimaldi29.com/)**, or reach out through my
**[contact page](https://marcogrimaldi29.com/contact/)**.
