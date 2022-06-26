/* eslint-disable no-undef */
const pairing = require("./pairing");

describe(pairing, () => {
  it("returns an empty list for an empty set of students", () => {
    expect(pairing([])).toEqual([]);
  });

  it("returns an array of one student working solo", () => {
    expect(pairing(["John"])).toEqual([["John"]]);
  });

  it("returns an array of one pair of two students", () => {
    expect(pairing(["John", "Alex"])).toEqual([["John", "Alex"]]);
  });
});
