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

GitHub Pages serves the prebuilt site from the repository root on `master`. Run `npm run prepare:pages` before committing: it builds the Astro source and synchronizes `index.html`, `favicon.svg`, and `_astro/` to the root.

## Asset sources

- Portrait: supplied by Zhiyang Xu.
- BLIP3o-NEXT preview: [official repository](https://github.com/JiuhaiChen/BLIP3o); BLIP3-o preview: Figure 1 from the [official paper](https://arxiv.org/abs/2505.09568).
- Vision-Flan preview: Figure 2 from the [official paper](https://aclanthology.org/2024.findings-acl.905/).
- MultiInstruct preview: [official repository](https://github.com/PLUM-Lab/MultiInstruct).
- Newsreader and Manrope are self-hosted through Fontsource and distributed under the SIL Open Font License.
