/* eslint-disable no-undef */
const saveData = require("../saveData");

test("creates a set of data for the time taken for reverse() to run", () => {
  const data = saveData(1);
  expect(data.length).toBe(20);
});
