/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = [];
    let intersectedLeft;
    let i = 0;

    do {
        const current = intervals[i];
        const next = intervals[i + 1];

        const cLeft = intervals[i] ? intervals[i][0] : null;
        const cRight = intervals[i] ? intervals[i][1] : null;
        const nextLeft = next ? next[0] : null;
        const nextRight = next ? next[1] : null;
        const newLeft = newInterval[0];
        const newRight = newInterval[1];

        //Start Intersection
        const intersectedFromLeft =
            newLeft >= cLeft &&
            newLeft <= cRight &&
            newRight > cRight;

        const intersectedFromRight =
            newLeft < cLeft &&
            newRight > cLeft;

        if (intersectedFromLeft) {
            intersectedLeft = cLeft;
        }


        if (!intersectedLeft && intersectedFromRight) {
            intersectedLeft = newLeft;
        }

        if (intersectedLeft) {
            const currentIsBigger =
                cLeft > newRight;

            const currentIsIntersected =
                cLeft <= newRight &&
                cRight >= newRight;


            if (currentIsBigger) {
                res.push([intersectedLeft, newRight]);
                intersectedLeft = null;
            }

            if (currentIsIntersected) {
                res.push([intersectedLeft, cRight]);
                intersectedLeft = null;
            }

        }
        // isBetween
        const isBetween =
            next && current && newLeft > cRight &&
            newRight < nextLeft;

        if (isBetween) {
            res.push(current, newInterval);
        }

        // No intersection
        if (current && cRight < newLeft || cLeft > newRight) {
            res.push(current);
        }

        // new inside
        if (current && cLeft < newLeft && cRight > newRight) {
            res.push(current);
        }

        // No intersection, but current is last
        if (cRight < newLeft && !next) {
            res.push(newInterval);
        }

        i++;
    }
    while (i < intervals.length);


    return res;
};


const interval1 = [[1, 5]];
const ins = [2, 7];
const res = insert(interval1, ins);

console.log('Res:', res);
