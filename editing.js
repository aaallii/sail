//delete this file after usage
const fs = require('fs');

// Load your existing JSON
const rawData = fs.readFileSync('background.json', 'utf-8');
const backgrounds = JSON.parse(rawData);

const newBackgrounds = {};

// Iterate over each background
for (const key in backgrounds) {
    const bitString = backgrounds[key].replace(/ /g, ''); // remove spaces
    const byteCount = bitString.length / 8;
    const byteArray = [];

    for (let i = 0; i < byteCount; i++) {
        const byteBits = bitString.slice(i * 8, i * 8 + 8);
        byteArray.push(parseInt(byteBits, 2));
    }

    newBackgrounds[key] = byteArray; // store as array of decimals
}

// Write back to a new JSON file
fs.writeFileSync('background_array.json', JSON.stringify(newBackgrounds, null, 2));
console.log('Conversion complete! Saved to background_array.json');
