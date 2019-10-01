// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const linkedListHelper = require('../linked-list');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let faster = head;
    let slower = head;
    let index = 0;

    while (faster) {
        faster = faster.next;

        if (index > n) {
            slower = slower.next;
        }

        index++;
    }

    if (index - n === 0) {
        return index === 1
            ? null
            : slower.next
    }

    if (index - n === 1 && index === 2) {
        slower.next = null;
        return slower;
    }

    slower.next = slower.next.next;

    return head;
};

console.log(
    linkedListHelper.linkedListToArray(
        removeNthFromEnd(
            linkedListHelper.arrayToLinkedList([1, 2, 3, 4, 5]),
            2
        ),
    ),
    [1, 2, 3, 5]
)

console.log(
    linkedListHelper.linkedListToArray(
        removeNthFromEnd(
            linkedListHelper.arrayToLinkedList([1, 2, 3, 4, 5]),
            1
        ),
    ),
    [1, 2, 3, 4]
)

console.log(
    linkedListHelper.linkedListToArray(
        removeNthFromEnd(
            linkedListHelper.arrayToLinkedList([1]),
            1
        ),
    ),
    []
);

console.log(
    linkedListHelper.linkedListToArray(
        removeNthFromEnd(
            linkedListHelper.arrayToLinkedList([1, 2]),
            2
        ),
    ),
    [2]
);

console.log(
    linkedListHelper.linkedListToArray(
        removeNthFromEnd(
            linkedListHelper.arrayToLinkedList([1, 2]),
            1
        ),
    ),
    [1]
);

console.log(
    linkedListHelper.linkedListToArray(
        removeNthFromEnd(
            linkedListHelper.arrayToLinkedList([1, 2, 3]),
            3
        ),
    ),
    [2, 3]
);


console.log(
    linkedListHelper.linkedListToArray(
        removeNthFromEnd(
            linkedListHelper.arrayToLinkedList([1, 2, 3]),
            2
        ),
    ),
    [1, 3]
);
