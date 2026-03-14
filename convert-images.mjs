import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directories = [
  'src/assets/locations',
  'src/assets/productshero'
];

async function convertToWebp() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const inputPath = path.join(dir, file);
        const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        
        if (fs.existsSync(outputPath)) {
            console.log(`Skipping ${inputPath} (WebP already exists)`);
            continue;
        }

        console.log(`Converting ${inputPath} -> ${outputPath}`);
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
      }
    }
  }
}

convertToWebp().catch(console.error);
