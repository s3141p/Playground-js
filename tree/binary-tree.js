const print = require('./print-btree');

class BinaryTree {

    constructor() {
        this.root = null;
    }

    add(val) {
        let parent = null;
        let node = this.root;

        while (node != null) {
            parent = node;
            if (val < node.val) {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        if (parent === null) {
            this.root = {
                val,
                parent: null,
            }
            return;
        }

        if (val < parent.val) {
            parent.left = {
                val,
                parent,
            }
        } else {
            parent.right = {
                val,
                parent,
            }
        }
    }

    transplant(a, b) {
        if (a.parent == null) {
            this.root = b;
        } else if (a.parent.left === a) {
            a.parent.left = b;
        } else {
            a.parent.right = b
        }

        if (b !== null) {
            b.parent = a.parent;
        }
    }
}


const tree = new BinaryTree();

tree.add(10);
tree.add(30);
tree.add(3);

print(tree.root);
