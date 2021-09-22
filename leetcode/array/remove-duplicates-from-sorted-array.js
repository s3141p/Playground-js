// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let nextIndex = 1;
    let lastItem = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== lastItem) {
            lastItem = nums[i];
            nums[nextIndex++] = nums[i];
            continue;
        }

        nums[i] = null;
    }

    return nextIndex;
};

console.log(removeDuplicates([1, 1, 2]));