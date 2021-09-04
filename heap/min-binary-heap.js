class MinHeap {
    constructor() {
        this.items = [];
    }

    remove() {
        const lowest = this.items[0];

        if (this.items.length === 0) {
            return lowest;
        }

        this.items[0] = this.items.pop();
        let parent = 0;

        while (this.hasLeftChild(parent)) {
            let left = this.leftChild(parent);
            let right = this.rightChild(parent);

            if (this.items[right] == null && this.isLower(left, parent)) {
                this.swap(parent, left);
                parent = left;
                continue;
            }

            if (this.items[right]) {
                let smallestIndex = this.isLower(left, right) ? left : right;
                if (this.isLower(smallestIndex, parent)) {
                    this.swap(parent, smallestIndex);
                    parent = smallestIndex;
                    continue;
                }
            }

            break;
        }

        return lowest;
    }

    add(value) {
        this.items.push(value);
        let child = this.items.length - 1;
        let parent = this.parentIndex(child);

        while (this.isLower(child, parent)) {
            this.swap(child, parent);
            child = parent;
            parent = this.parentIndex(child);
        }
    }

    hasLeftChild(index) {
        return !!this.items[this.leftChild(index)]
    }

    leftChild(index) {
        return (2 * index) + 1;
    }

    rightChild(index) {
        return (2 * index) + 2;
    }

    parentIndex(index) {
        return Math.floor(index - 1 / 2);
    }

    isLower(a, b) {
        return this.items[a] < this.items[b];
    }

    swap(a, b) {
        let temp = this.items[a];
        this.items[a] = this.items[b];
        this.items[b] = temp;
    }
}

const minHeap = new MinHeap();
minHeap.add(10);
minHeap.add(4);
minHeap.add(15);
minHeap.add(2);

console.log(minHeap.remove())
console.log(minHeap.remove())
console.log(minHeap.remove())
console.log(minHeap.remove())