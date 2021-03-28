function getPositionFromNotation(notation) {
  const [letter, number] = notation.split("");
  return { notation, position: [letter.charCodeAt(0) - 96, Number(number)] };
}
function getNotationFromPosition(position) {
  const [x, y] = position;
  const notation = String.fromCharCode(97 + (x - 1)) + String(y);
  return { notation, position };
}
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
module.exports = {
  getPositionFromNotation,
  getNotationFromPosition,
  sleep,
};
