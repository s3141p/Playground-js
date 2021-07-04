/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, cache = {}) {
    if (!node) {
        return null;
    }

    if (cache[node.val]) {
        return cache[node.val];
    }

    cache[node.val] = new Node(node.val);
    cache[node.val].neighbors = node.neighbors.map(item => cloneGraph(item, cache))

    return cache[node.val];
};


