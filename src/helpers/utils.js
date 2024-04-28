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

const floorToEven = (num) => (num % 2 !== 1 ? num : num - 1);

export const generateRowsCols = (cellSize, canvas) => {
  const ctx = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const { width, height } = canvas;

  const rows = floorToEven(Math.floor(height / cellSize));
  const cols = floorToEven(Math.floor(width / cellSize));
  return { rows, cols, ctx };
};

export const drawOnCanvas = (array, ctx, rows, cols, cellSize) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * cellSize;
      const y = i * cellSize;
      ctx.fillStyle = array[i][j] ? "#242424" : "#f7f7f7";
      ctx.fillRect(x, y, cellSize, cellSize);
      ctx.strokeStyle = "#878787";
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
};

export const checkConwayRules = (array, rows, cols) => {
  const subarray = deepCopy(array);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      subarray[i][j] = conwayRules(array[i][j], i, j, array);
    }
  }
  return subarray;
};

const conwayRules = (elem, row, col, array) => {
  const neighbours = {
    leftTop: array[row - 1]?.[col - 1],
    leftMiddle: array[row]?.[col - 1],
    leftBottom: array[row + 1]?.[col - 1],
    middleTop: array[row - 1]?.[col],
    middleBottom: array[row + 1]?.[col],
    rightTop: array[row - 1]?.[col + 1],
    rightMiddle: array[row]?.[col + 1],
    rightBottom: array[row + 1]?.[col + 1],
  };
  const neighboursAlive = Object.values(neighbours).filter(
    (val) => val === 1
  ).length;

  const isAlive = !!elem;

  // Rule 4: Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction
  if (!isAlive && neighboursAlive === 3) {
    return 1;
  }

  // Rule 3: Any live cell with more than three live neighbors dies, as if by overpopulation.
  if (isAlive && neighboursAlive > 3) {
    return 0;
  }

  // Rule 2: Any live cell with two or three live neighbors lives on to the next generation
  if (isAlive && neighboursAlive >= 2 && neighboursAlive <= 3) {
    return 1;
  }

  // Rule 1: Any live cell with fewer than two live neighbors dies, as if by underpopulation
  if (isAlive && neighboursAlive < 2) {
    return 0;
  }

  return 0;
};

export const generateArrPattern = (pattern, rows, cols) => {
  switch (pattern) {
    case "alternate":
      return generateAlternatePattern(rows, cols);
    case "alternate-rectangle":
      return generateAlternateRectanglePattern(rows, cols);
    case "square":
      return generateSquarePattern(rows, cols);
    case "rectangle":
      return generateRectanglePattern(rows, cols);
    default:
      return generateNestedArr(rows, cols);
  }
};

const generateAlternatePattern = (rows, cols) => {
  const pattern = [];
  let startValue = 1;

  for (let i = 0; i < rows; i++) {
    const row = [];
    let jValue = startValue;
    for (let j = 0; j < cols; j++) {
      row.push(jValue);
      jValue = jValue ? 0 : 1;
    }
    pattern.push(row);
    startValue = i % 2 !== 1 ? 0 : 1;
  }

  return pattern;
};

const generateAlternateRectanglePattern = (rows, cols) => {
  const pattern = [];
  let startI = 0;
  let startValue = 1;

  for (let i = 0; i < rows; i++) {
    const row = [];
    let jValue = startValue;
    for (let j = 0; j < cols; j++) {
      row.push(jValue);
      jValue = jValue ? 0 : 1;
    }
    pattern.push(row);
    if (i === startI) {
      startI = startI + 2;
    }
    if (i + 1 === startI) {
      startValue = startValue ? 0 : 1;
    }
  }

  return pattern;
};

const generateSquarePattern = (rows, cols) => {
  const pattern = [];
  let startI = 0;
  let startValue = 1;

  for (let i = 0; i < rows; i++) {
    const row = [];
    let startJ = 0;
    let jValue = startValue;
    for (let j = 0; j < cols; j++) {
      if (j === startJ) {
        startJ = startJ + 2;
        jValue = jValue ? 0 : 1;
      }

      row.push(jValue);
    }
    pattern.push(row);
    if (i === startI) {
      startI = startI + 2;
    }
    if (i + 1 === startI) {
      startValue = startValue ? 0 : 1;
    }
  }

  return pattern;
};

const generateRectanglePattern = (rows, cols) => {
  const pattern = [];
  let startI = 0;
  let startValue = 1;

  for (let i = 0; i < rows; i++) {
    const row = [];
    let startJ = 0;
    let jValue = startValue;
    for (let j = 0; j < cols; j++) {
      if (j === startJ) {
        startJ = startJ + 4;
        jValue = jValue ? 0 : 1;
      }
      row.push(jValue);
    }
    pattern.push(row);
    if (i === startI) {
      startI = startI + 2;
    }
    if (i + 1 === startI) {
      startValue = startValue ? 0 : 1;
    }
  }
  return pattern;
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
