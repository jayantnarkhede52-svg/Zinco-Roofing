import fs from 'fs';
import path from 'path';

const getAllHtmlFiles = (dir, files = []) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (item !== 'node_modules' && item !== 'dist' && item !== '.git') {
                getAllHtmlFiles(fullPath, files);
            }
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
};

const cleanupHeroInlineStyles = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanged = false;

    // Detect hero sections and process their content
    const heroRegex = /<(section|div)[^>]*class=["'][^"']*(hero|location-hero|services-hero|projects-hero|contact-hero|products-hero)[^>]*>([\s\S]*?)<\/\1>/gi;
    
    content = content.replace(heroRegex, (match, tag, className, heroContent) => {
        // Fix inline white color often used for breadcrumbs/back links
        const updatedHeroContent = heroContent.replace(/style=["']([^"']*)color:\s*(#fff|white|#ffffff)([^"']*)["']/gi, (styleMatch, p1, color, p2) => {
            hasChanged = true;
            return `style="${p1}color: var(--text-secondary)${p2}"`;
        });
        
        // Remove individual text-shadows if they were added inline
        const shadowFixedContent = updatedHeroContent.replace(/text-shadow:[^;"]+;?/gi, '');
        
        return `<${tag} class="${className}">${shadowFixedContent}</${tag}>`;
    });

    if (hasChanged) {
        fs.writeFileSync(filePath, content);
        console.log(`Cleaned Hero Inline Styles: ${filePath}`);
    }
};

const files = getAllHtmlFiles('.');
console.log(`Auditing ${files.length} HTML files for inline hero styles...`);
files.forEach(cleanupHeroInlineStyles);
console.log('Hero Style Cleanup Complete.');
