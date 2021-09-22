// https://leetcode.com/problems/unique-paths-ii/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsWithObstacles = function (grid) {
    const dp = new Array(grid.length).fill(0).map(item => new Array(grid[0].length).fill(0));

    if (grid[0][0] === 1) {
        return 0;
    }

    dp[0][0] = 1;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0) {
                dp[i][j] = grid[i][j] === 1 || dp[i][j - 1] === 0 ? 0 : 1;
                continue;
            }

            if (j === 0) {
                dp[i][j] = grid[i][j] === 1 || dp[i - 1][j] === 0 ? 0 : 1;
                continue;
            }

            if (grid[i][j] === 1) {
                dp[i][j] = 0;
                continue;
            }

            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]))