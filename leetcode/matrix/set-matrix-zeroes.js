// https://leetcode.com/problems/set-matrix-zeroes/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const zeroes = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroes.push([i, j]);
            }
        }
    }

    for (let k = 0; k < zeroes.length; k++) {
        const [i, j] = zeroes[k];

        for (let top = i - 1; top >= 0; top--) {
            matrix[top][j] = 0;
        }

        for (let bottom = i + 1; bottom < matrix.length; bottom++) {
            matrix[bottom][j] = 0;
        }

        for (let left = j - 1; left >= 0; left--) {
            matrix[i][left] = 0;
        }

        for (let right = j + 1; right < matrix[0].length; right++) {
            matrix[i][right] = 0;
        }

    }

    return matrix;
};

console.log(setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]));
