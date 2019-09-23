// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let sq = 0;

    while (start !== end) {
        const range = end - start;
        const currentSq = Math.min(height[end], height[start]) * range;
        sq = sq > currentSq ? sq : currentSq;
        height[start] > height[end] ? end-- : start++;
    }
    return sq
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
console.log(maxArea([1, 8]), 1);
