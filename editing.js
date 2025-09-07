// Example: your JSON object loaded in JS
const backgrounds = {
  "1": "10101010 11110000 00001111 ...",
  "2": "..."
};

// Function to convert bit strings to decimal arrays
function convertToArray(bg) {
  const result = {};
  for (const key in bg) {
    const bitString = bg[key].replace(/ /g, ''); // remove spaces
    const byteCount = bitString.length / 8;
    const byteArray = [];
    for (let i = 0; i < byteCount; i++) {
      const byteBits = bitString.slice(i * 8, i * 8 + 8);
      byteArray.push(parseInt(byteBits, 2));
    }
    result[key] = byteArray;
  }
  return result;
}

// Convert
const converted = convertToArray(backgrounds);

// Output to console
console.log(JSON.stringify(converted, null, 2));
