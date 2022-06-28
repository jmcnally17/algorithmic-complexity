/* eslint-disable no-undef */
const pairing = require("./pairing");

xdescribe(pairing, () => {
  it("returns an empty list for an empty set of students", () => {
    expect(pairing([])).toEqual([]);
  });

  it("returns an array of one day of one student working solo", () => {
    expect(pairing(["John"])).toEqual([[["John"]]]);
  });

  it("returns an array of one day of one pair of two students", () => {
    expect(pairing(["John", "Alex"])).toEqual([[["John", "Alex"]]]);
  });

  it("returns an array of three days for a set of three students", () => {
    expect(pairing(["John", "Alex", "Leo"])).toEqual([
      [["John", "Alex"], ["Leo"]],
      [["John", "Leo"], ["Alex"]],
      [["John"], ["Alex", "Leo"]],
    ]);
  });
});
