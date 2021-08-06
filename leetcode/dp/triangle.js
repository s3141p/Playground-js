/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const bottomIndex = triangle[triangle.length - 1].length - 1;
    let dp = [...triangle[bottomIndex]];
    let temp = [];

    for (let level = bottomIndex - 1; level >= 0; level--) {

        for (let i = 0; i < triangle[level].length; i++) {
            let num = triangle[level][i];
            temp[i] = Math.min(num + dp[i], num + dp[i + 1]);
        }

        dp = temp;
        temp = [];
    }

    return dp[0];
};

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]


// [
//          [5],
//        [1, 6],
//      [4, 3, 10],
//     [3, 2, 4, 1]
// ]


console.log(minimumTotal(triangle));