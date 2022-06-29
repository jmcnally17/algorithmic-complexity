/* eslint-disable no-undef */
const saveData = require("../saveData");
const last = require("./last");

test("creates a set of data for the time taken for last() to run", () => {
  const data = saveData(last, 1000000);
  expect(data.length).toBe(20);
});