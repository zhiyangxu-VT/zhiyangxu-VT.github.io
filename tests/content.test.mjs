import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

const projectSource = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8');

const expectedOrder = [
  'pan2',
  'blip3o-next',
  'blip3o',
  'vision-flan',
  'multiinstruct',
];

test('contains exactly the five selected projects in newest-first order', () => {
  const slugs = [...projectSource.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
  assert.deepEqual(slugs, expectedOrder);
});

test('marks both BLIP3o papers with the requested equal first authorship', () => {
  const records = projectSource.split("slug: '").slice(1);
  for (const slug of ['blip3o-next', 'blip3o']) {
    const record = records.find((entry) => entry.startsWith(`${slug}',`));
    assert.ok(record, `missing ${slug}`);
    assert.ok(record.indexOf("'Zhiyang Xu*'") < record.indexOf("'Jiuhai Chen*'"));
    assert.match(record, /\* Equal contribution/);
  }

  const nextRecord = records.find((entry) => entry.startsWith("blip3o-next',"));
  assert.match(nextRecord, /'Le Xue\*'/);

  const blip3oRecord = records.find((entry) => entry.startsWith("blip3o',"));
  assert.match(blip3oRecord, /'Xichen Pan\*'/);
  assert.match(blip3oRecord, /'Yushi Hu\*'/);
});

test('does not include legacy template or publication content', () => {
  assert.doesNotMatch(projectSource, /B\.S\. in GitHub|Professor Hub|Project Name/i);
  assert.doesNotMatch(projectSource, /Grounded-VideoLLM|SPARTUN3D/i);
  assert.equal((projectSource.match(/slug: '/g) ?? []).length, 5);
});

test('renders one accessible single page with five project cards', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.equal((html.match(/<main[\s>]/g) ?? []).length, 1);
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
  assert.equal((html.match(/<article[^>]+data-project=/g) ?? []).length, 5);
  assert.match(html, /href="#about"/);
  assert.match(html, /href="#projects"/);
  assert.match(html, /alt="Portrait of Zhiyang Xu"/);
  assert.match(html, /Equal contribution/);
  assert.match(html, /<video[^>]+src="https:\/\/raw\.githubusercontent\.com\/[^\"]+\/media\/pan2-koi\.mp4"/);
  assert.match(html, /autoplay/);
  assert.match(html, /muted/);
  assert.match(html, /loop/);
  assert.match(html, /class="project__video-intro is-visible"[^>]*>PAN 2<\/span>/);
  assert.match(html, /aria-label="[^"]+ \(opens in a new tab\)"/);
});

test('does not retain the legacy Jekyll site or sample collections', async () => {
  const legacyPaths = [
    '_pages',
    '_publications',
    '_talks',
    '_teaching',
    '_portfolio',
    'Gemfile',
    '_config.yml',
  ];

  for (const path of legacyPaths) {
    const url = new URL(`../${path}`, import.meta.url);
    await assert.rejects(access(url), { code: 'ENOENT' }, `${path} should be removed`);
  }
});
