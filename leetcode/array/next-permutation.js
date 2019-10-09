// https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let start;
    let end;

    for (let i = nums.length - 1; i > 0; i--) {
        let j = i - 1;

        if (nums[j] < nums[i]) {
            start = j;

            for (let k = nums.length - 1; k > start; k--) {
                if (nums[k] > nums[start]) {
                    end = k;
                    break;
                }
            }

            [nums[start], nums[end]] = [nums[end], nums[start]];
            reverse(nums, start + 1, nums.length - 1);
            return nums;
        }

    }

    if (!start) {
        nums.reverse();
    }
};

function reverse(nums, left, right) {
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

console.log(nextPermutation([1, 2, 3]), [1, 3, 2]);




