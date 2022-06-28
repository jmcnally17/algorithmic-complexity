const generateArray = require("../generateArray");
const createDataPoint = require("./createDataPoint");

const saveData = (
  callbackOne,
  num,
  callbackTwo = generateArray,
  callbackThree = createDataPoint
) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const array = callbackTwo(5000 * i);
    const y = callbackThree(array, callbackOne, num, 10000);
    data.push(y);
  }
  return data;
};

module.exports = saveData;
