const { deserializeBtreeBFS } = require('../../tree/deserialize-btree');

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = Number.MIN_SAFE_INTEGER;

    function traverse(node) {
        if (!node) {
            return 0;
        }

        let maxLeft = traverse(node.left);
        let maxRight = traverse(node.right);

        max = Math.max(max, maxLeft + maxRight)

        return Math.max(maxLeft, maxRight) + 1;
    }

    traverse(root);

    return max;
};

const tree = deserializeBtreeBFS([1, 2, 3, 4, 5]);
console.log(diameterOfBinaryTree(tree));
