/* eslint-disable no-undef */
const saveData = require("../saveData");
const duplicate = require("./duplicate");

test("saves a set of 20 data points for timing duplicate()", () => {
  const data = saveData(duplicate, 50);
  expect(data.length).toBe(20);
});
