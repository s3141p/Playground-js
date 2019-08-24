// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let pointer;

    if (nums[0] >= target) {
        return 0;
    }

    if (nums[nums.length - 1] === target) {
        return nums.length - 1;
    }

    if (nums[nums.length - 1] < target) {
        return nums.length;
    }

    while (left <= right) {
        pointer = Math.floor((left + right) / 2);

        if (nums[pointer] < target) {
            left = pointer + 1;
        } else if (nums[pointer] > target) {
            right = pointer - 1;
        } else {
            return pointer;
        }
    }

    return left;
};
// [1, 3, 7, 9, 10, 15, 17, 20, 21], 2


console.log(searchInsert([1, 3, 7, 9, 10, 15, 17, 20, 21], 5), 2);
console.log(searchInsert([1, 3, 5, 6], 5), 2);
console.log(searchInsert([1, 3, 5, 6], 2), 1);
console.log(searchInsert([1, 3, 5, 6], 7), 4);
console.log(searchInsert([1, 3, 5, 6], 0), 0);
console.log(searchInsert([1], 1), 0);
console.log(searchInsert([1, 3], 3), 1);
console.log(searchInsert([1, 3, 5], 4), 2);
console.log(searchInsert([1, 3, 5, 6, 8], 7), 4);

// [1, 3, 5, 6, 7, 120, 90]
