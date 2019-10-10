// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }
    if (nums.length === 1) {
        return target === nums[0] ? 0 : -1;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = start + Math.trunc((end - start) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[start] <= nums[middle]) {
            if (nums[start] <= target && target < nums[middle]) {
                end = middle;
            } else {
                start = middle + 1;
            }
        } else {
            if (nums[middle] < target && target <= nums[end]) {
                start = middle + 1;
            } else {
                end = middle
            }
        }
    }

    return -1;
};


// console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
console.log(search([1, 3], 3), 1);
