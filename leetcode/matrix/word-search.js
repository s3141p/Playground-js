// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] !== board[i][j]) {
                continue;
            }

            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    function dfs(row, col, charIndex) {
        if (!board[row] || board[row][col] == null) {
            return false;
        }

        if (board[row][col] !== word[charIndex]) {
            return false;
        }

        if (charIndex === word.length - 1) {
            return true;
        }

        board[row][col] = true;

        let result = dfs(row + 1, col, charIndex + 1) ||
            dfs(row - 1, col, charIndex + 1) ||
            dfs(row, col + 1, charIndex + 1) ||
            dfs(row, col - 1, charIndex + 1);

        board[row][col] = word[charIndex];

        return result;
    }

    return false;
};




console.log(exist(
    [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ],
    "SEE"
))

console.log(exist(
    [["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]],
    "ABCB"
))
