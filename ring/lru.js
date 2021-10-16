class Node {
    constructor(key, value, prev, next) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(key, value) {
        this.size++;

        if (!this.head) {
            const node = new Node(key, value, null, null);
            this.head = node;
            this.tail = node;
        } else {
            const head = this.head;
            const node = new Node(key, value, head, null);
            head.next = this.head = node;
        }

        return this.head;
    }

    remove(node) {
        this.size--;

        if (!node.prev && !node.next) {
            this.tail = null;
            this.head = null;
        } else if (node.next === null) {
            node.prev.next = null;
            this.head = node.prev;
        } else if (node.prev === null) {
            node.next.prev = null;
            this.tail = node.next
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }
}

class LRUCache {

    constructor(size) {
        this.size = size;
        this.list = new DoubleLinkedList();
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);
        this.list.remove(node);
        this.map.set(key, this.list.push(key, node.value));

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.list.remove(this.map.get(key))
        }

        this.map.set(key, this.list.push(key, value));

        if (this.size < this.list.size) {
            this.map.delete(this.list.tail.key)
            this.list.remove(this.list.tail);
        }
    }
}


let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4