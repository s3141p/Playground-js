// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let node = head;
    let prev;

    while (node) {
        const next = node.next;

        if (prev && prev.val !== node.val) {
            prev.next = node;
            prev = null;
        }

        if (!prev && next && node.val === next.val) {
            prev = node;
            prev.next = null;
        }

        node = next;
    }

    return head;
};

let l1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3
                }
            }
        }
    }
};

let l2 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1,
            next: {
                val: 2,
                next: null
            }
        }
    }
};

// console.log(deleteDuplicates(l1))
console.log(deleteDuplicates(l2))
