/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const nodes = [];

    while (head) {
        nodes.push(head);
        head = head.next;
    }

    let left = 0, right = nodes.length - 1;

    while (left < right) {
        nodes[left].next = nodes[right];
        left++;
        nodes[right].next = nodes[left];
        right--;
    }

    nodes[left].next = null

    return nodes[0];
};


const a = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

const b = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const c = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}

const res = reorderList(a);
const res1 = reorderList(b);
const res2 = reorderList(c);

console.log(res1)
