/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums, left = 0, right = nums.length) {
    if (left >= right) {
        return null;
    }

    const mid = left + Math.floor((right - left) / 2);

    const node = {
        val: nums[mid],
        left: sortedArrayToBST(nums, left, mid),
        right: sortedArrayToBST(nums, mid + 1, right)
    }

    return node;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
