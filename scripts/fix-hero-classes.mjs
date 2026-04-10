import fs from 'fs';
import path from 'path';

const getAllHtmlFiles = (dir, files = []) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (item !== 'node_modules' && item !== 'dist' && item !== '.git' && item !== 'templates' && item !== 'scripts') {
                getAllHtmlFiles(fullPath, files);
            }
        } else if (item.endsWith('.html')) {
            // Ignore index since it uses .hero on purpose
            if (item !== 'index.html') {
                files.push(fullPath);
            }
        }
    }
    return files;
};

const fixHeroClasses = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanged = false;

    // Detect the folder to decide the right class name
    let targetHeroClass = 'services-hero';
    if (filePath.includes('products')) targetHeroClass = 'products-hero';
    if (filePath.includes('services')) targetHeroClass = 'services-hero';
    if (filePath.includes('projects')) targetHeroClass = 'projects-hero';
    if (filePath.includes('areas') || filePath.includes('location')) targetHeroClass = 'location-hero';
    if (filePath.includes('contact')) targetHeroClass = 'contact-hero';

    // If it has a standalone `<section class="hero">`
    if (content.match(/<section[^>]*class=["']hero["'][^>]*>/gi)) {
        content = content.replace(/<section([^>]*)class=["']hero["']([^>]*)>/gi, `<section$1class="${targetHeroClass}"$2>`);
        hasChanged = true;
    }

    if (hasChanged) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated Hero Class to ${targetHeroClass}: ${filePath}`);
    }
};

const files = getAllHtmlFiles('.');
console.log(`Auditing ${files.length} sub-HTML files for isolated hero classes...`);
files.forEach(fixHeroClasses);
console.log('Hero Class Audit Complete.');
