const singleTimer = require("../singleTimer");

const saveFibData = (callbackOne, num, callbackTwo = singleTimer) => {
  const data = [];
  for (let i = 1; i < 21; i++) {
    const input = 5000 * i;
    const y = callbackTwo(input, callbackOne, num);
    data.push(y);
  }
  return data;
};

module.exports = saveFibData;
