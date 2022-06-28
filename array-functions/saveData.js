const generateArray = require("../generateArray");
const createDataPoint = require("./createDataPoint");

const saveData = (
  numFunc,
  callbackOne = generateArray,
  callbackTwo = createDataPoint
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
