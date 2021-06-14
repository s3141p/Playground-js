// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  let r = matrix.length;
  let c = matrix[0].length;
  let max = r * c;
  let [left, right, top, bottom] = [0, c - 1, 0, r - 1];

  while (result.length < max) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }

    top++;

    if (result.length === max) {
      return result;
    }

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    if (result.length === max) {
      return result;
    }

    right--;

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }

    bottom--;

    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }

    left++;
  }
  return result;
};

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const b = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const c = [[7], [9], [6]];
const d = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

// const b = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11, 12],
//   [13, 14, 15, 16, 17, 18],
//   [19, 20, 21, 22, 23, 24],
//   [25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36],
// ];

console.log(spiralOrder([[1], [2], [3], [4]]));
