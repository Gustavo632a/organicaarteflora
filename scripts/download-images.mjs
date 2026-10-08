import { mkdir, writeFile } from 'node:fs/promises';
const photos = {
  hero: 'photo-1416879595882-3373a0480b5b',
  'produto-01': 'photo-1416879595882-3373a0480b5b',
  'produto-02': 'photo-1490750967868-88aa4486c946',
  'produto-03': 'photo-1563241527-3004b7be0ffd',
  'produto-04': 'photo-1485955900006-10f4d324d411',
  about: 'photo-1459411552884-841db9b3cc2a',
  'local-01': 'photo-1416879595882-3373a0480b5b',
  'local-02': 'photo-1501004318641-b39e6451bec6',
  'local-03': 'photo-1490750967868-88aa4486c946',
  'local-04': 'photo-1485955900006-10f4d324d411',
};
await mkdir('public/images', { recursive: true });
for (const [name, id] of Object.entries(photos)) {
  for (const width of [640, 1200]) {
    const response = await fetch(`https://images.unsplash.com/${id}?auto=format&fm=webp&fit=crop&w=${width}&h=${Math.round(width * 1000 / 1200)}&q=80`);
    if (!response.ok) throw new Error(`Image ${name}: ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.toString('ascii', 8, 12) !== 'WEBP') throw new Error(`Invalid WebP: ${name}`);
    await writeFile(`public/images/${name}${width === 640 ? '-small' : ''}.webp`, bytes);
  }
  console.log(`Downloaded ${name}`);
}
