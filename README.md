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
- Grounded-VideoLLM preview: [official repository](https://github.com/WHB139426/Grounded-Video-LLM).
- BLIP3o-NEXT and BLIP3-o previews: [official repository](https://github.com/JiuhaiChen/BLIP3o).
- SPARTUN3D preview: [official repository](https://github.com/zhangyuejoslin/Spartun3D).
- Vision-Flan preview: [official project site](https://vision-flan.github.io/).
- MultiInstruct preview: [official repository](https://github.com/PLUM-Lab/MultiInstruct).
- Newsreader and Manrope are self-hosted through Fontsource and distributed under the SIL Open Font License.
