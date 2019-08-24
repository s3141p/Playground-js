// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (fast === null || fast.next === null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

const next3 = {
    val: 23
}

const next2 = {
    val: 20,
    next: next3
}

const next1 = {
    val: 10,
    next: next2
}

const head = {
    val: 1,
    next: next1
}
next3.next = next1;

console.log(hasCycle(head), true);
