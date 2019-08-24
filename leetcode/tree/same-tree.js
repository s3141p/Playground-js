// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === q) {
        return true;
    }

    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left)
            && isSameTree(p.right, q.right);
    }

    return false
};


let tree = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 1
    }
};

let tree1 = {
    val: 1,
    left: {
        val: 1
    },
    right: {
        val: 2
    }
}

let res = isSameTree(tree, tree1);
let res1 = isSameTree(tree, tree);
console.log(res);
console.log(res1);
