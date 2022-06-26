/* eslint-disable no-undef */
const pairing = require("./pairing");

describe(pairing, () => {
  it("returns an empty list for an empty set of students", () => {
    expect(pairing([])).toEqual([]);
  });
});
