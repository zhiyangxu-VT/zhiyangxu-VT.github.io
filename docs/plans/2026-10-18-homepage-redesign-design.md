# Homepage Redesign Design

## Goal

Replace the legacy AcademicPages site with a fast, single-page academic portfolio that presents Zhiyang Xu's identity, research focus, and six selected projects clearly on desktop and mobile.

## Visual direction

The page uses a warm editorial style: an ivory background (`#f4efe5`), near-black text (`#211f1b`), muted taupe metadata, dark olive accents, and thin warm-gray rules. Newsreader provides the display serif for the name and project titles; Manrope provides the body and interface text. Both fonts are self-hosted so the page does not depend on third-party font requests.

The layout avoids heavy cards and shadows. Whitespace, type scale, restrained borders, and project imagery create the hierarchy.

## Information architecture

The header contains the name at left and two anchor links, About and Projects, at right.

The hero is a two-column composition with a 4:5 crop of the supplied portrait and a concise introduction. It includes the current role, research focus, and links to email, Google Scholar, and GitHub.

The Projects section contains exactly six works, sorted newest to oldest:

1. Grounded-VideoLLM — Findings of EMNLP 2025
2. BLIP3o-NEXT — October 2025
3. BLIP3-o — May 2025
4. SPARTUN3D — ICLR 2025
5. Vision-Flan — Findings of ACL 2024
6. MultiInstruct — ACL 2023 Outstanding Paper

Each project is a horizontal card with a 16:10 visual, title, venue and date, complete author list, short description, and relevant Paper, PDF, Project, Code, Model, or Data links. For BLIP3o-NEXT and BLIP3-o, Zhiyang Xu appears first in the displayed author list and Zhiyang Xu and Jiuhai Chen are marked as equal-contribution co-first authors.

The page ends with a minimal footer. Legacy News, CV, sample publications, and template pages are excluded from the new navigation and output.

## Technical architecture

The implementation uses Astro as a small static site. A typed project data module keeps publication metadata separate from presentation. Reusable components cover the header, hero, project cards, and footer. CSS custom properties define color, type, spacing, and responsive breakpoints.

The portrait and project previews are local assets processed by Astro's image pipeline. Project visuals come from official paper or project assets. GitHub Actions builds and deploys the generated static site to GitHub Pages.

## Responsive and accessible behavior

On wide screens, the hero and project cards use two columns. On narrow screens they stack, preserve the reading order, and keep link targets comfortable. The page uses semantic landmarks, meaningful heading order, descriptive alt text, visible keyboard focus, sufficient contrast, and reduced-motion support.

## Migration and verification

The new site replaces the legacy Jekyll output only after it builds successfully. Verification covers the production build, project order and metadata, absence of legacy sample content, local asset loading, external links, responsive screenshots, keyboard focus, and the deployed GitHub Pages URL.
