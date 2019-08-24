// https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function (root) {

    const valuesLeft = []
    const valuesRight = [];

    grabValues(root, 'left', 'right', valuesLeft);
    grabValues(root, 'right', 'left', valuesRight);

    function grabValues(node, primaryDir, secondaryDir, arr) {
        if (!node) {
            arr.push(null);
            return;
        }

        arr.push(node.val);
        grabValues(node[primaryDir], primaryDir, secondaryDir, arr);
        grabValues(node[secondaryDir], primaryDir, secondaryDir, arr);
    }

    if (valuesLeft.length != valuesRight.length) {
        return false;
    }

    for (let i = 0; i < valuesLeft.length; i++) {
        if (valuesLeft[i] !== valuesRight[i]) {
            return false;
        }
    }

    return true;
};

var isSymmetricExtended = function (root) {

    function isSym(left, right) {
        if (!left && !right) {
            return true;
        }

        if (left && right) {
            return left.val === right.vall
                && isSym(left.left, right.right)
                && isSym(left.right, right.left)
        }

        return false;
    }
};

let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 5
            }
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 2,
        right: {
            val: 3,
            left: {
                val: 5
            }
        },
        left: {
            val: 4
        }
    }
};

isSymmetricExtended(tree);
