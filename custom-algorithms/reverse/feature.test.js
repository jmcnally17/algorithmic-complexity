/* eslint-disable no-undef */
const saveData = require("../saveData");
const reverse = require("./reverse");

test("creates a set of 20 data points for timing reverse()", () => {
  const data = saveData(reverse, 100);
  expect(data.length).toBe(20);
});
