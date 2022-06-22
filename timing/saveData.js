const generateArray = require("./generateArray");
const singleTimer = require("./singleTimer");

const saveData = (
  callbackOne,
  callbackTwo = generateArray,
  callbackThree = singleTimer
) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const array = callbackTwo(5000 * i);
    const y = callbackThree(array, callbackOne);
    data.push(y);
  }
  return data;
};

module.exports = saveData;
