// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) {
        return []
    }

    let queue = [root];
    const result = [];

    while (queue.length > 0) {
        const row = [];
        const children = [];

        while (queue.length > 0) {
            const node = queue.shift();
            row.push(node.val);

            if (node.val)

                if (node.left) {
                    children.push(node.left);
                }

            if (node.right) {
                children.push(node.right);
            }
        }

        queue = children;
        result.unshift(row);
    }

    return result;
};

let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 2,
        right: {
            val: 3,
        },
        left: {
            val: 4
        }
    }
};

console.log(levelOrderBottom(tree));
