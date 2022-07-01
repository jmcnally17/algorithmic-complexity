const generateArray = require("../generateArray");
const createDataPoint = require("./createDataPoint");

const saveData = (
  callbackOne,
  numbeOfMeasurements,
  increment = 5000,
  callbackTwo = createDataPoint,
  callbackThree = generateArray
) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const array = callbackThree(increment * i);
    const y = callbackTwo(array, callbackOne, numbeOfMeasurements, 10000);
    data.push(y);
  }
  return data;
};

module.exports = saveData;
