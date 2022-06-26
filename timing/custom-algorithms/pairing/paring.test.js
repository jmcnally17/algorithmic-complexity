/* eslint-disable no-undef */
const pairing = require("./pairing");

describe(pairing, () => {
  it("returns an empty list for an empty set of students", () => {
    expect(pairing([])).toEqual([]);
  });

  it("returns an array of one pairing array of one person for a set of one student", () => {
    expect(pairing(["John"])).toEqual([["John"]]);
  });
});
