class Board {
  constructor(positions, nQueen) {
    positions.sort();
    this.nQueen = nQueen;
    this.queenPositions = new Set(positions);
    this.queenPositionArray = positions;
    this.hash = this.hashCode();
  }

  // Print out the solution
  show() {
    let board = [];
    let boardSize = this.nQueen * this.nQueen;
    for (let i = 0; i < boardSize; i++) {
      if (i % this.nQueen == 0) {
        board.push("\n");
      }
      if (this.queenPositions.has(i)) {
        board.push(" Q ");
      } else {
        board.push(" * ");
      }
    }
    console.log(board.join(""));
  }

  // Get all of the possible neighbors
  neighbors() {
    let boardSize = this.nQueen * this.nQueen;
    let neighbors = [];
    let queenPositions = [];
    for (let q = 0; q < this.queenPositions.size; q++) {
      queenPositions.push(this.queenPositionArray[q]);
    }
    for (let i = 0; i < boardSize; i++) {
      neighbors.push(new Board([i].concat(queenPositions), this.nQueen));
    }

    return neighbors;
  }

  // Hash the current board
  hashCode() {
    if (this.queenPositions.size === 0) {
      return -1;
    }
    let hash = 0;
    for (var pos of this.queenPositions) {
      hash = hash * 31 + pos;
    }
    return hash;
  }
}

module.exports = Board;
