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

    while(headA || headB){
        headA === headB ?

    }
    // while (true) {
    //
    // }

};

const tail = {
    val: 7,
    next: {
        val: 12
    }
}

let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: {
                val: 10,
                next: tail
            }
        }
    }
};

let l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: {
                val: 3,
                next: tail
            }
        }
    }
};


console.log(getIntersectionNode(l1, l2).val, 7)
