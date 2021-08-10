// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let result = nums[0];
    let max = result;
    let min = max;

    for (let i = 1; i < nums.length; i++) {
        let minc = Math.min(nums[i] * min, nums[i] * max, nums[i]);
        let maxc = Math.max(nums[i] * min, nums[i] * max, nums[i]);

        max = maxc;
        min = minc;

        result = Math.max(max, result);
    }

    return result;
};

const nums = [-2, 1, 4, -7, -8];
const nums1 = [2, 3, -2, 8];

console.log(maxProduct(nums));
console.log(maxProduct(nums1));