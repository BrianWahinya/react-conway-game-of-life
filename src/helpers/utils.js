export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const generateRandomArr = (size) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 2));

export const generateNestedArr = (rows, cols) => {
  const rowsArr = new Array(rows);
  for (let i = 0; i < rowsArr.length; i++) {
    rowsArr[i] = generateRandomArr(cols);
  }
  return rowsArr;
};

export const generateRowsCols = (cellSize, canvas) => {
  const ctx = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const { width, height } = canvas;

  const rows = Math.floor(height / cellSize) - 1;
  const cols = Math.floor(width / cellSize) - 1;
  return { rows, cols, ctx };
};

export const drawOnCanvas = (array, ctx, rows, cols, cellSize) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * cellSize;
      const y = i * cellSize;
      ctx.fillStyle = array[i][j] ? "black" : "white";
      ctx.fillRect(x, y, cellSize, cellSize);
      ctx.strokeStyle = "grey";
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
};

export const checkConwayRules = (array, rows, cols) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (array[i][j] === 1) {
        array[i][j] = 0;
      } else {
        array[i][j] = 1;
      }
    }
  }
  return array;
};

/*
export const drawOffCanvas = (cellSize, canvas) => {
  //   console.time("offcanvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const { width, height } = canvas;

  const rows = Math.floor(height / cellSize);
  const cols = Math.floor(width / cellSize);
  //   console.log({ rows, cols });

  // Create off-screen canvas
  const offscreenCanvas = document.createElement("canvas");
  offscreenCanvas.width = width;
  offscreenCanvas.height = height;
  const offscreenCtx = offscreenCanvas.getContext("2d");

  const array = generateNestedArr(rows, cols);

  // Draw cells on off-screen canvas

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols - 1; j++) {
      const x = j * cellSize;
      const y = i * cellSize;
      offscreenCtx.fillStyle = array[i][j] ? "black" : "white";
      offscreenCtx.fillRect(x, y, cellSize, cellSize);
      offscreenCtx.strokeStyle = "grey";
      offscreenCtx.strokeRect(x, y, cellSize, cellSize);
    }
  }

  // Draw off-screen canvas onto main canvas
  ctx.drawImage(offscreenCanvas, 0, 0);
  //   console.timeEnd("offcanvas");
};
*/
