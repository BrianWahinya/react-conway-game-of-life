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
