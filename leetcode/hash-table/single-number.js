// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.delete(nums[i])
        } else {
            map.set(nums[i], true);
        }
    }
    return [...map][0][0]
};

console.log(singleNumber([4, 1, 2, 1, 2]), 4)
