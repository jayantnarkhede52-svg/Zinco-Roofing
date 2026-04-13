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
      let modified = false;

      // Replace instances of ../src/assets/logo.webp
      if (content.includes('../src/assets/logo.webp')) {
        content = content.replace(/\.\.\/src\/assets\/logo\.webp/g, '../assets/logo.webp');
        modified = true;
      }

      // Replace instances of src/assets/logo.webp
      if (content.includes('src/assets/logo.webp')) {
        content = content.replace(/src="src\/assets\/logo\.webp"/g, 'src="assets/logo.webp"');
        content = content.replace(/'src\/assets\/logo\.webp'/g, "'assets/logo.webp'");
        // Catch-all if it doesn't match the exact src="" quotes
        if (content.includes('src/assets/logo.webp')) {
            content = content.replaceAll('src/assets/logo.webp', 'assets/logo.webp');
        }
        modified = true;
      }

      if (modified) {
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`Fixed logo paths in: ${filePath}`);
      }
    }
  }
}

async function main() {
  try {
    await processDirectory(rootDir);
    console.log('All done.');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
