// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [1];

  for (let i = 0; i < nums.length - 1; i++) {
    result[i + 1] = result[i] * nums[i];
  }

  let prev = 1;

  for (let i = nums.length - 1; i > 0; i--) {
    prev *= nums[i];
    result[i - 1] = result[i - 1] * prev;
  }

  return result;
};

const res = productExceptSelf([1, 2, 3, 4]);
const res1 = productExceptSelf([-1,1,0,-3,3]);
