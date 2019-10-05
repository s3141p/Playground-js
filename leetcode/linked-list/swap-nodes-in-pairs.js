// https://leetcode.com/problems/swap-nodes-in-pairs/

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
const linkedListHelper = require('../linked-list');

// var swapPairs = function (head) {
//     if (!head) {
//         return null;
//     }
//
//     if (!head.next) {
//         return head;
//     }
//
//     let slow = head;
//     let quick = head.next;
//     let remaining = quick.next;
//     let newHead = quick;
//     let newTail = swap(newHead, slow, quick);
//
//     while (remaining) {
//         slow = remaining;
//         quick = remaining.next;
//         remaining = quick ? quick.next : null;
//         newTail = swap(newTail, slow, quick);
//     }
//
//     return newHead;
// };
//
// function swap(tail, slow, quick) {
//     if (quick) {
//         slow.next = null;
//         quick.next = null;
//         tail.next = quick;
//         tail.next.next = slow;
//     } else {
//         tail.next = slow;
//     }
//
//     return slow;
// }

// Recursive
var swapPairs = function (head) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    let first = head;
    let third = head.next.next;
    head = head.next;
    head.next = first;
    head.next.next = swapPairs(third);
    return head;
};


console.log(
    linkedListHelper.linkedListToArray(
        swapPairs(
            linkedListHelper.arrayToLinkedList([1, 2, 3, 4]),
        )
    ),
    [2, 1, 4, 3]
);

console.log(
    linkedListHelper.linkedListToArray(
        swapPairs(
            linkedListHelper.arrayToLinkedList([1, 2, 3]),
        )
    ),
    [2, 1, 3]
);

console.log(
    linkedListHelper.linkedListToArray(
        swapPairs(
            linkedListHelper.arrayToLinkedList([1, 2,]),
        )
    ),
    [2, 1]
);
