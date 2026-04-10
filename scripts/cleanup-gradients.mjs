import fs from 'fs';
import path from 'path';

const getAllHtmlFiles = (dir, files = []) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            const skipDirs = ['node_modules', 'dist', '.git', 'templates', 'scripts'];
            if (!skipDirs.includes(item)) {
                getAllHtmlFiles(fullPath, files);
            }
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
};

const cleanupGradients = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanged = false;

    // Remove text-gradient class and keep spans plain
    if (content.includes('class="text-gradient"')) {
        content = content.replace(/class=["']text-gradient["']/g, '');
        hasChanged = true;
    }

    if (hasChanged) {
        fs.writeFileSync(filePath, content);
        console.log(`Cleaned Gradients: ${filePath}`);
    }
};

const files = getAllHtmlFiles('.');
console.log(`Auditing ${files.length} HTML files for redundant gradients...`);
files.forEach(cleanupGradients);
console.log('Gradient Cleanup Complete.');
