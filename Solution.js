var Board = require("./Board");
class Solution {
  constructor(n) {
    this.size = n;
  }
  isRowSafe(pos, queenPositions, n) {
    let diff = pos - (pos % n);
    for (let i = 0; i < n; i++) {
      if (queenPositions.has(diff + i) && diff + i !== pos) {
        return false;
      }
    }
    return true;
  }
  isColSafe(pos, queenPositions, n) {
    let colNum = pos % n;
    for (let i = colNum; i <= colNum + n * (n - 1); i += n) {
      if (queenPositions.has(i) && i !== pos) {
        return false;
      }
    }
    return true;
  }
  row(pos, n) {
    return Math.trunc(pos / n);
  }
  col(pos, n) {
    return pos % n;
  }
  isDiagonalSafe(pos, queenPositions, n) {
    let upperLeft = pos;
    while (this.row(upperLeft, n) !== 0 && this.col(upperLeft, n) !== 0) {
      upperLeft -= n + 1;

      if (queenPositions.has(upperLeft)) {
        return false;
      }
    }

    let upperRight = pos;
    while (this.row(upperRight, n) !== 0 && this.col(upperRight, n) !== n - 1) {
      upperRight -= n - 1;
      if (queenPositions.has(upperRight)) {
        return false;
      }
    }

    let lowerLeft = pos;
    while (this.row(lowerLeft, n) !== n - 1 && this.col(lowerLeft, n) !== 0) {
      lowerLeft += n - 1;
      if (queenPositions.has(lowerLeft)) {
        return false;
      }
    }

    let lowerRight = pos;
    while (
      this.row(lowerRight, n) !== n - 1 &&
      this.col(lowerRight, n) !== n - 1
    ) {
      lowerRight += n + 1;
      if (queenPositions.has(lowerRight)) {
        return false;
      }
    }
    return true;
  }
  isSafe(board, n) {
    for (var pos of board.queenPositions) {
      if (
        !this.isRowSafe(pos, board.queenPositions, n) ||
        !this.isColSafe(pos, board.queenPositions, n) ||
        !this.isDiagonalSafe(pos, board.queenPositions, n)
      ) {
        return false;
      }
    }
    return true && board.hash !== -1;
  }
  main() {
    let n = this.size;
    var board = new Board([], n);
    var frontier = [board];
    var explored = new Set([]);
    let state;
    while (frontier.length !== 0) {
      state = frontier.splice(0, 1)[0];
      let neighbors = state.neighbors();
      explored.add(state.hash);
      if (this.isSafe(state, n) && state.queenPositions.size === n) {
        state.show();
        return state;
      }

      for (var neighbor of neighbors) {
        if (!explored.has(neighbor.hash)) {
          if (this.isSafe(neighbor, n)) {
            frontier.push(neighbor);
          }
          explored.add(neighbor.hash);
        }
      }
    }
    console.log("No Solution");
  }
}
module.exports = Solution;
