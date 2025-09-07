function dostuff(){
fetch('background.json')
  .then(response => response.json())
  .then(data => {
    for (let key in data) {
      if (key === "1" || key === "2" || key === "3") {
        const base64data = data[key];

        // Remove the "data:image/png;base64," prefix if present
        const cleanBase64 = base64data.split(',')[1] || base64data;

        // Decode base64 → binary
        const binary = atob(cleanBase64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }

        // Decode PNG → raw RGBA
        const png = UPNG.decode(bytes.buffer);
        const rgba = UPNG.toRGBA8(png)[0];

        console.log("Decoded background", key, rgba);
      }
    }
  })
  .catch(err => console.error("Error fetching JSON:", err));
}
dostuff()
