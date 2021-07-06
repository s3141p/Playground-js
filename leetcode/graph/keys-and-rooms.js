/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let seen = { 0: true };
    let total = 1;
    let queue = [0];

    while (queue.length > 0) {
        const room = queue.shift();
        const keys = rooms[room];

        for (let key of keys) {
            if (!seen[key]) {
                seen[key] = true
                total += 1;
                queue.push(key);

                if (total === rooms.length) {
                    return true;
                }

            }
        }
    }

    return rooms.length === total;
};