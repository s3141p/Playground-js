// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
};

const tail = {
    val: 7,
    next: {
        val: 12
    }
};

let l1 = {
    val: 1,
    next: tail
};

let l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: {
                val: 3,
                next: null
            }
        }
    }
};

// A: {1,3,5,7,9,11}
// B: {2,4,9,11}
// A: 1, 3, 5, 7 , 9, 11, 2, 4, 9, 11
// B: 2, 4, 9, 11, 1, 3,  5, 7, 9, 11

console.log(getIntersectionNode(l1, l2), 7)


