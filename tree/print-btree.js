const { deserializeBtreeBFS } = require('./deserialize-btree');

function printBtree(node) {
  if (!node) {
    return;
  }

  const queue = [node];
  let length = queue.length;
  let level = '';

  while (queue.length > 0) {
    const item = queue.shift();

    length--;
    level += item.val + ','

    if (item.left) {
      queue.push(item.left);
    }

    if (item.right) {
      queue.push(item.right);
    }

    if (length === 0) {
      console.log(level);
      level = '';
      length = queue.length;
    }
  }

}

const res = printBtree(deserializeBtreeBFS([1, 2, 2, 3, 4, 4, 3]));
