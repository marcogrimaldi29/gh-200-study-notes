# Security Policy

GH-200 Study Notes is a static site built with Astro and published to GitHub Pages. It has no accounts and no sign-in,
and search builds its index in your browser from the site's own pages, so nothing you type in it is sent anywhere. The
only things the site stores are your light or dark theme choice and whether the sidebar is folded, both kept in your own
browser. Analytics are cookieless, through [Umami](https://umami.is/). The attack surface is small, but I'd still rather
hear about a security problem privately, before it's public.

---

## 🛡️ Supported Versions

There are no releases. Only what's live is maintained.

| Version | Supported |
| --- | --- |
| The live site at [marcogrimaldi29.com/gh-200-study-notes](https://marcogrimaldi29.com/gh-200-study-notes/) and the `main` branch | ✅ |
| Older commits, forks and copies hosted elsewhere | ❌ |

## 📮 Reporting a Vulnerability

**Please don't open a public issue or comment.** Report it privately through GitHub instead: open the repo's
**Security and quality** tab and choose **Report a vulnerability**, or go straight to the
[private report form](https://github.com/marcogrimaldi29/gh-200-study-notes/security/advisories/new). Only you and I can
see the report, and we can discuss and fix the problem there before anything is made public.

It helps to include:

- The affected URL, or the file in this repo
- What the problem is and what someone could do with it
- The steps to reproduce it, or a short proof of concept

Please don't put real secrets, tokens or anyone else's personal data in the report, and only test against things you
own.

If you can't use GitHub, send me a private message on [LinkedIn](https://www.linkedin.com/in/marco-grimaldi29/)
instead, starting it with **"Security: GH-200 Study Notes"** so it stands out.

## 🎯 Scope

**In scope:**

- The published site, including its pages, scripts and assets
- This repository's source code and its GitHub Actions workflow, for example a trigger or permission that would let
  untrusted code run with the repo's token
- A dependency version used here that has a known vulnerability

**Out of scope:**

- **GitHub itself**, including GitHub Actions, GitHub-hosted runners and GitHub Pages. Report these through
  [GitHub's bug bounty program](https://bounty.github.com/). For Microsoft Learn or another Microsoft product, use the
  [Microsoft Security Response Center](https://msrc.microsoft.com/create-report).
- **A vulnerability in Astro, Mermaid, Primer Octicons, or another dependency or action itself.** Report it to that
  project. If this repo uses an affected version, let me know as well.
- **HTTP response headers set by GitHub Pages.** The repo can't change them.
- **Automated scanner output** with no demonstrated impact on this site.
- **An insecure pattern in the notes**, such as a workflow sample that puts `${{ github.event.issue.title }}` straight
  into a `run:` script, or grants more `permissions` than it needs. That's a content issue, so it's welcome as a public
  issue. See the [contributing guide](CONTRIBUTING.md).

## ⏱️ What to Expect

I maintain this repo on my own, so responses are best effort. I'll confirm I've received your report, keep you updated
in the private report while I look into it, and tell you when it's fixed. If you'd like to be credited, say so and I'll
credit you in the security advisory or the fix.
