/* eslint-disable no-undef */
const subSequenceSum = require("./subSequenceSum");

describe(subSequenceSum, () => {
  it("returns true for an empty array and a target of 0", () => {
    expect(subSequenceSum([], 0)).toBeTruthy();
  });

  it("returns false for an empty array and a target greater than 0", () => {
    expect(subSequenceSum([], 5)).toBeFalsy();
  });
});
