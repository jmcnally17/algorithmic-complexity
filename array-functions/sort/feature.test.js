/* eslint-disable no-undef */
const saveData = require("../saveData");

test("creates a set of data for the time taken for sort() to run", () => {
  const data = saveData(2);
  expect(data.length).toBe(20);
});
