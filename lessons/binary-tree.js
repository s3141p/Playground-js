class Node {
    constructor(value, name, parent) {
        this.name = name;
        this.value = value;
        // this.parent = parent;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value, name) {
        if (!this.root) {
            this.root = new Node(value, name, null);
            this.level = 1;
            return this.root;
        }

        let current = this.root;
        let parent = null;
        let level = 1;

        while (true) {
            if (value === current.value) {
                return current;
            }

            if (value < current.value) {
                if (!current.left) {
                    current.left = new Node(value, name, current);
                    this.level = level > this.level ? level : this.level;
                    return current.left;
                } else {
                    level++;
                    current = current.left;
                }
            }

            if (value > current.value) {
                if (!current.right) {
                    current.right = new Node(value, name, current);
                    this.level = level > this.level ? level : this.level;
                    return current.right;
                } else {
                    level++;
                    current = current.right;
                }
            }
        }
    }


    getMinimum(node) {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    getSuccessor(node) {
        if (node.right) {
            return this.getMinimum(node.right);
        }

        let parent = node.parent;

        while (parent != null && parent.right === node) {
            node = parent;
            parent = parent.parent;
        }

        return parent;
    }

    delete(node) {
        let toRemove;
        let toReplace;

        if (node.left === null || node.right === null) {
            toRemove = node;
        } else {
            toRemove = this.getSuccessor(node);
        }

        if (toRemove.left !== null) {
            toReplace = toRemove.left;
        } else {
            toReplace = toRemove.right;
        }

        if (toRemove.parent === null) {
            this.root = toReplace;
        } else if (toRemove === toRemove.parent.left) {
            toRemove.parent.left = toReplace;
        } else {
            toRemove.parent.right = toReplace;
        }

        if (toRemove != node) {
            node.value = toRemove.value;
        }
    }

    print() {
        let result = '';
        let counter = 1;

        const queue = [this.root];

        while (queue.length > 0) {
            const elem = queue.shift();

            result = this.appendValue(elem.value, counter, result)

            if (elem.left) {
                queue.push(elem.left)
            }

            if (elem.right) {
                queue.push(elem.right);
            }

            counter++;
        }
        console.log(result)
    }

    appendValue(value, counter, str) {
        str += ` ${value ? value : 'null'} `;

        if (counter === 1) {
            str += '\n';
        } else if ((Math.log2(counter + 1) % 2 === 0)) {
            str += '\n'
        }

        return str;
    }

    getSomething() {

    }
}

const tree = new BinaryTree();
const node20 = tree.add(20);
const node25 = tree.add(25);
const node16 = tree.add(16);
const node19 = tree.add(19);
const node17 = tree.add(17);
const node14 = tree.add(14);

tree.print()
