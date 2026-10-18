import type { ImageMetadata } from 'astro';

import groundedVideoLlmImage from '../assets/projects/grounded-videollm.png';
import blip3oNextImage from '../assets/projects/blip3o-next.png';
import blip3oImage from '../assets/projects/blip3o.png';
import spartun3dImage from '../assets/projects/spartun3d.png';
import visionFlanImage from '../assets/projects/vision-flan.png';
import multiInstructImage from '../assets/projects/multiinstruct.png';

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  venue: string;
  authors: string[];
  contributionNote?: string;
  award?: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  imageSource: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'grounded-videollm',
    title: 'Grounded-VideoLLM: Sharpening Fine-grained Temporal Grounding in Video Large Language Models',
    date: 'November 2025',
    venue: 'Findings of EMNLP 2025',
    authors: [
      'Haibo Wang',
      'Zhiyang Xu',
      'Yu Cheng',
      'Shizhe Diao',
      'Yufan Zhou',
      'Yixin Cao',
      'Qifan Wang',
      'Weifeng Ge',
      'Lifu Huang',
    ],
    description:
      'A video language model designed to sharpen fine-grained temporal grounding while preserving strong multimodal understanding.',
    image: groundedVideoLlmImage,
    imageAlt: 'Grounded-VideoLLM localizes an event within a longer video timeline.',
    imageSource: 'https://github.com/WHB139426/Grounded-Video-LLM',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.findings-emnlp.50/' },
      { label: 'PDF', href: 'https://aclanthology.org/2025.findings-emnlp.50.pdf' },
      { label: 'Code', href: 'https://github.com/WHB139426/Grounded-Video-LLM' },
    ],
  },
  {
    slug: 'blip3o-next',
    title: 'BLIP3o-NEXT: Next Frontier of Native Image Generation',
    date: 'October 2025',
    venue: 'arXiv',
    authors: [
      'Zhiyang Xu*',
      'Jiuhai Chen*',
      'Le Xue',
      'Xichen Pan',
      'Shusheng Yang',
      'Can Qin',
      'An Yan',
      'Honglu Zhou',
      'Zeyuan Chen',
      'Lifu Huang',
      'Tianyi Zhou',
      'Junnan Li',
      'Silvio Savarese',
      'Caiming Xiong',
      'Ran Xu',
    ],
    contributionNote: '* Equal contribution',
    description:
      'An advance in native multimodal generation that improves visual fidelity, prompt alignment, and unified image understanding and creation.',
    image: blip3oNextImage,
    imageAlt:
      'BLIP3o-NEXT combines autoregressive and diffusion models with reinforcement learning.',
    imageSource: 'https://jiuhaichen.github.io/BLIP3o-NEXT.github.io/',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2510.15857' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2510.15857' },
      { label: 'Project', href: 'https://jiuhaichen.github.io/BLIP3o-NEXT.github.io/' },
      { label: 'Code', href: 'https://github.com/JiuhaiChen/BLIP3o' },
    ],
  },
  {
    slug: 'blip3o',
    title: 'BLIP3-o: A Family of Fully Open Unified Multimodal Models—Architecture, Training and Dataset',
    date: 'May 2025',
    venue: 'arXiv',
    authors: [
      'Zhiyang Xu*',
      'Jiuhai Chen*',
      'Xichen Pan',
      'Yushi Hu',
      'Can Qin',
      'Tom Goldstein',
      'Lifu Huang',
      'Tianyi Zhou',
      'Saining Xie',
      'Silvio Savarese',
      'Le Xue',
      'Caiming Xiong',
      'Ran Xu',
    ],
    contributionNote: '* Equal contribution',
    description:
      'A fully open family of unified multimodal models, accompanied by training recipes and data for both visual understanding and generation.',
    image: blip3oImage,
    imageAlt: 'BLIP3-o examples combining visual understanding with high-quality image generation.',
    imageSource: 'https://github.com/JiuhaiChen/BLIP3o',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2505.09568' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2505.09568' },
      { label: 'Code', href: 'https://github.com/JiuhaiChen/BLIP3o' },
      { label: 'Models', href: 'https://huggingface.co/BLIP3o/BLIP3o-Model' },
      { label: 'Data', href: 'https://huggingface.co/datasets/BLIP3o/BLIP3o-Pretrain' },
    ],
  },
  {
    slug: 'spartun3d',
    title: 'SPARTUN3D: Situated Spatial Understanding of 3D World in Large Language Models',
    date: '2025',
    venue: 'ICLR 2025',
    authors: ['Yue Zhang', 'Zhiyang Xu', 'Ying Shen', 'Parisa Kordjamshidi', 'Lifu Huang'],
    description:
      'A benchmark and approach for reasoning about situated spatial relationships in complex 3D environments with large language models.',
    image: spartun3dImage,
    imageAlt: 'SPARTUN3D illustrates spatial reasoning from an agent situated in a 3D scene.',
    imageSource: 'https://github.com/zhangyuejoslin/Spartun3D',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2410.03878' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2410.03878' },
      { label: 'Code', href: 'https://github.com/zhangyuejoslin/Spartun3D' },
    ],
  },
  {
    slug: 'vision-flan',
    title: 'Vision-Flan: Scaling Human-Labeled Tasks in Visual Instruction Tuning',
    date: 'August 2024',
    venue: 'Findings of ACL 2024',
    authors: [
      'Zhiyang Xu',
      'Chao Feng',
      'Rulin Shao',
      'Trevor Ashby',
      'Ying Shen',
      'Di Jin',
      'Yu Cheng',
      'Qifan Wang',
      'Lifu Huang',
    ],
    description:
      'A large-scale visual instruction-tuning effort built from diverse human-labeled tasks to improve general multimodal instruction following.',
    image: visionFlanImage,
    imageAlt: 'Vision-Flan training combines broad task diversity with visual instruction tuning.',
    imageSource: 'https://vision-flan.github.io/',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2024.findings-acl.905/' },
      { label: 'PDF', href: 'https://aclanthology.org/2024.findings-acl.905.pdf' },
      { label: 'Project', href: 'https://vision-flan.github.io/' },
    ],
  },
  {
    slug: 'multiinstruct',
    title: 'MultiInstruct: Improving Multi-Modal Zero-Shot Learning via Instruction Tuning',
    date: 'July 2023',
    venue: 'ACL 2023',
    authors: ['Zhiyang Xu*', 'Ying Shen*', 'Lifu Huang'],
    contributionNote: '* Equal contribution',
    award: 'Outstanding Paper Award',
    description:
      'A multimodal instruction-tuning benchmark and training framework that improves zero-shot transfer across diverse vision-language tasks.',
    image: multiInstructImage,
    imageAlt: 'MultiInstruct covers a diverse collection of visual and language instruction tasks.',
    imageSource: 'https://aclanthology.org/2023.acl-long.641/',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2023.acl-long.641/' },
      { label: 'PDF', href: 'https://aclanthology.org/2023.acl-long.641.pdf' },
      { label: 'Code', href: 'https://github.com/VT-NLP/MultiInstruct' },
    ],
  },
];
