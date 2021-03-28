const Horse = require("./src/Horse");
const Screen = require("./src/Screen");
const { getPositionFromNotation, sleep } = require("./src/utils");

const startPosition = getPositionFromNotation(process.argv[2]);
const horse = new Horse(startPosition);
moves = horse.moveTheHorse();

const screen = new Screen();
screen.render(moves).then(() => {
  console.log("Casas percorridas:", moves.length);
});
