import fs from 'fs';
import path from 'path';

function getFolderText(dir) {
    let result = '';
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            result += getFolderText(fullPath);
        } else if (file.endsWith('.jsx')) {
            result += fs.readFileSync(fullPath, 'utf8') + ' ';
        }
    }
    return result;
}

function calculateForText(text, keyword) {
    // Basic JSX text extraction (not perfect but good enough for density estimation)
    // Strip imports, tags, classes...
    let clean = text.replace(/<[^>]*>/g, ' '); // Strip HTML tags
    clean = clean.replace(/import.*?['"];/g, ' '); // Strip imports
    clean = clean.replace(/className=\{.*?\}/g, ' '); // Strip classes
    clean = clean.replace(/export default.*?;/g, ' ');
    
    clean = clean.replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').toLowerCase();

    const words = clean.split(/\s+/).filter(w => w.length > 1);
    const totalWords = words.length;

    const regex = new RegExp(keyword.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = clean.match(regex);
    const count = matches ? matches.length : 0;

    const density = ((count / totalWords) * 100).toFixed(2);
    
    console.log(`\nKeyword: "${keyword}"`);
    console.log(`Words (approx): ${totalWords}`);
    console.log(`Occurrences: ${count}`);
    console.log(`Density: ${density}%`);
    
    const minTargets = Math.ceil(totalWords * 0.013);
    const maxTargets = Math.floor(totalWords * 0.018);
    console.log(`Target Range (1.3 - 1.8%): ${minTargets} to ${maxTargets} occurrences`);
}

// For Home.jsx + its components
const homeText = fs.readFileSync('src/pages/Home.jsx', 'utf8') +
                 fs.readFileSync('src/components/home/Hero.jsx', 'utf8') +
                 fs.readFileSync('src/components/home/ProductsMarquee.jsx', 'utf8') +
                 fs.readFileSync('src/components/home/ServicesShowcase.jsx', 'utf8') +
                 fs.readFileSync('src/components/home/TrustSection.jsx', 'utf8') +
                 fs.readFileSync('src/components/home/InteractiveRoofFinder.jsx', 'utf8') +
                 fs.readFileSync('src/components/home/QuoteForm.jsx', 'utf8');

console.log('--- HOME PAGE (Estimated) ---');
calculateForText(homeText, 'Roofing Contractor in Navi Mumbai');

// For Products.jsx
const productsText = fs.readFileSync('src/pages/Products.jsx', 'utf8');
console.log('\n--- PRODUCTS PAGE (Estimated) ---');
calculateForText(productsText, 'Premium Roofing Sheets in Navi Mumbai');
