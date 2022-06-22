const generateArray = require("./generateArray");
const singleTimer = require("./singleTimer");

const saveData = (
  callbackOne,
  callbackTwo = generateArray,
  callbackThree = singleTimer
) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const x = 5000 * i;
    const array = callbackTwo(x);
    const y = callbackThree(array, callbackOne);
    data.push({ x: x, y: y });
  }
  return data;
};

module.exports = saveData;
