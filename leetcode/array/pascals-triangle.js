// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) {
        return [];
    }

    const triangle = [
        [1]
    ];

    for (let i = 1; i < numRows; i++) {
        const level = [];
        const levelLength = i + 1;
        const prevLevel = triangle[i - 1];

        for (let j = 0; j < levelLength; j++) {

            const val = j > 0 && j < levelLength - 1
                ? prevLevel[j] + prevLevel[j - 1]
                : 1;

            level.push(val);
        }
        triangle.push(level);
    }
    return triangle;
};

console.log(generate(3))
