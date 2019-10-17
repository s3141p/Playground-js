// https://leetcode.com/problems/permutations-ii/
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var permuteUnique = function (nums) {
    const result = [];
    nums.sort();
    permute([], nums, result);
    return result;
};

function permute(perm, left, result) {
    if (left.length === 1) {
        perm.push(left[0]);
        result.push(perm);
        return;
    }

    let last = null;

    for (let i = 0; i < left.length; i++) {
        if (last !== left[i]) {
            last = left[i];
            const nextperm = [...perm, left[i]];
            const nextleft = [...left];
            nextleft.splice(i, 1);
            permute(nextperm, nextleft, result);
        }
    }
}

console.log(permuteUnique([1, 1, 2]));
console.log([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1]
]);

// permute([], [1, 1, 2])
//     permute([1], [1, 2])
//         permute([1, 1], [2])
//             permute([1, 1, 2], []) // [1, 1, 2]
//         permute([1, 2], [1])
//             permute([1, 2, 1], []) // [1, 2, 1]
//
//     permute([2], [1, 1])
//         permute([2, 1], [1])
//             permute([2, 1, 1], []) // [2, 1, 1]


