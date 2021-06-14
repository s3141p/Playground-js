// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = Array(nums.length + 2).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[i + 2] = Math.max(nums[i], dp[i] + nums[i], dp[i + 1]);
  }

  return dp[dp.length - 1];
};

// console.log(rob([2, 7, 9, 3, 1]), 12);
// console.log(rob([2, 1, 1, 2]), 4);
// console.log(rob([1, 7, 9, 4]), 11);
console.log(rob([1, 2, 3, 1]), 4);
