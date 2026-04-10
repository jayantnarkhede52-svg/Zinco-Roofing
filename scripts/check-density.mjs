import fs from 'fs';

const calculateDensity = (filePath, mainKeyword) => {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    const html = fs.readFileSync(filePath, 'utf8');
    
    // Simplistic HTML stripper
    let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
    text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
    text = text.replace(/<[^>]+>/g, ' ');
    
    // Clean text
    text = text.replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    
    // Calculate total words
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const totalWords = words.length;

    // Count keyword occurrences
    const keywordLower = mainKeyword.toLowerCase();
    const regex = new RegExp(keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = text.match(regex);
    const keywordCount = matches ? matches.length : 0;
    
    // Keyword Phrase Density = (keyword occurrences / (total words - (keyword words - 1) * keyword occurrences))
    // Standard percentage for 3-4 word keywords is just: (appearances / total_words) * 100
    // OR: (appearances * word_count_in_phrase / total_words) * 100
    // Most SEO tools (like Yoast/RankMath) use the exact phrase count divided by total word count:
    const density = ((keywordCount / totalWords) * 100).toFixed(2);

    console.log(`\n--- ${filePath} ---`);
    console.log(`Keyword: "${mainKeyword}"`);
    console.log(`Words: ${totalWords}`);
    console.log(`Occurrences: ${keywordCount}`);
    console.log(`Density (Occurrences/Words): ${density}%`);
    
    // Let's also calculate the "phrase word coverage" density which is (Count * phraseLen) / Total
    const phraseLen = mainKeyword.split(' ').length;
    const phraseDensity = (((keywordCount * phraseLen) / totalWords) * 100).toFixed(2);
    console.log(`Phrase Word Coverage: ${phraseDensity}%`);

    const targetMinOccurrences = Math.ceil((1.3 / 100) * totalWords);
    const targetMaxOccurrences = Math.floor((1.8 / 100) * totalWords);

    console.log(`Target Occurrences for 1.3-1.8%: ${targetMinOccurrences} to ${targetMaxOccurrences}\n`);
};

calculateDensity('dist/index.html', 'Roofing Contractor in Navi Mumbai');
calculateDensity('dist/premium-roofing-sheets-navi-mumbai/index.html', 'Roofing Sheets Navi Mumbai');
calculateDensity('dist/premium-roofing-sheets-navi-mumbai/index.html', 'Roofing Sheets');
