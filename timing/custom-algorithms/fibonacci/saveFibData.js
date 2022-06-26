const singleFibTimer = require("./singleFibTimer");

const saveFibData = (callbackOne, num, callbackTwo = singleFibTimer) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const input = 5000 * i;
    const y = callbackTwo(input, callbackOne, num);
    data.push(y);
  }
  return data;
};

module.exports = saveFibData;
