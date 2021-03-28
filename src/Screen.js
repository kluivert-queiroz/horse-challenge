const { sleep } = require("./utils");

class Screen {
	#doneMoves = [];
  renderChessTable(horsePosition) {
    var hash = "";
    var size = 8;

    hash = Array.from(Array(size), (_, i) =>
      Array.from(Array(size), (_, j) => (this.#checkIfHorseIsHere(i,j, horsePosition))).join("")
    ).reverse().join("\n");
    return hash;
  }
	#checkIfHorseWasHere(i,j){
		return this.#doneMoves.find(move => {
			const [x,y] = move;
			return i === y && j === x;
		})
	}
  #checkIfHorseIsHere(i, j, horsePosition) {
		const yRender = i + 1;
		const xRender = j + 1;
		const [x,y] = horsePosition;
		if(x === xRender && y === yRender) {
			this.#doneMoves.push(horsePosition)
			return "H"
		};
		if(this.#checkIfHorseWasHere(yRender, xRender)) return "X";
    return (i + j) % 2 ? "#" : " ";
  }
	async render(moves){
		for (let i = 0; i < moves.length; i++) {
			await sleep(300);
			console.clear();
			const {position} = moves[i];
			console.log(this.renderChessTable(position));
		}
	}
}

module.exports = Screen;
