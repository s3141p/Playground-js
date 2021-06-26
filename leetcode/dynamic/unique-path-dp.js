// https://leetcode.com/problems/unique-paths/submissions/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
    const dp = Array(m).fill(0).map((i, index) => Array(n - 1).fill(index === m - 1 ? 1 : 0).concat([1]));


    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[i][j] = (dp[i + 1][j]) + (dp[i][j + 1]);
        }
    }


    return dp[0][0];
};

console.log(uniquePaths(3, 7));