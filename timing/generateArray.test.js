/* eslint-disable no-undef */
const generateArray = require("./generateArray");

describe(generateArray, () => {
  it("creates an array of one element of the number 1", () => {
    expect(generateArray(1)).toEqual([1]);
  });
});
