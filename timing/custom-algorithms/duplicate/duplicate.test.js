/* eslint-disable no-undef */
const duplicate = require("./duplicate");

describe(duplicate, () => {
  it("returns an empty list for an array with no repeating elements", () => {
    expect(duplicate([1, 2, 3, 4])).toEqual([]);
  });

  it("returns an array containing the number 3 for an array where 3 repeats", () => {
    expect(duplicate([1, 3, 5, 3])).toEqual([3]);
  });
});
