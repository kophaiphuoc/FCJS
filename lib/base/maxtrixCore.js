function createMatrix(rows, columns) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}

function createRandomMatrix(rows, columns, minValue, maxValue) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const randomValue =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      row.push(randomValue);
    }
    matrix.push(row);
  }
  return matrix;
}

function sumMatrix(matrix) {
  let sum = 0;
  for (const row of matrix) {
    for (const element of row) {
      sum += element;
    }
  }
  return sum;
}

function sumMatrixByRow(matrix) {
  const sums = [];
  for (const row of matrix) {
    const rowSum = row.reduce((acc, val) => acc + val, 0);
    sums.push(rowSum);
  }
  return sums;
}

function sumMatrixByColumn(matrix) {
  const sums = [];
  const columnCount = matrix[0].length;
  for (let j = 0; j < columnCount; j++) {
    let columnSum = 0;
    for (const row of matrix) {
      columnSum += row[j];
    }
    sums.push(columnSum);
  }
  return sums;
}

function getElement(matrix, row, column) {
  return matrix[row][column];
}
