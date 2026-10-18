# Homepage Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the legacy Jekyll site with a polished Astro single page featuring Zhiyang Xu's portrait and six selected research projects.

**Architecture:** Astro generates a static root page from typed project data and small presentation components. Local portrait, paper visuals, and self-hosted fonts pass through Astro's asset pipeline; a Node verification script checks the content contract before build and after rendering. GitHub Actions publishes `dist/` to the existing user-site URL.

**Tech Stack:** Astro 7, TypeScript, semantic HTML, modern CSS, Node's built-in test runner, Astro image optimization, GitHub Pages Actions

### Task 1: Establish the content contract

**Files:**
- Create: `tests/content.test.mjs`
- Create: `src/data/projects.ts`
- Modify: `package.json`

**Step 1: Write the failing test**

Create a Node test that reads `src/data/projects.ts` and checks the six required slugs appear once in newest-first order, legacy sample titles are absent, and the two BLIP3o records put `Zhiyang Xu*` before `Jiuhai Chen*` with an equal-contribution note.

**Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL because `src/data/projects.ts` does not exist.

**Step 3: Add the Astro package and typed project data**

Replace the legacy npm metadata with scripts for `astro dev`, `astro build`, `astro check`, and the Node tests. Add the six records with title, slug, date, venue, authors, description, image import, accessible image description, links, and optional award/equal-contribution note.

**Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: 3 passing tests and 0 failures.

**Step 5: Commit**

```bash
git add package.json tests/content.test.mjs src/data/projects.ts
git commit -m "Define selected research projects"
```

### Task 2: Add verified local assets

**Files:**
- Create: `src/assets/portrait.jpg`
- Create: `src/assets/projects/grounded-videollm.*`
- Create: `src/assets/projects/blip3o-next.*`
- Create: `src/assets/projects/blip3o.*`
- Create: `src/assets/projects/spartun3d.*`
- Create: `src/assets/projects/vision-flan.*`
- Create: `src/assets/projects/multiinstruct.*`
- Create: `src/assets/fonts/newsreader-*.woff2`
- Create: `src/assets/fonts/manrope-*.woff2`

**Step 1: Copy the supplied portrait**

Copy `/Users/zhiyangxu/Downloads/IMG_7157 3.jpg` to `src/assets/portrait.jpg` and confirm its dimensions.

**Step 2: Download official project visuals**

Use figures from the authors' official project repositories/pages or the linked papers. Record every source URL in `README.md` or `src/data/projects.ts` comments.

**Step 3: Crop or convert figures without altering their scientific content**

Create web-ready previews with consistent framing and verify them visually. Keep source attribution in the repository.

**Step 4: Download self-hostable font files**

Use OFL-licensed Newsreader and Manrope WOFF2 files and retain their license files under `src/assets/fonts/licenses/`.

**Step 5: Commit**

```bash
git add src/assets
git commit -m "Add portrait project visuals and fonts"
```

### Task 3: Build the semantic single page

**Files:**
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Hero.astro`
- Create: `src/components/ProjectCard.astro`
- Create: `src/components/Footer.astro`
- Create: `src/pages/index.astro`
- Create: `src/styles/global.css`
- Create: `public/favicon.svg`

**Step 1: Write the failing rendered-page test**

Extend `tests/content.test.mjs` to inspect `dist/index.html` and require one `main`, one level-one heading, About and Projects anchors, six project articles, portrait alt text, external-link labels, and the equal-contribution explanation.

**Step 2: Run the test to verify it fails**

Run: `npm run build && npm test`
Expected: FAIL because the Astro page does not exist.

**Step 3: Implement the page and components**

Build the portrait-led hero, contact links, project list, and footer with semantic landmarks. Use Astro's `Image` component for local responsive images and map the six project records into `ProjectCard` components.

**Step 4: Implement the editorial visual system**

Add self-hosted font faces, ivory/ink/olive design tokens, fluid type and spacing, two-column desktop layouts, stacked mobile layouts, visible focus, hover states, reduced-motion handling, and print-safe defaults.

**Step 5: Run checks**

Run: `npm run check && npm run build && npm test`
Expected: all Astro diagnostics and content/render tests pass.

**Step 6: Commit**

```bash
git add astro.config.mjs tsconfig.json src public package-lock.json
git commit -m "Build editorial academic homepage"
```

### Task 4: Remove legacy site output and configure deployment

**Files:**
- Delete: legacy Jekyll source, sample collections, theme assets, Ruby files, and old generated-page inputs
- Create: `.github/workflows/deploy.yml`
- Modify: `.gitignore`
- Modify: `README.md`

**Step 1: Write the failing repository-cleanliness test**

Extend the Node test to reject `_pages`, `_publications`, `_talks`, `_teaching`, `_posts`, `Gemfile`, `_config.yml`, and legacy sample phrases.

**Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL while legacy files remain.

**Step 3: Remove legacy files and document the new editing workflow**

Delete the obsolete Jekyll theme and sample content, retain repository history, and explain local commands, project metadata, asset attribution, and deployment in `README.md`.

**Step 4: Add the official Pages workflow**

Use `actions/checkout@v7`, `withastro/action@v6`, and `actions/deploy-pages@v5` on pushes to `master`, following the current official Astro GitHub Pages guide. Configure `site: 'https://zhiyangxu-vt.github.io'`; no `base` is needed because this is the matching user-site repository.

**Step 5: Run the complete test suite**

Run: `npm run check && npm run build && npm test && git diff --check`
Expected: all checks pass and no whitespace errors appear.

**Step 6: Commit**

```bash
git add -A
git commit -m "Migrate homepage deployment to Astro"
```

### Task 5: Review in browsers and refine

**Files:**
- Modify: `src/styles/global.css`
- Modify: components or project data only when review finds a concrete issue

**Step 1: Start the production preview**

Run: `npm run preview -- --host 127.0.0.1`
Expected: preview server reports a local URL.

**Step 2: Capture responsive screenshots**

Capture the full page at 1440x1000, 768x1024, and 390x844. Inspect crop, hierarchy, wrapping author lists, focus states, image clarity, and horizontal overflow.

**Step 3: Run accessibility and link checks**

Confirm heading order, landmarks, alt text, keyboard navigation, contrast, reduced-motion behavior, and all external destinations.

**Step 4: Fix only observed issues and rerun checks**

Run: `npm run check && npm run build && npm test && git diff --check`
Expected: all checks pass after refinements.

**Step 5: Commit**

```bash
git add src
git commit -m "Refine responsive homepage presentation"
```

### Task 6: Integrate and verify GitHub Pages

**Files:**
- No new files expected

**Step 1: Review branch history and final diff**

Run: `git log --oneline master..HEAD` and `git diff --stat master...HEAD`.
Expected: focused commits containing the migration, assets, tests, and design.

**Step 2: Merge the feature branch into master**

Merge after the final local checks pass and push `master` to `origin`.

**Step 3: Confirm the GitHub Actions deployment**

Inspect the workflow result and Pages response. If the repository still uses branch-source Pages, change the source to GitHub Actions in repository settings.

**Step 4: Verify production**

Request `https://zhiyangxu-vt.github.io/`, confirm HTTP 200, check the new title and six project headings, and verify representative CSS/image assets return successfully.
