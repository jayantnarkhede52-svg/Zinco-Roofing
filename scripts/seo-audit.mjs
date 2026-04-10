import fs from 'fs';

const filePath = 'c:\\work\\ZINCO ROOFING WEBSITE\\industrial-roofing-services-navi-mumbai.html';
const content = fs.readFileSync(filePath, 'utf8');

// Strip HTML tags for word count
const textOnly = content.replace(/<[^>]*>?/gm, ' ');
const words = textOnly.split(/\s+/).filter(w => w.length > 0);
const wordCount = words.length;

const keyword = "Industrial Roofing Contractors in Navi Mumbai";
const regex = new RegExp(keyword, 'gi');
const matches = content.match(regex);
const matchCount = matches ? matches.length : 0;

const density = (matchCount * 100) / wordCount;

console.log(`Word Count: ${wordCount}`);
console.log(`Keyword Matches: ${matchCount}`);
console.log(`Keyword Density: ${density.toFixed(2)}%`);
