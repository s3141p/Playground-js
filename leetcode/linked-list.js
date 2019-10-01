function arrayToLinkedList(array) {
    if (!array || array.length === 0) {
        return null
    }

    const root = {
        val: array[0]
    };
    let current = root;

    for (let i = 1; i < array.length; i++) {
        current.next = {
            val: array[i]
        };

        current = current.next;
    }

    return root;
}


function linkedListToArray(list) {
    const result = [];

    while (list && list.val) {
        result.push(list.val)
        list = list.next
    }

    return result;
}

module.exports = {
    linkedListToArray,
    arrayToLinkedList
};
