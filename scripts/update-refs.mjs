import fs from 'fs';
import path from 'path';

// Files and patterns to replace
const replacements = [
  // Gallery images
  ['warehouse_exterior_sunset.png', 'warehouse_exterior_sunset.webp'],
  ['peb_structure_detail.png', 'peb_structure_detail.webp'],
  ['warehouse_interior_skylights.png', 'warehouse_interior_skylights.webp'],
  ['roof_installation_progress.png', 'roof_installation_progress.webp'],
  // Large standalone PNGs
  ['industrial-panorama.png', 'industrial-panorama.webp'],
  ['precision-installation.png', 'precision-installation.webp'],
  ['worker-safety.png', 'worker-safety.webp'],
  // Product PNGs
  ['blue-factory-roof.png', 'blue-factory-roof.webp'],
  ['color-coated-roof.png', 'color-coated-roof.webp'],
  ['color-coated-stack.png', 'color-coated-stack.webp'],
  ['color-coated-stock.png', 'color-coated-stock.webp'],
  ['decking-construction.png', 'decking-construction.webp'],
  ['decking-stack.png', 'decking-stack.webp'],
  ['multiwall-blue-closeup.png', 'multiwall-blue-closeup.webp'],
  ['multiwall-canopy.png', 'multiwall-canopy.webp'],
  ['polycarbonate-embossed.png', 'polycarbonate-embossed.webp'],
  ['polycarbonate-skylight.png', 'polycarbonate-skylight.webp'],
  ['puf-cold-storage.png', 'puf-cold-storage.webp'],
  ['puf-roof-installation.png', 'puf-roof-installation.webp'],
  ['upvc-rib-profile.png', 'upvc-rib-profile.webp'],
  ['upvc-warehouse.png', 'upvc-warehouse.webp'],
];

// Also remove SVG filter definitions from HTML files
const svgFilterPattern = /\s*<svg style="position: absolute;[^]*?<\/svg>\s*/g;

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !['node_modules', '.git', 'dist'].includes(file)) {
      processDir(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const [from, to] of replacements) {
        if (content.includes(from)) {
          content = content.replaceAll(from, to);
          changed = true;
        }
      }

      // Remove SVG filter definitions (the feTurbulence electric-lightning filter)
      if (content.includes('electric-lightning')) {
        content = content.replace(svgFilterPattern, '\n');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Updated: ${fullPath}`);
      }
    }
  }
}

processDir('.');
console.log('\n✅ All HTML files updated!');
