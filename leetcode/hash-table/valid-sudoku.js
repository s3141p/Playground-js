// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let hash = {
        row: {},
        column: {},
        board: {}
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const value = board[i][j] === '.' ? null : board[i][j];
            const boardIndex = getBoardByIndexes(i, j);

            hash.board[boardIndex] = hash.board[boardIndex] ? hash.board[boardIndex] : {};
            hash.row[i] = hash.row[i] ? hash.row[i] : {};
            hash.column[j] = hash.column[j] ? hash.column[j] : {};

            if (!value) {
                continue;
            }

            const existInBoard = hash.board[boardIndex][value];
            const existInRow = hash.row[i][value];
            const existInColumn = hash.column[j][value];

            if (existInBoard || existInRow || existInColumn) {
                return false;
            }

            hash.board[boardIndex][value] = true;
            hash.row[i][value] = true;
            hash.column[j][value] = true;
        }
    }

    return true;
};

function getBoardByIndexes(right, top) {
    let r = Math.trunc(right / 3);
    let t = Math.trunc(top / 3);
    return r * Math.pow(3, 0) + t * Math.pow(3, 1);
}

console.log(isValidSudoku(
    [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ]
), true);

console.log(isValidSudoku(
    [
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ]
), false);

// [0, 0] = 0
// [0, 1] = 1
// [0, 2] = 2
// [1, 0] = 3
// [1, 1] = 4
// [1, 2] = 5
// [2, 0] = 6
// [2, 1] = 7
// [2, 2] = 8
