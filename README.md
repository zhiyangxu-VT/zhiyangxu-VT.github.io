# Zhiyang Xu — Personal Homepage

Source for [zhiyangxu-vt.github.io](https://zhiyangxu-vt.github.io/), a single-page academic portfolio built with Astro.

## Local development

Use Node 24 (the repository includes `.nvmrc`):

```bash
nvm use
npm install
npm run dev
```

Before publishing, run:

```bash
npm run check
npm test
npm run prepare:pages
```

Project metadata lives in `src/data/projects.ts`. Page components are under `src/components/`, and global design tokens and responsive styles are in `src/styles/global.css`.

## Deployment

The Astro source lives on `master`, while GitHub Pages serves the prebuilt site from the root of `gh-pages`. Run `npm run prepare:pages` before publishing: it builds the source and synchronizes `index.html`, `favicon.svg`, and `_astro/` to the repository root. Copy those outputs plus `.nojekyll` to `gh-pages`, then push that branch.

## Asset sources

- Portrait: supplied by Zhiyang Xu.
- PAN 2 preview video: supplied by Zhiyang Xu from the [official technical blog](https://ifm.ai/blog/pan2/).
- BLIP3o-NEXT and BLIP3-o previews: [official repository](https://github.com/JiuhaiChen/BLIP3o).
- Vision-Flan preview: Figure 2 from the [official paper](https://aclanthology.org/2024.findings-acl.905/).
- MultiInstruct preview: [official repository](https://github.com/PLUM-Lab/MultiInstruct).
- Newsreader and Manrope are self-hosted through Fontsource and distributed under the SIL Open Font License.
