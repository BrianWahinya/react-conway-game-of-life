export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const genRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const genRandomStr = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomStr += characters.charAt(randomIndex);
  }
  return randomStr;
};

export const genRandomId = () => {
  const timestamp = new Date().getTime();
  const randomInt = genRandomInt(10, 99);
  const randomStr = genRandomStr(3);
  return `${timestamp}_${randomStr}_${randomInt}`;
};

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
  const container = document.getElementsByTagName("main")[0];
  const ctx = canvas.getContext("2d");

  const dpr = container.devicePixelRatio || 1;
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
      ctx.strokeStyle = "#878787";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, cellSize, cellSize);

      ctx.fillStyle = array[i][j] ? "#242424f5" : "#f7f7f7f5";
      ctx.fillRect(x + 1, y + 1, cellSize - 1, cellSize - 1);
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
    case "triangle":
      return generateTrianglePattern(rows, cols);
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
        startJ += 3;
        jValue = jValue ? 0 : 1;
      }
      if (i < rows - (rows % 3) && j < cols - (cols % 3)) {
        row.push(jValue);
      } else {
        row.push(0);
      }
    }
    pattern.push(row);
    if (i === startI) {
      startI += 3;
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
        startJ += 4;
        jValue = jValue || startJ > cols || startI > rows ? 0 : 1;
      }
      row.push(jValue);
    }
    pattern.push(row);
    if (i === startI) {
      startI += 2;
    }
    if (i + 1 === startI) {
      startValue = startValue ? 0 : 1;
    }
  }
  return pattern;
};

const generateTrianglePattern = (rows, cols) => {
  const pattern = [];
  let iTarget = 4;
  let iValue = 1;

  for (let i = 0; i < rows; i++) {
    const row = [];

    let jTarget = { 1: 3, 3: 2, 5: 1, 7: 0 };
    let jValueStart = jTarget[iValue];
    let jValueEnd = jValueStart + { 3: 2, 5: 4 }[iValue];
    for (let j = 0; j < cols; j++) {
      if (iValue === 1) {
        if (j === jValueStart) {
          row.push(1);
          jValueStart += 6;
        } else {
          row.push(0);
        }
      }

      if (iValue === 5) {
        if (j === jValueStart) {
          row.push(1);
        } else if (j === jValueEnd) {
          row.push(1);
          jValueStart += 6;
          jValueEnd = jValueStart + 4;
        } else if (j > jValueStart && j < jValueEnd) {
          row.push(1);
        } else {
          row.push(0);
        }
      }

      if (iValue === 3) {
        if (j === jValueStart) {
          row.push(1);
          jValueStart += 6;
        } else if (j === jValueEnd) {
          row.push(1);
          jValueEnd = jValueStart + 2;
        } else if (j === jValueEnd - 1) {
          row.push(1);
        } else {
          row.push(0);
        }
      }

      if (iValue === 7) {
        row.push(0);
      }
    }

    pattern.push(row);
    if (i < iTarget) {
      iValue += 2;
    }
    if (i + 1 === iTarget) {
      iValue = 1;
      iTarget += 4;
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
