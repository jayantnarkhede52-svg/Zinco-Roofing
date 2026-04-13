import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const DOMAIN = 'https://www.zincoroof.com';

async function findHtmlFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    // Exclude node_modules, .git, and admin panel
    if (stat.isDirectory() && !['node_modules', '.git', 'admin', 'templates', 'locations'].includes(file)) {
      await findHtmlFiles(filePath, fileList);
    } else if (stat.isFile() && filePath.endsWith('.html')) {
        // Exclude specific files like 404.html if needed
        if (file !== '404.html' && !filePath.includes('admin')) {
             fileList.push(filePath);
        }
    }
  }

  return fileList;
}

function generateSitemapXml(urls) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  for (const url of urls) {
    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    if (url === DOMAIN || url === DOMAIN + '/') {
        xml += `    <priority>1.0</priority>\n`;
    } else {
        xml += `    <priority>0.8</priority>\n`;
    }
    xml += `  </url>\n`;
  }
  
  xml += `</urlset>`;
  return xml;
}

async function main() {
  try {
    const htmlFiles = await findHtmlFiles(rootDir);
    
    // Convert file paths to URLs
    const urls = htmlFiles.map(filePath => {
      let relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
      if (relativePath === 'index.html') {
        return DOMAIN + '/';
      }
      // Assuming Vercel cleanUrls is true, we remove .html
      relativePath = relativePath.replace(/\.html$/, '');
      return `${DOMAIN}/${relativePath}`;
    });

    // Add roots
    const sitemapXml = generateSitemapXml(urls);
    const sitemapPath = path.join(rootDir, 'sitemap.xml');
    await fs.writeFile(sitemapPath, sitemapXml, 'utf8');
    console.log(`Generated sitemap.xml with ${urls.length} URLs.`);

    // Generate robots.txt too
    const robotsTxt = `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${DOMAIN}/sitemap.xml\n`;
    const robotsPath = path.join(rootDir, 'robots.txt');
    await fs.writeFile(robotsPath, robotsTxt, 'utf8');
    console.log('Generated robots.txt.');

  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

main();
