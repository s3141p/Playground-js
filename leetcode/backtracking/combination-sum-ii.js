// https://leetcode.com/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const result = [];
    candidates = candidates.sort((a, b) => a - b);

    for (let i = 0; i < candidates.length; i++) {
        if (i !== 0 && candidates[i] === candidates[i - 1]) {
            continue;
        }

        backtrack(candidates, result, i, [], 0, target);
    }

    return result;
};

function backtrack(candidates, result, index, tempArr, tempSum, target) {
    const candidate = candidates[index];
    const newSum = tempSum + candidate;
    const newArr = [...tempArr, candidate];

    if (candidate === target && newArr.length === 1) {
        result.push([target]);
        return;
    }

    if (newSum > target) {
        return
    }

    if (newSum === target) {
        result.push(newArr);
        return;
    }

    for (let i = index + 1; i < candidates.length; i++) {
        if (i > index + 1 && candidates[i] === candidates[i - 1]) {
            continue;
        }
        backtrack(candidates, result, i, newArr, newSum, target);
    }
}


console.log(combinationSum2(
    [1, 1, 2, 5, 6, 7, 10],
    8
    )
);
console.log(
    [
        [1, 7],
        [1, 2, 5],
        [2, 6],
        [1, 1, 6]
    ]
);

console.log('____________')

console.log(combinationSum2(
    [1, 2, 2, 2, 2, 5],
    5
    )
);
console.log(
    [
        [1, 2, 2],
        [5]
    ]
);
