// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root, accum = []) {
    function traverse(node) {
        if (!node) {
            return
        }

        traverse(node.left);
        traverse(node.right);

        accum.push(node.val);
    }

    traverse(root);

    return accum;
};