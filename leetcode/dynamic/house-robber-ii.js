// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const a = robb(nums, 0, nums.length - 1);
  const b = robb(nums, 1, nums.length);

  return Math.max(a, b);
};

function robb(nums, from, to) {
  let dp = Array(to + 2).fill(0);

  for (let i = from; i < to; i++) {
    dp[i + 2] = Math.max(nums[i], dp[i] + nums[i], dp[i + 1]);
  }

  return dp[dp.length - 1];
}

// console.log(rob([1, 2, 3, 1]));
console.log(rob([10, 20, 140, 3, 200]));
// console.log(rob([1, 3, 1, 3, 100]));
// console.log(rob([200, 3, 140, 20, 10]));
// console.log(rob([2, 3, 4]));
