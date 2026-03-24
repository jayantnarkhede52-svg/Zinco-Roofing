/**
 * Post-build script: Injects page-specific SEO meta tags into each prerendered index.html.
 * 
 * The JSDOM prerenderer creates the folder structure but doesn't execute React,
 * so react-helmet-async never fires. This script replaces the default meta tags
 * with page-specific title, description, keywords, and canonical URL.
 * 
 * Usage: node scripts/inject-seo.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const DIST = join(import.meta.dirname, '..', 'dist');
const SITE_URL = 'https://www.zincoroof.com';

// All routes with their SEO data (matching the keywords from each page's <SEO> component)
const pages = [
  {
    route: '/',
    title: 'Roofing Contractor in Navi Mumbai | Zinco Roofing Solutions',
    description: 'Trusted roofing contractor in Navi Mumbai. Zinco Roofing provides industrial roofing, ventilators, and repair services with free site visits.',
    keywords: 'roofing contractor in navi mumbai, industrial roofing navi mumbai, roofing sheets suppliers mumbai, puf panel manufacturer near me'
  },
  {
    route: '/industrial-roofing-projects-navi-mumbai',
    title: 'Industrial Roofing Projects in Navi Mumbai | Zinco Roofing',
    description: 'Completed industrial roofing projects in Navi Mumbai. Zinco Roofing delivers premium warehouse, factory, and commercial roofing solutions.',
    keywords: 'Industrial Roofing Projects in Navi Mumbai, industrial roofing portfolio, warehouse roofing projects, metal roofing gallery'
  },
  {
    route: '/industrial-roofing-services-navi-mumbai',
    title: 'Industrial Roofing Services in Navi Mumbai | Zinco Roofing',
    description: 'Professional industrial roofing services. Zinco Roofing offers installation, waterproofing, repair, and structural roofing in Navi Mumbai.',
    keywords: 'Industrial Roofing Services in Navi Mumbai, industrial roofing installation, roof waterproofing, structural roofing solutions, Navi Mumbai roofing'
  },
  {
    route: '/premium-roofing-sheets-navi-mumbai',
    title: 'Premium Roofing Sheets in Navi Mumbai | Zinco Roofing',
    description: 'Buy premium roofing sheets in Navi Mumbai. Zinco Roofing supplies metal, UPVC, and polycarbonate sheets for industrial and commercial use.',
    keywords: 'Premium Roofing Sheets in Navi Mumbai, metal roofing sheets, UPVC roofing, polycarbonate sheets, industrial roofing solutions'
  },
  {
    route: '/gallery',
    title: 'Roofing Project Gallery | Zinco Roofing Solutions',
    description: 'Explore our portfolio of industrial and commercial roofing projects in Navi Mumbai, Mumbai, and Thane. See our metal roofing and PUF panels.',
    keywords: 'roofing project gallery, industrial roofing photos, roofing portfolio navi mumbai, metal roofing projects, puf panel installation gallery'
  },
  {
    route: '/contact',
    title: 'Contact Us | Zinco Roofing Solutions',
    description: 'Contact Zinco Roofing for a free roofing quote and consultation. We serve Navi Mumbai, Mumbai, Thane, and surrounding industrial areas.',
    keywords: 'contact roofing contractors, get roofing quote, roofing consultants navi mumbai'
  },
  {
    route: '/areas',
    title: 'Service Areas | Zinco Roofing Solutions',
    description: 'Zinco Roofing serves Navi Mumbai, Mumbai, Thane, Panvel, Taloja, Ambarnath, and Dombivli industrial areas.',
    keywords: 'industrial roofing contractors, factory shed contractors navi mumbai, mumbai industrial roofing, taloja midc roofing, puf panel manufacturer'
  },
  {
    route: '/privacy-policy',
    title: 'Privacy Policy | Zinco Roofing Solutions',
    description: 'Read Zinco Roofing Solutions privacy policy. Learn how we collect, use and protect your data.',
    keywords: 'zinco roofing privacy policy'
  },
  {
    route: '/terms-of-service',
    title: 'Terms of Service | Zinco Roofing Solutions',
    description: 'Read Zinco Roofing Solutions terms of service. Understand our policies and guidelines.',
    keywords: 'zinco roofing terms of service'
  },

  // ==================== PRODUCT PAGES ====================
  {
    route: '/products/roofing-metal-sheets',
    title: 'Colour Coated Roofing Metal Sheets | Zinco Roofing',
    description: 'Buy colour coated PPGI roofing metal sheets in Navi Mumbai. Durable, weather-resistant industrial roofing sheets from Zinco Roofing.',
    keywords: 'colour coated roofing sheets, ppgi sheets manufacturer, metal roofing sheets navi mumbai, industrial roofing sheets'
  },
  {
    route: '/products/insulated-sheets',
    title: 'PUF Insulated Sheets & Panels | Zinco Roofing',
    description: 'Buy PUF insulated sheets and panels in Navi Mumbai. Ideal for cold storage, factories and warehouses. Zinco Roofing - trusted supplier.',
    keywords: 'puf insulated sheets, puf panels navi mumbai, cold storage panels, insulated roofing sheets'
  },
  {
    route: '/products/roofing-accessories',
    title: 'Roofing Accessories | Zinco Roofing',
    description: 'Buy roofing accessories in Navi Mumbai - turbo ventilators, gutters, ridges, screws and more from Zinco Roofing.',
    keywords: 'roofing accessories, turbo ventilators, gutters, roofing screws, ridges'
  },
  {
    route: '/products/pvc-upvc-sheets',
    title: 'PVC & UPVC Roofing Sheets | Zinco Roofing',
    description: 'Buy PVC and UPVC roofing sheets in Mumbai. Chemical resistant, durable plastic roofing sheets from Zinco Roofing.',
    keywords: 'upvc roofing sheets, pvc roofing, chemical resistant roofing, plastic roofing sheets mumbai'
  },
  {
    route: '/products/purlins',
    title: 'C & Z Purlins - Galvanized Steel | Zinco Roofing',
    description: 'Buy C purlins and Z purlins in Navi Mumbai. Galvanized steel structural members for PEB and industrial sheds.',
    keywords: 'c purlins, z purlins, galvanized purlins, structural steel navi mumbai, peb structural members'
  },
  {
    route: '/products/polycarbonate-sheets',
    title: 'Polycarbonate Sheets in Navi Mumbai | Zinco Roofing',
    description: 'Buy polycarbonate sheets in Navi Mumbai. High rib transparent roofing sheets for industrial skylights from Zinco Roofing.',
    keywords: 'polycarbonate sheets navi mumbai, high rib polycarbonate, industrial skylights, transparent roofing sheets'
  },
  {
    route: '/products/ventilators',
    title: 'Roof Ventilator in Navi Mumbai | Zinco Roofing',
    description: 'Buy turbo roof ventilators in Navi Mumbai at best price. Industrial ventilation systems from Zinco Roofing Solutions.',
    keywords: 'Roof Ventilator in Navi Mumbai, turbo ventilators navi mumbai, roof ventilators in Navi Mumbai, Industrial ventilation system, Roof Ventilator Price in Navi Mumbai'
  },
  {
    route: '/products/peb-fabrication',
    title: 'PEB Structure Fabrication | Zinco Roofing',
    description: 'PEB structure fabrication and industrial shed construction in Mumbai. Pre-engineered building contractors - Zinco Roofing.',
    keywords: 'peb structure fabrication, industrial shed contractor, pre engineered builders, warehouse construction mumbai'
  },
  {
    route: '/products/decking-sheet',
    title: 'Metal Decking Sheets | Zinco Roofing',
    description: 'Buy metal decking sheets and composite flooring sheets in Mumbai. Floor decking profiles from Zinco Roofing.',
    keywords: 'metal decking sheets, composite flooring sheets, decking profile, floor decking mumbai'
  },
  {
    route: '/products/shingles',
    title: 'Roofing Shingles in Mumbai | Zinco Roofing',
    description: 'Buy asphalt roofing shingles in Mumbai. Ideal for villas, resorts, and bungalows. Expert shingle roof contractors - Zinco Roofing.',
    keywords: 'roofing shingles mumbai, asphalt shingles, villa roofing, resort roofing lonavala, shingle roof contractors'
  },
  {
    route: '/products/metal-tile-sheet',
    title: 'Metal Tile Sheets - Mangalore Profile | Zinco Roofing',
    description: 'Buy metal tile sheets with Mangalore tile profile. Metal roofing tiles for resorts in Alibaug from Zinco Roofing.',
    keywords: 'metal tile sheets, mangalore tile profile, metal roofing tiles, resort roofing alibaug'
  },
  {
    route: '/products/rockwool-glasswool',
    title: 'Rockwool & Glasswool Panels | Zinco Roofing',
    description: 'Buy fire-resistant rockwool and glasswool insulation panels in Mumbai. Acoustic and thermal insulation from Zinco Roofing.',
    keywords: 'rockwool panels, glasswool insulation, fire resistant roofing, acoustic roof panels mumbai, industrial insulation'
  },
  {
    route: '/products/high-roof-seam',
    title: 'Standing Seam High Roof | Zinco Roofing',
    description: 'Standing seam roofing with concealed fasteners for leak-proof industrial roofing in Mumbai. Zinco Roofing Solutions.',
    keywords: 'standing seam roofing, high roof seam, leak proof roofing, concealed fastener roofing, industrial roofing mumbai'
  },
  {
    route: '/products/aerolam-sheet',
    title: 'Aerolam Insulation Sheet | Zinco Roofing',
    description: 'Buy Aerolam bubble foil insulation sheets in Mumbai. Radiant barrier thermal insulation for roofs from Zinco Roofing.',
    keywords: 'aerolam insulation, bubble foil insulation, radiant barrier, thermal insulation sheet, roof insulation mumbai'
  },
  {
    route: '/products/pvc-tile-sheet',
    title: 'PVC Tile Sheets - Spanish Tile | Zinco Roofing',
    description: 'Buy PVC Spanish tile sheets. Plastic roof tiles for resorts and bungalows in Alibaug and Mumbai from Zinco Roofing.',
    keywords: 'pvc tile sheets, spanish tile roofing, plastic roof tiles, resort roofing alibaug, bungalow roofing mumbai'
  },
  {
    route: '/products/multiwall-sheets',
    title: 'Multiwall Polycarbonate Sheets | Zinco Roofing',
    description: 'Buy multiwall polycarbonate sheets in Mumbai. High rib skylights and industrial daylighting solutions from Zinco Roofing.',
    keywords: 'multiwall polycarbonate sheets, high rib polycarbonate, industrial daylighting, skylight sheets mumbai, polycarbonate roofing'
  },
  {
    route: '/products/upvc-high-rib-sheets',
    title: 'UPVC High Rib Sheets | Zinco Roofing',
    description: 'Buy 3-layer UPVC high rib roofing sheets. Anti-corrosion roofing for chemical factories in Mumbai from Zinco Roofing.',
    keywords: 'upvc roofing sheets, 3 layer upvc sheets, anti corrosion roofing, chemical factory roofing mumbai, upvc high rib'
  },
  {
    route: '/products/synthetic-roof',
    title: 'Synthetic Thatch Roofing | Zinco Roofing',
    description: 'Buy synthetic thatch roofing and artificial shingles for resorts in Mumbai. Eco-friendly roofing from Zinco Roofing.',
    keywords: 'synthetic thatch roofing, synthetic shingles, resort roofing mumbai, artificial thatch, eco friendly roofing'
  },
  {
    route: '/products/upvc-sheets',
    title: 'UPVC Sheets in Navi Mumbai | Zinco Roofing',
    description: 'Buy UPVC plastic roofing sheets in Navi Mumbai. Heat resistant industrial roofing sheets and panels from Zinco Roofing.',
    keywords: 'upvc sheets navi mumbai, plastic roofing sheets, industrial roofing sheets, upvc roof panels, heat resistant roofing'
  },
  {
    route: '/products/structural-painting',
    title: 'Structural & Industrial Painting | Zinco Roofing',
    description: 'Industrial and structural painting services. Epoxy coating and anti-corrosive paint for roofs from Zinco Roofing.',
    keywords: 'industrial painting, structural painting, epoxy coating, anti-corrosive paint, roof painting'
  },
  {
    route: '/products/solar-installation',
    title: 'Solar Panel Installation | Zinco Roofing',
    description: 'Commercial and industrial solar panel installation services. Energy-efficient solar mounting solutions from Zinco Roofing.',
    keywords: 'solar panel installation, commercial solar, industrial solar, energy efficiency, solar mounting'
  },

  // ==================== LOCATION PAGES ====================
  {
    route: '/industrial-roofing-contractors-in-mumbai',
    title: 'Industrial Roofing Contractors in Mumbai | Zinco Roofing',
    description: 'Best industrial roofing contractors in Mumbai. Zinco Roofing provides factory shed roofing, metal sheet installation & repair across Mumbai.',
    keywords: 'Roofing Sheets Mumbai, Industrial Roofing Mumbai'
  },
  {
    route: '/industrial-roofing-contractors-in-panvel',
    title: 'Industrial Roofing Contractors in Panvel | Zinco Roofing',
    description: 'Best industrial roofing contractors in Panvel. Zinco Roofing provides factory shed roofing, metal sheet installation & repair across Panvel MIDC.',
    keywords: 'Roofing Sheets Panvel, Industrial Roofing Panvel'
  },
  {
    route: '/industrial-roofing-contractors-in-thane',
    title: 'Industrial Roofing Contractors in Thane | Zinco Roofing',
    description: 'Best industrial roofing contractors in Thane. Zinco Roofing provides factory shed roofing, metal sheet installation & repair across Thane MIDC.',
    keywords: 'industrial roofing contractors thane, thane midc roofing'
  },
  {
    route: '/industrial-roofing-contractors-in-taloja',
    title: 'Industrial Roofing Contractors in Taloja | Zinco Roofing',
    description: 'Best industrial roofing contractors in Taloja. Zinco Roofing provides factory shed roofing, metal sheet installation & repair across Taloja MIDC.',
    keywords: 'industrial roofing contractors taloja, taloja midc roofing'
  },
  {
    route: '/industrial-roofing-contractors-in-ambarnath',
    title: 'Industrial Roofing Contractors in Ambarnath | Zinco Roofing',
    description: 'Best industrial roofing contractors in Ambarnath. Zinco Roofing provides factory shed roofing, metal sheet installation & repair across Ambarnath MIDC.',
    keywords: 'industrial roofing contractors ambarnath, ambarnath midc roofing'
  },
  {
    route: '/industrial-roofing-contractors-in-navi-mumbai',
    title: 'Industrial Roofing Contractors in Navi Mumbai | Zinco Roofing',
    description: 'Best industrial roofing contractors in Navi Mumbai. Zinco Roofing provides factory shed roofing, roofing sheets & installation across Navi Mumbai.',
    keywords: 'Roofing Sheets Navi Mumbai, Industrial Roofing Navi Mumbai'
  },
  {
    route: '/industrial-roofing-contractors-in-dombivli',
    title: 'Industrial Roofing Contractors in Dombivli | Zinco Roofing',
    description: 'Best industrial roofing contractors in Dombivli. Zinco Roofing provides factory shed roofing, metal sheet installation & repair across Dombivli.',
    keywords: 'Roofing Sheets Dombivli, Industrial Roofing Dombivli'
  },
  {
    route: '/industrial-roofing-contractors-in-lonavla',
    title: 'Industrial Roofing Contractors in Lonavla | Zinco Roofing',
    description: 'Expert industrial roofing contractors in Lonavala. Specializing in leak-proof, weather-resistant roofing and industrial sheds.',
    keywords: 'industrial roofing contractors lonavla, lonavla roofing contractors, factory shed roofing lonavla'
  },
  {
    route: '/industrial-roofing-contractors-in-chakan-pune',
    title: 'Industrial Roofing Contractors in Chakan Pune | Zinco Roofing',
    description: 'Best industrial roofing contractors in Chakan Pune. Specializing in factory sheds, PEB solutions, and industrial fabrication.',
    keywords: 'industrial roofing contractors chakan pune, chakan midc roofing, factory shed contractors chakan'
  },
  {
    route: '/industrial-painting-in-chakan',
    title: 'Industrial Painting in Chakan | Epoxy & Structural Coating',
    description: 'Expert industrial painting in Chakan. Specializing in structural painting, epoxy coatings, and anti-corrosion treatments.',
    keywords: 'industrial painting in chakan, structural painting chakan, epoxy coating chakan midc'
  },
  {
    route: '/puf-panel-manufacturer-navi-mumbai',
    title: 'PUF Panel Manufacturer in Navi Mumbai | Zinco Roofing',
    description: 'Leading PUF panel manufacturer in Navi Mumbai. Buy insulated roofing sheets and PUF panels for cold storage and industrial use.',
    keywords: 'PUF Panel Manufacturer Navi Mumbai, Insulated Roofing Sheets Navi Mumbai'
  },
  {
    route: '/waterproofing-in-navi-mumbai',
    title: 'Waterproofing Services in Navi Mumbai | Zinco Roofing',
    description: 'Expert roof waterproofing and terrace leakage solutions in Navi Mumbai. Stop leaks permanently with Zinco Roofing specialized coatings.',
    keywords: 'waterproofing navi mumbai, roof waterproofing, terrace leakage repair, industrial waterproofing'
  },
  {
    route: '/services/industrial-roof-leak-repair',
    title: 'Industrial Roof Leak Repair Services | Zinco Roofing',
    description: 'Specialized industrial roof leak repair and crack sealing. Stop factory roof leakage instantly with our expert solutions.',
    keywords: 'industrial roof leak repair, repair roof cracks, factory roof leakage, roof crack repair navi mumbai'
  },
  {
    route: '/services/peb-structure-fabrication',
    title: 'PEB Structure Fabrication & Industrial Sheds | Zinco Roofing',
    description: 'Pre-engineered building (PEB) design and fabrication. High-quality industrial shed construction and steel structures.',
    keywords: 'peb structure fabrication, industrial shed construction, pre engineered buildings, steel structure contractors'
  },
  {
    route: '/services/warehouse-roofing-solutions',
    title: 'Warehouse Roofing Solutions | Zinco Roofing',
    description: 'Professional warehouse roofing installation and maintenance. Durable, leak-proof roofing for large logistics and storage facilities.',
    keywords: 'warehouse roofing solutions, logistics center roofing, factory roofing, industrial roof installation'
  },
  {
    route: '/services/metal-roof-installation',
    title: 'Metal Roof Installation & Replacement | Zinco Roofing',
    description: 'Expert metal roof installation for industrial and commercial buildings. High-quality roofing sheets and precision fitting.',
    keywords: 'metal roof installation, roofing sheet replacement, industrial roofing contractors, metal roof fitting'
  },
  {
    route: '/industrial-roofing-cost-calculator',
    title: 'Roofing Cost Calculator | Get Instant Estimate | Zinco Roofing',
    description: 'Estimate your industrial roofing costs instantly with our online calculator. Calculate sq ft rates for metal and UPVC sheets.',
    keywords: 'roofing cost calculator, industrial roofing price, roofing sq ft rate, cost of roofing sheets'
  }
];

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

let updated = 0;
let skipped = 0;

for (const page of pages) {
  const routePath = page.route === '/' ? '' : page.route;
  const htmlPath = join(DIST, routePath, 'index.html');

  if (!existsSync(htmlPath)) {
    console.log(`⚠ SKIP (missing): ${htmlPath}`);
    skipped++;
    continue;
  }

  let html = readFileSync(htmlPath, 'utf-8');
  const titleEscaped = escapeHtml(page.title);
  const descEscaped = escapeHtml(page.description);
  const kwEscaped = escapeHtml(page.keywords);
  const canonicalUrl = `${SITE_URL}${page.route === '/' ? '/' : page.route}`;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${titleEscaped}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${descEscaped}">`
  );

  // Replace meta keywords
  html = html.replace(
    /<meta name="keywords" content="[^"]*">/,
    `<meta name="keywords" content="${kwEscaped}">`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${canonicalUrl}">`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${titleEscaped}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${descEscaped}">`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${canonicalUrl}">`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${titleEscaped}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${descEscaped}">`
  );

  writeFileSync(htmlPath, html);
  console.log(`✓ ${page.route}`);
  updated++;
}

console.log(`\nDone! ${updated} pages updated, ${skipped} skipped.`);
