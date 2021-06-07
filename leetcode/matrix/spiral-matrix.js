// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  let down = 0;
  let left = 0;
  let maxLength = matrix.length * matrix[0].length;

  goRight(matrix, 0, 0, down, left, result, maxLength);

  return result;
};

function goRight(matrix, m, n, down, left, result, maxLength) {
  let maxN = matrix[0].length - 1 - left;

  for (; n < maxN; n++) {
    result.push(matrix[m][n]);
  }

  if (result.length === maxLength) {
    return;
  }

  goBottom(matrix, m, maxN, down, left, result, maxLength);
}

function goBottom(matrix, m, n, down, left, result, maxLength) {
  let maxM = matrix.length - 1 - down;

  for (; m < maxM - down; m++) {
    result.push(matrix[m][n]);
  }

  down++;

  if (result.length === maxLength) {
    return;
  }

  goLeft(matrix, maxM, n, down, left, result, maxLength);
}

function goLeft(matrix, m, n, down, left, result, maxLength) {
  let minN = 0 + left;

  for (; n > minN; n--) {
    result.push(matrix[m][n]);
  }

  left++;

  if (result.length === maxLength) {
    return;
  }

  goUp(matrix, m, minN, down, left, result, maxLength);
}

function goUp(matrix, m, n, down, left, result, maxLength) {
  let minM = 0 + down;

  for (; m > minM; m--) {
    result.push(matrix[m][n]);
  }

  if (result.length === maxLength) {
    return;
  }

  goRight(matrix, minM, n, down, left, result, maxLength);
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let bottom = 2;

// const b = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11, 12],
//   [13, 14, 15, 16, 17, 18],
//   [19, 20, 21, 22, 23, 24],
//   [25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36],
// ];

console.log(spiralOrder(a));
