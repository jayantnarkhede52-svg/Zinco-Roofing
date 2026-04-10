import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function convertFile(src) {
  const out = src.replace(/\.png$/, '.webp');
  await sharp(src).webp({ quality: 80 }).toFile(out);
  const origSize = fs.statSync(src).size;
  const newSize = fs.statSync(out).size;
  const saved = ((1 - newSize/origSize) * 100).toFixed(0);
  console.log(`  ${path.basename(src)}: ${(origSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB (${saved}% smaller)`);
  return { orig: origSize, newS: newSize };
}

async function convertDir(dir) {
  if (!fs.existsSync(dir)) { console.log(`SKIP dir: ${dir}`); return; }
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
  if (files.length === 0) { console.log(`  No PNGs in ${dir}`); return; }
  console.log(`\n[${dir}] - ${files.length} PNGs`);
  let totalOrig = 0, totalNew = 0;
  for (const f of files) {
    const { orig, newS } = await convertFile(path.join(dir, f));
    totalOrig += orig;
    totalNew += newS;
  }
  console.log(`  SUBTOTAL: ${(totalOrig/1024/1024).toFixed(1)}MB -> ${(totalNew/1024/1024).toFixed(1)}MB`);
}

const dirs = [
  'src/assets/products',
  'src/assets/Dect sheet',
  'src/assets/Metal roofing images',
  'src/assets/Multiwall polycarbonate images',
  'src/assets/Puf panel images',
  'src/assets/Transparent polycarbonate',
  'src/assets/Upvc images',
  'src/assets/services',
  'src/assets/seo',
  'src/assets/locations',
  'src/assets/MUMBAI',
  'src/assets/Navi mumbai',
  'src/assets/chakan',
  'src/assets/lonavla',
];

for (const d of dirs) {
  await convertDir(d);
}

console.log('\n✅ All product PNGs converted to WebP!');
