import fs from 'fs';
import path from 'path';

// Assuming the script is run from the project root
const ROOT_DIR = process.cwd();
const HEADER_PATH = path.join(ROOT_DIR, 'templates/header.html');
const FOOTER_PATH = path.join(ROOT_DIR, 'templates/footer.html');
const CONTACT_PATH = path.join(ROOT_DIR, 'templates/contact-form.html');

console.log(`Root Dir: ${ROOT_DIR}`);

if (!fs.existsSync(HEADER_PATH) || !fs.existsSync(FOOTER_PATH) || !fs.existsSync(CONTACT_PATH)) {
    console.error('Error: Master templates not found in templates/ folder');
    process.exit(1);
}

const headerTemplate = fs.readFileSync(HEADER_PATH, 'utf8');
const footerTemplate = fs.readFileSync(FOOTER_PATH, 'utf8');
const contactTemplate = fs.readFileSync(CONTACT_PATH, 'utf8');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate relative path depth from root
    const relativePath = path.relative(ROOT_DIR, path.dirname(filePath));
    const depth = relativePath === '' ? 0 : relativePath.split(path.sep).length;
    const prefix = '../'.repeat(depth);

    console.log(`Processing: ${path.relative(ROOT_DIR, filePath)} (Prefix: "${prefix}")`);

    // Helper to fix paths in the template
    const fixPaths = (html, pre) => {
        return html
            .replace(/href="(?!(https?|tel:|mailto:|#))([^"]+)"/g, (match, p1, p2) => `href="${pre}${p2}"`)
            .replace(/src="(?!(https?|data:))([^"]+)"/g, (match, p1, p2) => `src="${pre}${p2}"`);
    };

    const newHeader = fixPaths(headerTemplate, prefix);
    const newFooter = fixPaths(footerTemplate, prefix);
    const newContact = fixPaths(contactTemplate, prefix);

    // Regex for replacements
    const navRegex = /<nav class="navbar">[\s\S]*?<\/nav>/;
    const footerRegex = /<footer class="footer">[\s\S]*?<\/footer>/;
    const contactRegex = /<section id="quote"[\s\S]*?<\/section>/;

    let modified = false;

    if (navRegex.test(content)) {
        content = content.replace(navRegex, newHeader);
        modified = true;
    }

    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, newFooter);
        modified = true;
    }

    if (contactRegex.test(content)) {
        content = content.replace(contactRegex, newContact);
        modified = true;
    } else {
        // Fallback: search for quote-section class if id="quote" is missing
        const contactClassRegex = /<section class="quote-section"[\s\S]*?<\/section>/;
        if (contactClassRegex.test(content)) {
            content = content.replace(contactClassRegex, newContact);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        
        if (stats.isDirectory()) {
            const skipDirs = ['node_modules', 'scripts', 'templates', 'src', '.git', '.github', 'dist'];
            if (!skipDirs.includes(file)) {
                walkDir(fullPath);
            }
        } else if (file.endsWith('.html')) {
            processFile(fullPath);
        }
    });
}

console.log('--- Starting Global Sync (Header, Footer, Contact Form) ---');
walkDir(ROOT_DIR);
console.log('--- Sync Complete ---');
