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
const isSymmetric = (root) => {
  if(root === null){
    return true
  }

  return check(root.left, root.right);
}

function check(left, right){
  if(left === null && right === null){
    return true;
  }

  if(left && right && left.val === right.val){
    return check(left.left, right.right) && check(left.right, right.left);
  }

  return false;
}
