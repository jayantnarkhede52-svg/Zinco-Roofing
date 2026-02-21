import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '../src/assets');

async function optimizeImage(filePath) {
    try {
        const metadata = await sharp(filePath).metadata();
        const originalSize = fs.statSync(filePath).size;
        const ext = path.extname(filePath);
        const name = path.basename(filePath, ext);
        const dir = path.dirname(filePath);
        const targetPath = path.join(dir, `${name}.webp`);

        let transform = sharp(filePath);

        // Resize if width > 1600 (better for performance while maintaining quality)
        if (metadata.width > 1600) {
            transform = transform.resize({ width: 1600, withoutEnlargement: true });
        }

        // Convert to WebP with 82% quality
        transform = transform.webp({ quality: 82, effort: 6 });

        const buffer = await transform.toBuffer();
        const newSize = buffer.length;

        // Save as WebP
        fs.writeFileSync(targetPath, buffer);

        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
        console.log(`Optimized: ${path.basename(filePath)} -> ${name}.webp | Saved: ${savings}% (${(originalSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB)`);

        // If it was a png or jpg, we should ideally delete the original to save space in the build,
        // but for now, let's keep them and we'll update the code to point to .webp
        if (ext.toLowerCase() !== '.webp') {
            // Optional: fs.unlinkSync(filePath); 
            // Better to keep for now until code is updated.
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            traverseDirectory(filePath);
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
            optimizeImage(filePath);
        }
    });
}

console.log('Starting image optimization...');
traverseDirectory(targetDir);
