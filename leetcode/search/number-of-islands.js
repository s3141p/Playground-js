// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const current = grid[i][j];

      if (current == 1) {
        swap(grid, i, j);
        count += 1;
      }
    }
  }

  return count;
};

function traverse(grid, i, j) {
  left(grid, i, j);
  right(grid, i, j);
  top(grid, i, j);
  bottom(grid, i, j);
}

function left(grid, i, j) {
  if (j === 0) {
    return;
  }

  swap(grid, i, j - 1);
}
function right(grid, i, j) {
  if (j === grid[i].length - 1) {
    return;
  }

  swap(grid, i, j + 1);
}
function top(grid, i, j) {
  if (i === 0) {
    return;
  }

  swap(grid, i - 1, j);
}
function bottom(grid, i, j) {
  if (i === grid.length - 1) {
    return;
  }

  swap(grid, i + 1, j);
}

function swap(grid, i, j) {
  const toSwap = grid[i][j] == 1;

  if (toSwap) {
    grid[i][j] = 0;
    traverse(grid, i, j);
  }
}

let grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

let grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid2));
