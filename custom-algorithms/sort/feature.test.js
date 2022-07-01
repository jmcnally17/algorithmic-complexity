/* eslint-disable no-undef */
const createSortDataPoint = require("./createSortDataPoint");
const saveData = require("../saveData");
const sort = require("./sort");

test("creates a set of 20 data points for timings of sort()", () => {
  const data = saveData(sort, 50, 50, createSortDataPoint);
  expect(data.length).toBe(20);
});
