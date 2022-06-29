/* eslint-disable no-undef */
const saveData = require("../saveData");
const shuffle = require("./shuffle");

test("creates a set of 20 data points for timings of shuffle()", () => {
  const data = saveData(shuffle, 50);
  expect(data.length).toBe(20);
});
