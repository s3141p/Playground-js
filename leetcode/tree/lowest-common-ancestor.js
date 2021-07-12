// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/

const { deserializeBtreeBFS } = require('../../tree/deserialize-btree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function traverse(node) {
        if (!node) {
            return null;
        }

        if (node === p || node === q) {
            return node;
        }

        const left = traverse(node.left);
        const right = traverse(node.right);

        return left && right ? node : left || right;
    }

    return traverse(root, p, q);
};



const tree = deserializeBtreeBFS([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

console.log(lowestCommonAncestor(tree, 5, 1));