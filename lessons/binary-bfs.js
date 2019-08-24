let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 2,
        right: {
            val: 3,
        },
        left: {
            val: 4
        }
    }
};

function bfs(tree) {
    const queue = [tree];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) {
            queue.push(node.left);
        }

        if(node.right){
            queue.push(node.right);
        }
    }
}

bfs(tree);
