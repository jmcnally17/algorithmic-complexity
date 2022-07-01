/* eslint-disable no-undef */
const saveData = require("../saveData");
const subSequenceSum = require("./subSequenceSum");

test("creates a set of 20 data points for timing fibonacci()", () => {
  const data = saveData(subSequenceSum, 100, 100);
  expect(data.length).toBe(20);
});
