class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

class List {

    constructor() {
        this.size = 0;
    }

    add(value) {
        if (this.root) {
            this.last.next = new Node(value, this.last);
            this.last = this.last.next;
        } else {
            this.root = new Node(value, null);
            this.last = this.root;
        }
        this.size++;
    }

    removeBy(index) {
        let target = this.getByIndex(index);

        if(!target.prev){
            this.root = target.next;
            this.root.prev = null;
        }

        else if(target.prev && target.next){
            target.prev.next = target.next;
            target.next.prev = target.prev;
        }

        else if(!target.next){
            target.prev.next = null;
        }

        this.size--;
    }


    shouldIterateFromHead(index) {
        return index < this.size / 2;
    }

    getByIndex(index) {
        let current
        if (this.shouldIterateFromHead(index)) {
            current = this.root;
            let i = 0;

            while (i < index) {
                current = current.next;
                i++;
            }
        } else {
            current = this.last;
            let i = this.size - 1;

            while (i > index) {
                current = current.prev;
                i--;
            }
        }
        return current;
    }

    print() {
        let current = this.root;
        let result = [];

        while (true) {
            result.push(current.value);

            if (current.next) {
                current = current.next;
            } else {
                return result;
            }
        }
    }
}

const list = new List();

list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);

list.removeBy(9);
list.removeBy(0);
list.removeBy(3);
console.log(list.print());
