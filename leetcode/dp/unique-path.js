// https://leetcode.com/problems/unique-paths/submissions/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let right = dp[i + 1] ? dp[i + 1][j] : 0
            let left = dp[i][j + 1] || 0;
            dp[i][j] = (right + left) || 1;
        }
    }

    return dp[0][0];
};

console.log(uniquePaths(3, 7));