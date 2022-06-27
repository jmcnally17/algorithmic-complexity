const generateArray = require("../generateArray");
const singleTimer = require("./singleTimer");

const saveData = (
  callbackOne,
  num,
  callbackTwo = generateArray,
  callbackThree = singleTimer
) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const array = callbackTwo(5000 * i);
    const target = Math.floor(Math.random * 5000 * i);
    const y = callbackThree(array, callbackOne, num, target);
    data.push(y);
  }
  return data;
};

module.exports = saveData;
