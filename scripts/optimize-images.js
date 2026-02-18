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

        let transform = sharp(filePath);

        // Resize if width > 1920
        if (metadata.width > 1920) {
            transform = transform.resize({ width: 1920, withoutEnlargement: true });
        }

        // Compress based on format
        if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            transform = transform.jpeg({ quality: 80, mozjpeg: true });
        } else if (metadata.format === 'png') {
            transform = transform.png({ quality: 80, compressionLevel: 8 });
        } else if (metadata.format === 'webp') {
            transform = transform.webp({ quality: 80 });
        } else {
            console.log(`Skipping unsupported format: ${filePath}`);
            return;
        }

        const buffer = await transform.toBuffer();
        const newSize = buffer.length;

        if (newSize < originalSize) {
            fs.writeFileSync(filePath, buffer);
            const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
            console.log(`Optimized: ${path.basename(filePath)} | Saved: ${savings}% (${(originalSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB)`);
        } else {
            console.log(`Skipped (no savings): ${path.basename(filePath)}`);
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
