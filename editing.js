 // Assume you already have PNG in base64
const binary = atob(base64data.split(',')[1]);
const bytes = new Uint8Array(binary.length);
for (let i = 0; i < binary.length; i++) {
  bytes[i] = binary.charCodeAt(i);
}

const png = UPNG.decode(bytes.buffer);   // decode PNG
const rgba = UPNG.toRGBA8(png)[0];      // get raw pixel bytes
console.log(rgba); // Uint8Array of [R,G,B,A,R,G,B,A,...]
