// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, index = 0, cache = {}) {
    if (cache[index]) {
        return cache[index];
    }

    if (nums.length - 1 === index) {
        return true;
    }

    if (index > nums.length) {
        return false;
    }

    if (nums[index] === 0) {
        return false;
    }

    for (let i = nums[index]; i >= 1; i--) {
        let next = index + i;
        cache[next] = canJump(nums, next, cache);

        if (cache[next]) {
            return true;
        }
    }

    return false;
};

let cache = {}

console.log(canJump([3, 2, 1, 0, 4], 0, cache));
