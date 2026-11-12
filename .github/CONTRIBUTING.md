# Contributing to GH-200 Study Notes

Thanks for helping keep these notes accurate. They cover **Exam GH-200: GitHub Actions**, and GitHub Actions moves
quickly: runner images roll forward, actions ship new majors, limits change and older syntax is retired, sometimes
between one revision of the study guide and the next. Reports from people studying with the notes are how I catch it.

> [!IMPORTANT]
> **This repo takes issues, not pull requests.** Pull requests are turned off: I write every change myself and check it
> against the GitHub documentation, so the notes keep one voice and every page stays consistent with the others. If you
> know exactly how something should read, put your proposed wording in the issue. It's just as useful.

---

## Contents

- [Ways to Help](#-ways-to-help)
- [Before You Open an Issue](#-before-you-open-an-issue)
- [Opening an Issue](#-opening-an-issue)
- [Out of Scope](#-out-of-scope)
- [What Happens Next](#-what-happens-next)
- [Code of Conduct](#-code-of-conduct)
- [Security](#-security)

## 🙌 Ways to Help

Every report fits one of the five types in the issue template:

| Type | What it covers | For example |
| --- | --- | --- |
| **Content error** | Text, a table, a callout, a diagram or a code sample is wrong | A workflow sample reads a context where it isn't available, such as `secrets` in a job-level `if:`, or a run graph draws the `needs` order wrong |
| **Outdated or renamed** | The product has changed since the page was written | A runner label now points to a newer image, a sample pins an action to a major that no longer runs, or a limit or retention default has changed |
| **Exam coverage** | The notes don't match the official study guide | The study guide was revised after January 2026, or it lists a skill the notes don't cover |
| **Site bug** | Search, navigation, the theme switcher, diagrams, layout, a broken link or accessibility | Search doesn't find `GITHUB_OUTPUT`, a log group won't fold, a run graph doesn't redraw in dark mode, or a table overflows on a phone |
| **Suggestion** | Something could be clearer or easier to study | A topic that would read better as a decision tree, a new row for the scenario-to-answer table, or another exam caveat |

## 🔎 Before You Open an Issue

- **Search the existing issues**,
  [open and closed](https://github.com/marcogrimaldi29/gh-200-study-notes/issues?q=is%3Aissue). If yours is already
  there, add a 👍 reaction, or a comment if you have something new, instead of opening a duplicate.
- **Check the date.** The notes are written against the **GH-200 skills measured as of January 2026**. If the
  "Skills measured as of" heading in the
  [study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200) shows a
  newer date, say so in the issue, and glance at the guide's **Change log** section for what moved. It tells me which
  revision to compare against.
- **Check the current docs.** The [GitHub Actions documentation](https://docs.github.com/en/actions) and the
  [GitHub Changelog](https://github.blog/changelog/label/actions/) usually confirm whether something has changed, and
  give you the source the issue asks for.
- **One problem per issue.** Separate issues are easier to track, fix and close. Several typos on the same page can
  share one.
- **For a site bug, hard-refresh first** (Ctrl+F5, or Cmd+Shift+R on a Mac) in case your browser is showing an older
  copy of the page.

## 📝 Opening an Issue

1. Open a new issue with the
   [🐞 Report an Issue](https://github.com/marcogrimaldi29/gh-200-study-notes/issues/new?template=ISSUE_TEMPLATE.md)
   template.
2. Give it a title that names the page and the problem, for example *"Skill 1: matrix section gives the wrong job
   limit"* rather than *"Mistake in the notes"*.
3. Fill in the template's sections, and skip any that don't apply.

> [!TIP]
> To link straight to a section, click it in **On this page**, then copy the address from your browser's address bar.

### What Makes a Report Easy to Fix

- **A link to the exact section**, not just the page
- **The text as the notes have it**, quoted, so I can find it even after the page has changed
- **An official source** for any content change. The GitHub Docs are best, followed by the study guide and the GitHub
  Changelog. A report without one may take longer, because every change is checked against the documentation before it
  goes in
- **For a workflow or action sample:** the key or line that's wrong and, if you ran it, the error or log line you got
- **For site bugs:** the steps to reproduce it, what you expected and what happened instead, your browser and device,
  and a screenshot if it shows the problem
- **Your proposed wording**, if you have it. With pull requests turned off, it's the closest thing to suggesting an edit
  directly

## 🚫 Out of Scope

To keep the notes accurate and the issue tracker useful, please don't open issues for:

- **Live exam content.** Questions, answers or topics remembered from a real GH-200 exam break
  [Microsoft's exam security policy](https://learn.microsoft.com/en-us/credentials/support/exam-and-assessment-lab-security-policies).
  Issues or comments that include them will be closed and the content removed.
- **Exam booking, scores or retakes.**
  [Microsoft Credentials support](https://learn.microsoft.com/en-us/credentials/support/help) handles those.
- **Help with your own workflows, runners or organisation.** For a run that fails in your own repo, a self-hosted runner
  that won't connect, or a billing or minutes question, ask in
  [GitHub Community Discussions](https://github.com/orgs/community/discussions/categories/actions) or contact
  [GitHub Support](https://support.github.com/).
- **Anything private.** Issues are public, so leave out tokens, secrets, tenant IDs and customer details, including in
  screenshots. Check any log you paste: Actions masks only values it knows are secret.
- **Unofficial sources.** Exam dump sites, practice-test sites and AI chat answers aren't accepted as the source for a
  content change.
- **Promotion.** Requests to feature a Marketplace action, a course, a product or a service, affiliate links and paid
  placements won't be added.
- **Security vulnerabilities.** Please
  [report these privately](https://github.com/marcogrimaldi29/gh-200-study-notes/security/advisories/new), as the
  [security policy](SECURITY.md) describes, not in a public issue.

## 🔄 What Happens Next

- I maintain the notes on my own, in my spare time, so replies are best effort and there's no fixed response time.
- I check each report against the official documentation. If I need more detail, I'll ask on the issue, so keep an eye
  on your GitHub notifications.
- When a fix goes in, I close the issue with a note on what changed or a link to the commit. The live site updates
  shortly after.
- If nothing changes, I close the issue with the reason, such as out of scope, can't be verified, or working as
  intended.
- An issue waiting on a reply may be closed after a while. Add the missing details in a comment and it can be reopened.

## 🤝 Code of Conduct

By opening, commenting on or reacting to issues here, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
Comments that are abusive, spam or share live exam content may be hidden, edited or locked.

## 🔒 Security

Found a security problem with the site or this repo? Please don't open a public issue. Use
[Report a vulnerability](https://github.com/marcogrimaldi29/gh-200-study-notes/security/advisories/new) instead, so only
you and I can see it. The [security policy](SECURITY.md) has the details.

---

If the notes helped you, the README's
[🤝 Let's Connect](https://github.com/marcogrimaldi29/gh-200-study-notes#-lets-connect) section has where to find me and
more study notes. Thanks for helping make them better for the next GH-200 candidate.
