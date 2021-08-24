// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let preIndex = 0;

    function helper(start, end) {
        if (start >= end) {
            return null
        }

        const val = preorder[preIndex++];
        const rootIdx = inorder.indexOf(val);
        const node = {
            val
        };

        node.left = helper(start, rootIdx);
        node.right = helper(rootIdx + 1, end);

        return node;
    }

    return helper(0, preorder.length);
};

const preorde = [3, 7];
const inorder = [3, 7]


console.log(buildTree(preorde, inorder))