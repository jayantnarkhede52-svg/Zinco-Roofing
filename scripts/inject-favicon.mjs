import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

async function processDirectory(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory() && !['node_modules', '.git'].includes(file)) {
      await processDirectory(filePath);
    } else if (stat.isFile() && filePath.endsWith('.html')) {
      let content = await fs.readFile(filePath, 'utf8');
      
      // Determine correct relative path for assets folder
      const relativePathToRoot = path.relative(path.dirname(filePath), rootDir).replace(/\\/g, '/');
      const assetsPrefix = relativePathToRoot === '' ? 'assets' : `${relativePathToRoot}/assets`;
      
      // Favicon tag to insert
      const faviconTag = `<link rel="icon" type="image/png" href="${assetsPrefix}/favicon.png">`;

      // Check if it already has a favicon
      if (!content.includes('rel="icon"')) {
        // Insert right before </head>
        content = content.replace('</head>', `    ${faviconTag}\n</head>`);
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`Injected favicon into: ${filePath}`);
      } else {
        // Replace existing favicon just in case it points to something wrong
        content = content.replace(/<link[^>]*rel="icon"[^>]*>/i, faviconTag);
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`Replaced favicon in: ${filePath}`);
      }
    }
  }
}

async function main() {
  try {
    // 1. Rename existing zinco favicon images to standard favicon names
    const oldPng = path.join(rootDir, 'assets', 'zinco favicon.png');
    const newPng = path.join(rootDir, 'assets', 'favicon.png');
    const oldWebp = path.join(rootDir, 'assets', 'zinco favicon.webp');
    const newWebp = path.join(rootDir, 'assets', 'favicon.webp');

    try {
        await fs.rename(oldPng, newPng);
        console.log('Renamed zinco favicon.png to favicon.png');
    } catch (e) {
        // It might already be renamed
    }
    
    try {
        await fs.rename(oldWebp, newWebp);
        console.log('Renamed zinco favicon.webp to favicon.webp');
    } catch (e) {
    }

    // 2. Process all HTML files to inject the meta tag
    await processDirectory(rootDir);
    console.log('All done.');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
