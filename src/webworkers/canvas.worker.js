self.onmessage = (e) => {
  const { canvas, cellSize } = e.data;

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Draw the cells
  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      ctx.fillStyle = Math.random() > 0.5 ? "black" : "white";
      ctx.fillRect(x, y, cellSize, cellSize);
      ctx.strokeStyle = "grey";
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }

  self.postMessage("Rendered");
};
