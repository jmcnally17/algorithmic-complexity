const generateArray = require("../generateArray");
const createDataPoint = require("./createDataPoint");

const saveData = (
  numFunc,
  increment = 5000,
  callbackOne = generateArray,
  callbackTwo = createDataPoint
) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const array = callbackOne(increment * i);
    const y = callbackTwo(array, numFunc);
    data.push(y);
  }
  return data;
};

module.exports = saveData;
