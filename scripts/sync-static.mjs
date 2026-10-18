import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

await rm(path.join(root, '_astro'), { recursive: true, force: true });
await mkdir(path.join(root, '_astro'), { recursive: true });
await cp(path.join(dist, '_astro'), path.join(root, '_astro'), { recursive: true });
await cp(path.join(dist, 'index.html'), path.join(root, 'index.html'));
await cp(path.join(dist, 'favicon.svg'), path.join(root, 'favicon.svg'));

console.log('Synced the production site to the repository root.');
