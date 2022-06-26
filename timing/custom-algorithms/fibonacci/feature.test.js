/* eslint-disable no-undef */
const saveFibData = require("./saveFibData");
const fibonacci = require("./fibonacci");

test("creates a set of 20 data points for timing fibonacci()", () => {
  const data = saveFibData(fibonacci, 100);
  expect(data.length).toBe(20);
});
