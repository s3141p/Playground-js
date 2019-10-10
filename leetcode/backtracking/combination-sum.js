// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    for (let i = 0; i < candidates.length; i++) {
        backtrack(candidates, result, i, [], 0, target);
    }

    return result;
};

function backtrack(candidates, result, index, tempArr, tempSum, target) {
    const candidate = index < candidates.length ? candidates[index] : null;
    const newArr = [...tempArr, candidate];
    const newSum = tempSum + candidate;

    if (!candidate) {
        return;
    }

    if (newSum > target) {
        return;
    }

    if (newSum === target) {
        result.push(newArr);
        return;
    }

    backtrack(candidates, result, index, newArr, newSum, target);

    for (let i = index + 1; i < candidates.length; i++) {
        backtrack(candidates, result, i, newArr, newSum, target);
    }
}

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

console.log(
    combinationSum(
        [2, 3, 6, 7],
        7
    ),
    '__'
    ,
    [
        [7],
        [2, 2, 3]
    ]
);

console.log(
    combinationSum(
        [2, 3, 5],
        7
    ),
    '__'
    ,
    [[2, 2, 3], [2, 5]]
);

console.log(
    combinationSum(
        [4, 2, 8],
        8
    ),
    '__'
    ,
    [[2, 2, 2, 2], [2, 2, 4], [4, 4], [8]]
);

