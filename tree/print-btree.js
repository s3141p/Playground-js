const { deserializeBtreeBFS } = require('./deserialize-btree');

function printBtree(node) {
  if (!node) {
    return;
  }

  let level = '';
  const queue = [node, '-'];

  while (true) {
    const current = queue.shift();

    if (current === '-') {
      console.log(level, '⤵');
      level = '';

      if (queue.length === 0) {
        return;
      }

      queue.push('-');

      continue;
    }

    level += current.val;

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }
}

const res = printBtree(deserializeBtreeBFS([1, 2, 2, 3, 4, 4, 3]));
