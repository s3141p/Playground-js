// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let len = nums.length;
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < len; i++) {
    let num = nums[i]; // 4
    let currMax = Math.max(prevMax * num, num, prevMin * num); // 4
    let currMin = Math.min(prevMin * num, num, prevMax * num); // -2

    prevMax = currMax;
    prevMin = currMin;

    result = Math.max(result, currMax);
  }

  return result;
};
