function dostuff() {
  fetch('background.json')
    .then(response => response.json())
    .then(data => {
      for (let key in data) {
        if (key === "1" || key === "2" || key === "3") {
          const base64data = data[key];

          // Remove "data:image/png;base64," prefix if present
          const cleanBase64 = base64data.split(',')[1] || base64data;

          // Convert base64 → RGBA using canvas
          const img = new Image();
          img.src = 'data:image/png;base64,' + cleanBase64;

          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            console.log("Decoded background", key, imageData.data);
          };

          img.onerror = (err) => {
            console.error("Image failed to load for key", key, err);
          };
        }
      }
    })
    .catch(err => console.error("Error fetching JSON:", err));
}

dostuff();
