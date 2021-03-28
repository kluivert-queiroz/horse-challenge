const { getNotationFromPosition } = require("./utils");

class Horse {
  #startPosition;
  constructor(startPosition) {
    this.#startPosition = startPosition;
  }
  #isValidMove({ notation, position }, doneMoves = []) {
    const [x, y] = position;
    if (x < 1 || y < 1) return false;
    if (x > 8 || y > 8) return false;
    if (doneMoves.find((move) => move.notation === notation)) return false;
    return true;
  }
  *#generateMoves(position) {
    const [x, y] = position;
    yield [x - 1, y + 2];
    yield [x - 2, y + 1];
    yield [x - 2, y - 1];
    yield [x - 1, y - 2];
    yield [x + 1, y - 2];
    yield [x + 2, y - 1];
    yield [x + 2, y + 1];
    yield [x + 1, y + 2];
  }
  #getNextMove({ position }, doneMoves) {
    for (let movePosition of this.#generateMoves(position)) {
      let move = getNotationFromPosition(movePosition);

      if (this.#isValidMove(move, doneMoves)) return move;
    }
    return false;
  }
  moveTheHorse() {
    let move = this.#startPosition;
    let doneMoves = [this.#startPosition];
		let nextMove;
    while ((nextMove = this.#getNextMove(move, doneMoves))) {
      doneMoves.push(nextMove);
      move = nextMove;
    }
    return doneMoves;
  }
}

module.exports = Horse;