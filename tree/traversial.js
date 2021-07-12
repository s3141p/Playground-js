const { deserializeBtreeBFS } = require('./deserialize-btree');

function preOrder(node) {
    if (!node) {
        return;
    }

    console.log(node.val);

    preOrder(node.left)
    preOrder(node.right)
}

function inOrder(node) {
    if (!node) {
        return;
    }

    preOrder(node.left)
    console.log(node.val);
    preOrder(node.right)
}

function postOrder(node) {
    if (!node) {
        return;
    }

    preOrder(node.left)
    preOrder(node.right)
    console.log(node.val);
}

const tree = deserializeBtreeBFS([1, 2, 2, 3, 4, 4, 3]);

preOrder(tree);