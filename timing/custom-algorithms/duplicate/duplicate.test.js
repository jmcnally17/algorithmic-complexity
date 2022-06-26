/* eslint-disable no-undef */
const duplicate = require("./duplicate");

describe(duplicate, () => {
  it("returns an empty list for an array with no repeating elements", () => {
    expect(duplicate([1, 2, 3, 4])).toEqual([]);
  });
});
