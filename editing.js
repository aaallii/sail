// Fetch your background JSON
fetch('background.json')
  .then(res => res.json())
  .then(backgrounds => {
    
    // Convert function
    function convertToArray(bg) {
      const result = {};
      for (const key in bg) {
        const bitsArray = bg[key].trim().split(/\s+/).filter(s => s.length === 8);
        const byteArray = bitsArray.map(bits => parseInt(bits, 2));
        result[key] = byteArray;
      }
      return result;
    }

    const converted = convertToArray(backgrounds);

    // Output to console so you can copy manually
    console.log(JSON.stringify(converted, null, 2));
  })
  .catch(err => console.error('Failed to fetch JSON:', err));
