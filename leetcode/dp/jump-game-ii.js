// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums, index = 0, cache = {}) {
    const dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }

    return dp[dp.length - 1];
};

console.log(jump([2, 3, 1, 1, 4]));
// console.log(jump([1, 2, 1, 1, 1]));
