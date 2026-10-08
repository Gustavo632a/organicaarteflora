import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error('Informe a pasta das fotos como argumento.');
const names = ['bromelias4', 'bromelias3', 'bromelias2', 'bromelias', 'marantas4', 'marantas3', 'marantas2', 'marantas1', 'moreia3', 'moreia2', 'moreia1'];
const photos = Object.fromEntries(names.map(name => [name, name]));
Object.assign(photos, { hero: 'marantas1', about: 'bromelias4', 'produto-01': 'marantas3', 'produto-02': 'moreia3', 'produto-04': 'moreia1' });
await mkdir('public/images', { recursive: true });
const dimensions = {};
for (const [output, source] of Object.entries(photos)) {
  // Preserve the original photo's framing and aspect ratio; never upscale.
  for (const width of [640, 1200]) {
    const result = await sharp(path.join(sourceDirectory, `${source}.png`))
      .rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 84 })
      .toFile(`public/images/${output}${width === 640 ? '-small' : ''}.webp`);
    dimensions[`/images/${output}${width === 640 ? '-small' : ''}.webp`] = { width: result.width, height: result.height };
  }
  console.log(`Preparada: ${output}`);
}
await writeFile('src/data/imageDimensions.json', JSON.stringify(dimensions, null, 2) + '\n');
