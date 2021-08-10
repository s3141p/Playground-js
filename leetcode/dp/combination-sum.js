// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const table = new Array(2).fill(0).map(() =>
        new Array(target + 1).fill(0).map(() => [])
    );

    let readRow;
    let writeRow;


    candidates.forEach((candidate, index) => {
        readRow = index % 2;
        writeRow = (index + 1) % 2;

        for (let i = 1; i <= target; i++) {
            const top = table[readRow][i];
            const current = [...top];
            const leftIndex = i - candidate;
            table[writeRow][i] = current;

            if (leftIndex < 0) {
                continue;
            }

            if (leftIndex === 0) {
                current.push([candidate]);
                continue;
            }

            const left = table[writeRow][leftIndex];

            if (!left[0]) {
                continue;
            }

            left.forEach(nestedArr => {
                current.push([...nestedArr, candidate]);
            })
        }

    });


    return table[writeRow][target];
};



console.log(
    combinationSum(
        [2, 3, 5],
        8
    ),
    '__'
    ,
    [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
    ]
);

