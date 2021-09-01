// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;

    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};

let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4
        }
    }
};

console.log(reverseList(l1));
