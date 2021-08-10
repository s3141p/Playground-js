// https://leetcode.com/problems/edit-distance/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const table = new Array(word1.length + 1).fill().map(() => new Array(word2.length + 1).fill(0))

    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (i === 0 && j === 0) {
                continue;
            }

            if (i === 0) {
                table[i][j] = j;
                continue
            }

            if (j === 0) {
                table[i][j] = i;
                continue
            }

            if (word1[i - 1] === word2[j - 1]) {
                table[i][j] = table[i - 1][j - 1];
                continue
            }

            table[i][j] = 1 + Math.min(table[i - 1][j], table[i - 1][j - 1], table[i][j - 1]);
        }
    }

    return table[table.length - 1][table[0].length - 1];
};

// console.log(minDistance("horse", "ros"));
console.log(
    minDistance(
        "zoologicoarchaeologist",
        "zoogeologist"
    )
)
// console.log(minDistance("", ""));