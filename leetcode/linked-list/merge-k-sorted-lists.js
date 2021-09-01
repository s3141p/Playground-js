/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let tryNext = true;
    let list = null;
    let listTail;

    while (tryNext) {
        let min = null;
        let index = null;
        tryNext = false;

        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === null) {
                continue;
            };

            tryNext = true;

            if (min === null || lists[i].val < min) {
                min = lists[i].val;
                index = i;
            }
        }

        if (!tryNext) {
            continue;
        }

        if (!list) {
            list = { next: null, val: min }
            listTail = list;
        } else {
            listTail.next = { val: min, next: null }
            listTail = listTail.next;
        }

        lists[index] = lists[index].next
    }

    return list;
};

let a = {
    val: 2,
    next: {
        val: 4,
        next: null
    }
}

let b = {
    val: 1,
    next: {
        val: 3,
        next: null
    }
}

console.log(mergeKLists([a, b]));