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
var sortedArrayToBST = function (nums) {
    if (!nums || nums.length === 0) {
        return null;
    }

    const middle = Math.trunc(nums.length / 2);

    return {
        val: nums[middle],
        left: sortedArrayToBST(nums.slice(0, middle)),
        right: sortedArrayToBST(nums.slice(middle + 1))
    }
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
