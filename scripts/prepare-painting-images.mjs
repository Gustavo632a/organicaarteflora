import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error('Informe a pasta das pinturas.');
const dimensions = JSON.parse(await readFile('src/data/imageDimensions.json', 'utf8'));
for (const name of ['dunas', 'entardecer', 'umdianodeserto', 'verdeevida']) {
  for (const width of [640, 1200]) {
    const file = `/images/pintura-${name}${width === 640 ? '-small' : ''}.webp`;
    const result = await sharp(path.join(sourceDirectory, `${name}.png`)).rotate()
      .resize({ width, withoutEnlargement: true }).webp({ quality: 88 }).toFile(`public${file}`);
    dimensions[file] = { width: result.width, height: result.height };
  }
  console.log(`Preparada: ${name}`);
}
await writeFile('src/data/imageDimensions.json', JSON.stringify(dimensions, null, 2) + '\n');
