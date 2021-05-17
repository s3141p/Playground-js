// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};

  nums.forEach((item, index) => {
    hash[item] = index;
  });

  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (hash[remain] >= 0 && hash[remain] !== i) {
      return [i, hash[remain]];
    }
  }
};
