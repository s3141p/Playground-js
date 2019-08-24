// https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }

    if (root.left && root.right) {
        return Math.min(
            minDepth(root.left),
            minDepth(root.right)
        ) + 1;
    } else {
        return root.left ?
            minDepth(root.left) + 1 :
            minDepth(root.right) + 1;
    }
};


let tree = {
    val: 1,
    left: {
        val: 10,
    },
    right: {
        val: 2
    }
};

console.log(minDepth(tree), 2)
