class RingBuffer {
    constructor(size) {
        this.index = 0;
        this.buffer = [];
        this.size = size;

    }

    get(key) {
        return this.buffer[key];
    }

    push(item) {
        this.buffer[this.index] = item;
        this.index = (this.index + 1) % this.size;
        return item;
    }
}

const ring = new RingBuffer(5);

ring.push(1)
ring.push(2)
ring.push(3)
ring.push(4)
ring.push(5)

console.log(ring.buffer);

ring.push(6)

console.log(ring.buffer);