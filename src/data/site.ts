/**
 * Single source of truth for the site's identity and page registry.
 *
 * Everything that needs to know "which pages exist and in what order" reads
 * from here: the foldable sidebar, the footer, the prev/next pager, the search
 * index seed, the run-summary strip under each page title and
 * src/pages/sitemap.xml.ts. Site-wide strings — the name, the exam, the
 * skills-measured revision, the repository, the official links, the storage
 * prefix — live here too, so no component has them typed in by hand.
 *
 * Adding a page is one entry in PAGES plus one file in src/pages/.
 */

const EXAM = 'GH-200';
const REPO_NAME = 'gh-200-study-notes';
const OWNER = 'marcogrimaldi29';

export const SITE = {
  /** The wordmark. Shown in full at every width — never abbreviated. */
  name: `${EXAM} Study Notes`,
  exam: EXAM,
  examTitle: 'GitHub Actions',
  certification: 'GitHub Actions',
  course: 'GH-200T00-A',
  courseTitle: 'Automate your workflow with GitHub Actions',
  /** The skills-measured revision these notes are written against. */
  skillsMeasured: 'January 2026',
  /** When the moving targets (runner images, Node runtime, immutable actions…) were last checked. */
  checked: '5 November 2026',
  origin: 'https://marcogrimaldi29.com',
  /** Also the base path the site is served under (see astro.config.mjs). */
  repoName: REPO_NAME,
  repo: `https://github.com/${OWNER}/${REPO_NAME}`,
  issues: `https://github.com/${OWNER}/${REPO_NAME}/issues`,
  /** Prefix for localStorage keys and custom DOM events. */
  storagePrefix: 'gh200',
  /** The exam's own facts, from the certification page — shown in "Exam at a glance". */
  facts: {
    minutes: 100,
    passing: 700,
    validity: '2 yrs',
    retake: '24 h',
  },
  /** Labels in the home page hero. */
  heroLabels: [
    { text: 'Intermediate Level', color: 'blue' },
    { text: 'GitHub Actions', color: 'green' },
    { text: 'CI/CD', color: 'cyan' },
    { text: 'Workflows · Actions · Runners', color: 'orange' },
  ],
  /** Tokens for the faint "code rain" background: workflow syntax a candidate must recognise. */
  codeRain: [
    'on: push', 'workflow_dispatch', 'runs-on', 'needs:', 'matrix', 'uses:', '${{ github.ref }}', 'GITHUB_TOKEN',
    'GITHUB_OUTPUT', 'permissions:', 'id-token: write', 'workflow_call', 'jobs:', 'steps:', 'if:', 'env:',
    'secrets.', 'vars.', 'concurrency', 'environment:', 'services:', 'strategy:', 'fail-fast', 'GITHUB_ENV',
    'GITHUB_STEP_SUMMARY', '::add-mask::', '::group::', 'action.yml', 'runs.using', 'node24', 'composite',
    'actions/checkout@v7', 'cron', 'pull_request', 'schedule:', 'timeout-minutes', '&defaults', '*defaults',
  ],
  author: {
    name: 'Marco Grimaldi',
    role: 'Cloud Solution Architect',
    site: 'https://marcogrimaldi29.com/',
    github: `https://github.com/${OWNER}`,
    linkedin: 'https://www.linkedin.com/in/marco-grimaldi29/',
  },
  /** Official material, listed in the footer and linked from the home page. */
  resources: [
    { label: 'GH-200 study guide', href: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200' },
    { label: 'Certification page', href: 'https://learn.microsoft.com/en-us/credentials/certifications/github-actions/' },
    { label: 'Course GH-200T00-A', href: 'https://learn.microsoft.com/en-us/training/courses/gh-200t00' },
    { label: 'Learning path, part 1', href: 'https://learn.microsoft.com/en-us/training/paths/github-actions/' },
    { label: 'Learning path, part 2', href: 'https://learn.microsoft.com/en-us/training/paths/github-actions-2/' },
    { label: 'GitHub Actions docs', href: 'https://docs.github.com/en/actions' },
    { label: 'REST API for Actions', href: 'https://docs.github.com/en/rest/actions' },
    { label: 'actions/runner-images', href: 'https://github.com/actions/runner-images' },
    { label: 'GitHub Changelog', href: 'https://github.blog/changelog/label/actions/' },
    { label: 'Exam sandbox', href: 'https://ghcertdemo.starttest.com/' },
  ],
} as const;

export type PageGroup = 'start' | 'skills' | 'extras';

export interface NotePage {
  /** URL segment; '' is the home page. */
  slug: string;
  /** Full label — the study-guide name for skill pages. Used in the footer, the pager and search results. */
  label: string;
  /**
   * Condensed label for the sidebar. Carries neither the skill number nor the
   * weighting: the Counter beside it already shows the weighting, so repeating
   * either in the name reads as a duplicate.
   */
  navLabel: string;
  /** Octicon shown beside the label in the rail, alone in the folded rail, and on cards. */
  icon: string;
  /** Skill number in the official outline, for the skill pages only. */
  skill?: number;
  /** Role of a non-skill page, shown in its run-summary strip and on its card. */
  badge: string;
  /** CSS custom property holding this page's accent colour. */
  accent: string;
  /** Card / meta description. */
  blurb: string;
  group: PageGroup;
  /** Exam weighting, for the skill pages only. */
  weight?: string;
  /** Mid-point of the weighting range, used to size the progress bars. */
  weightPct?: number;
}

export const PAGES: NotePage[] = [
  {
    slug: '',
    label: 'Home',
    navLabel: 'Home',
    icon: 'home',
    badge: 'Overview',
    accent: 'var(--s0)',
    blurb: 'Exam overview, skills weighting and how to use these notes.',
    group: 'start',
  },
  {
    slug: 'actions-foundations',
    label: 'Actions Foundations',
    navLabel: 'Foundations',
    icon: 'book',
    badge: 'Prerequisite',
    accent: 'var(--s0)',
    blurb:
      'The mental model every question hangs off: events, workflows, jobs, steps, runners and actions, where each file lives, what a run looks like in the Actions tab, and the renames you will meet in older material.',
    group: 'start',
  },
  {
    slug: 'skill-1-author-workflows',
    label: 'Author and manage workflows',
    navLabel: 'Author workflows',
    icon: 'workflow',
    skill: 1,
    badge: 'Skill 1',
    accent: 'var(--s1)',
    blurb:
      'Triggers and inputs, jobs and conditions, needs, service containers, matrices, YAML anchors, contexts and expressions, caching, artifacts, outputs, environment files, job summaries, badges and environment protections.',
    group: 'skills',
    weight: '20–25%',
    weightPct: 22.5,
  },
  {
    slug: 'skill-2-consume-troubleshoot',
    label: 'Consume and troubleshoot workflows',
    navLabel: 'Consume workflows',
    icon: 'bug',
    skill: 2,
    badge: 'Skill 2',
    accent: 'var(--s2)',
    blurb:
      'Reading triggers from configuration and logs, diagnosing failed runs, expanding anchors, matrix variants and re-runs, logs and artifacts in the UI and API, workflow templates against reusable workflows and composite actions, disabling and deleting.',
    group: 'skills',
    weight: '15–20%',
    weightPct: 17.5,
  },
  {
    slug: 'skill-3-author-actions',
    label: 'Author and maintain actions',
    navLabel: 'Author actions',
    icon: 'package',
    skill: 3,
    badge: 'Skill 3',
    accent: 'var(--s3)',
    blurb:
      'JavaScript, Docker container and composite actions, action.yml metadata and directory layout, workflow commands inside actions, troubleshooting, distribution models, publishing to the Marketplace and release strategies.',
    group: 'skills',
    weight: '15–20%',
    weightPct: 17.5,
  },
  {
    slug: 'skill-4-enterprise',
    label: 'Manage GitHub Actions for the enterprise',
    navLabel: 'Manage enterprise',
    icon: 'organization',
    skill: 4,
    badge: 'Skill 4',
    accent: 'var(--s4)',
    blurb:
      'Reusable components and templates, access to actions and workflows, use policies, GitHub-hosted and self-hosted runners, runner groups, networking and IP allow lists, preinstalled software, and secrets and variables at every level.',
    group: 'skills',
    weight: '20–25%',
    weightPct: 22.5,
  },
  {
    slug: 'skill-5-secure-optimize',
    label: 'Secure and optimize automation',
    navLabel: 'Secure & optimize',
    icon: 'shield-lock',
    skill: 5,
    badge: 'Skill 5',
    accent: 'var(--s5)',
    blurb:
      'Environment gates, trustworthy actions, script injection, GITHUB_TOKEN permissions against PATs, OIDC federation, SHA pinning and lockfiles, action policies, artifact attestations, and caching, retention and scaling for cost.',
    group: 'skills',
    weight: '10–15%',
    weightPct: 12.5,
  },
  {
    slug: 'syntax-reference',
    label: 'Syntax reference',
    navLabel: 'Syntax reference',
    icon: 'file-code',
    badge: 'Deep dive',
    accent: 'var(--s6)',
    blurb:
      'The workflow and action syntax the exam expects you to read cold: every top-level key, context availability, expression functions, status checks, workflow commands, environment files, default variables and action.yml.',
    group: 'extras',
  },
  {
    slug: 'exam-tips',
    label: 'Exam tips & caveats',
    navLabel: 'Exam tips',
    icon: 'light-bulb',
    badge: 'Final review',
    accent: 'var(--s7)',
    blurb:
      'Key numbers and limits, renames and retired syntax, where Learn and the docs disagree, commonly mistaken topics as failed and fixed runs, a scenario-to-answer table and a checklist for the night before.',
    group: 'extras',
  },
];

export const GROUP_LABELS: Record<PageGroup, string> = {
  start: 'Start here',
  skills: 'Skills measured',
  extras: 'Final review',
};

/** Pages that carry an exam weighting, in outline order. */
export const SKILL_PAGES = PAGES.filter((p) => p.group === 'skills');

export function pageBySlug(slug: string): NotePage | undefined {
  return PAGES.find((p) => p.slug === slug);
}

/** Previous / next page for the pager, skipping the home page. */
export function neighbours(slug: string) {
  const ordered = PAGES.filter((p) => p.slug !== '');
  const i = ordered.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? ordered[i - 1] : undefined, next: i >= 0 ? ordered[i + 1] : undefined };
}
