/* eslint-disable no-undef */
const duplicate = require("./duplicate");

describe(duplicate, () => {
  it("returns an empty list for an array with no repeating elements", () => {
    expect(duplicate([1, 2, 3, 4])).toEqual([]);
  });

  it("returns an array containing the number 3 for an array where 3 repeats", () => {
    expect(duplicate([1, 3, 5, 3])).toEqual(["3"]);
  });

  it("returns an array of 2 repeating elements in the array", () => {
    expect(duplicate([1, 2, 3, 1, 4, 4, 6])).toEqual(["1", "4"]);
  });

  it("returns the array of repeating elements for a long array", () => {
    const arr = [1, 2, 55, 4, 2, 4, 34, 55, 6, 7, 7, 8, 8, 9, 1, 55];
    expect(duplicate(arr)).toEqual(["1", "2", "4", "7", "8", "55"]);
  });
});
