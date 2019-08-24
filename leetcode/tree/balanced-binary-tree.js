// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return recur(root) !== -1;

    function recur(node) {
        if (node == null) {
            return 0;
        }

        let leftHeight = recur(node.left);
        if (leftHeight === -1) {
            return -1;
        }

        let rightHeight = recur(node.right);
        if (rightHeight === -1) {
            return -1;
        }

        if (Math.abs(leftHeight - rightHeight) < 2) {
            return Math.max(leftHeight, rightHeight) + 1;
        }

        return -1;
    }

};

let tree = {
    val: 1,
    left: {
        val: 10,
        right: {
            val: 20
        }
    },
    right: {
        val: 2,
        right: {
            val: 3,
        }
    }
};

console.log(isBalanced(tree))
