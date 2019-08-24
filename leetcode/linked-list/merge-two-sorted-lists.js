// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function (l1, l2) {
//     let prev;
//     let result = {};
//     let resultHead = result;
//
//     if (!l1 && !l2) {
//         return null
//     }
//
//     while (l1 || l2) {
//         if(!l2 || (l1 && l1.val <= l2.val)){
//             resultHead.val = l1.val;
//             l1 = l1.next;
//         } else if (!l1 || (l2 && l1.val > l2.val)){
//             resultHead.val = l2.val
//             l2 = l2.next
//         }
//
//         prev = resultHead;
//         resultHead = resultHead.next = {};
//     }
//
//     prev.next = null;
//     return result;
// };

var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) {
        return null;
    }

    if (l1 && l2 && l1.val <= l2.val) {
        return {
            val: l1.val,
            next: mergeTwoLists(l1.next, l2)
        }
    } else if(l1 && l2 && l1.val > l2.val) {
        return {
            val: l2.val,
            next: mergeTwoLists(l1, l2.next)
        }
    }

    if (!l1 || !l2) {
        const val = l1 ? l1.val : l2.val;

        return {
            val: val,
            next: mergeTwoLists(l1 ? l1.next : l1, l2 ? l2.next : l2)
        }
    }
};

// let l1 = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 4
//         }
//     }
// };
//
// let l2 = {
//     val: 1,
//     next: {
//         val: 3,
//         next: {
//             val: 4
//         }
//     }
// };

let l1 = {
    val: 1
}

let l2 = null

console.log(JSON.stringify(mergeTwoLists(l1, l2)));
