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
      
      if (content.includes('**')) {
        // Replace double asterisks with empty string
        content = content.replace(/\*\*/g, '');
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`Removed asterisks from: ${filePath}`);
      }
    }
  }
}

async function main() {
  try {
    await processDirectory(rootDir);
    console.log('All asterisks removed.');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
