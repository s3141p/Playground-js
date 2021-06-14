function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createNode(arr, index) {
  if (!arr[index]) {
    return;
  }

  return new TreeNode(arr[index]);
}

function deserializeBtreeBFS(arr) {
  if (!arr.length === 0) {
    return null;
  }

  let i = 1;
  const root = createNode(arr, 0);
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    node.left = createNode(arr, i);
    if (node.left) {
      queue.push(node.left);
    }

    node.right = createNode(arr, i + 1);
    if (node.right) {
      queue.push(node.right);
    }
    i += 2;
  }

  return root;
}

const res = deserializeBtreeBFS([1, 2, 2, 3, 4, 4, 3]);

exports.deserializeBtreeBFS = deserializeBtreeBFS;
