import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const SIZE_THRESHOLD = 500 * 1024; // 500 KB

async function optimizeImage(filePath) {
    const stats = fs.statSync(filePath);
    if (stats.size <= SIZE_THRESHOLD) return;

    console.log(`Optimizing Image (Pass 3 - Aggressive): ${filePath} (${(stats.size / 1024).toFixed(2)} KB)`);

    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + '.tmp';

    try {
        let pipeline = sharp(filePath);

        // Aggressive resizing to 1024px for stubborn ones
        const metadata = await pipeline.metadata();
        if (metadata.width > 1024) {
            pipeline = pipeline.resize(1024);
        }

        if (ext === '.png') {
            // If PNG is still too big, we forcedly convert to JPEG but keep .png extension? 
            // Better to use very low quality PNG
            await pipeline.png({ quality: 50, compressionLevel: 9, palette: true }).toFile(tempPath);
        } else if (ext === '.jpg' || ext === '.jpeg') {
            await pipeline.jpeg({ quality: 60, mozjpeg: true }).toFile(tempPath);
        } else if (ext === '.webp') {
            await pipeline.webp({ quality: 60 }).toFile(tempPath);
        } else {
            return;
        }

        const newStats = fs.statSync(tempPath);
        if (newStats.size < stats.size) {
            if (newStats.size > SIZE_THRESHOLD && (ext === '.png')) {
                // If it's still > 500kb and it's a PNG, we might have to do something else
                console.log(`  Still too large (${(newStats.size / 1024).toFixed(2)} KB) - trying WebP conversion internally...`);
                // We'll actually just use JPEG format but keep PNG extension to avoid refactoring imports
                // note: this is a bit hacky but browser will usually handle it. 
                // However, let's try 40 quality first.
                await sharp(filePath).resize(1024).png({ quality: 30, palette: true }).toFile(tempPath + '.2');
                const stats3 = fs.statSync(tempPath + '.2');
                if (stats3.size < newStats.size) {
                    fs.unlinkSync(tempPath);
                    fs.renameSync(tempPath + '.2', filePath);
                    console.log(`  Final: ${(stats3.size / 1024).toFixed(2)} KB`);
                    return;
                }
                fs.unlinkSync(tempPath + '.2');
            }
            fs.renameSync(tempPath, filePath);
            console.log(`  Done: ${(newStats.size / 1024).toFixed(2)} KB`);
        } else {
            fs.unlinkSync(tempPath);
            console.log(`  Skipped (no reduction or still > threshold)`);
        }
    } catch (err) {
        console.error(`  Error optimizing ${filePath}:`, err);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
}

async function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await walk(fullPath);
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
            await optimizeImage(fullPath);
        }
    }
}

console.log('Starting final aggressive asset optimization pass...');
walk(ASSETS_DIR).then(() => {
    console.log('Finished final aggressive asset optimization pass.');
});
