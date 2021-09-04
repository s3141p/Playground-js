// https://leetcode.com/problems/top-k-frequent-elements/


class MaxHeap {
    constructor() {
        this.items = [];
    }

    remove() {
        const max = this.items[0];

        if (this.items.length === 0) {
            return max;
        }

        this.items[0] = this.items.pop();
        let parent = 0;

        while (this.hasLeftChild(parent)) {
            let left = this.leftChild(parent);
            let right = this.rightChild(parent);

            if (!this.hasRightChild(parent) && this.isBigger(left, parent)) {
                this.swap(parent, left);
                parent = left;
                continue;
            }

            if (this.hasRightChild(parent) && (this.isBigger(left, parent) || this.isBigger(right, parent))) {
                const bigger = this.isBigger(left, right) ? left : right;
                this.swap(bigger, parent);
                parent = bigger;
                continue;
            }

            break;
        }

        return max;
    }

    add(item) {
        this.items.push(item);

        if (this.items.length === 1) {
            return;
        }

        let child = this.items.length - 1;
        let parent = this.parentIndex(child);

        while (parent >= 0 && this.isBigger(child, parent)) {
            this.swap(parent, child);
            child = parent;
            parent = this.parentIndex(child);
        }
    }

    leftChild(index) {
        return (index * 2) + 1;
    }

    rightChild(index) {
        return (index * 2) + 2;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    isBigger(a, b) {
        return this.items[a].val > this.items[b].val;
    }

    hasLeftChild(index) {
        const left = this.leftChild(index);
        return this.items[left] != null;
    }

    hasRightChild(index) {
        const right = this.rightChild(index);
        return this.items[right] != null;
    }

    swap(a, b) {
        let tmp = this.items[a];
        this.items[a] = this.items[b];
        this.items[b] = tmp;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    let heap = new MaxHeap();
    let result = []

    for (let num of nums) {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    }

    for (let val of map) {
        heap.add({ num: val[0], val: val[1] })
    }

    for (let i = 1; i <= k; i++) {
        result.push(heap.remove().num)
    }

    return result
};

console.log(topKFrequent([2, 2, 2, 1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([3, 0, 1, 0], 1))

// const heap = new MaxHeap();

// heap.add({ num: 3, val: 1 })
// heap.add({ num: 0, val: 2 })
// heap.add({ num: 1, val: 1 })

// console.log(heap.items)