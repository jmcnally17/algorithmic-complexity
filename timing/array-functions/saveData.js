const generateArray = require("../generateArray");
const singleTimer = require("./singleTimer");

const saveData = (
  numFunc,
  callbackOne = generateArray,
  callbackTwo = singleTimer
) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const array = callbackOne(5000 * i);
    const y = callbackTwo(array, numFunc);
    data.push(y);
  }
  return data;
};

module.exports = saveData;
