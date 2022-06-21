/* eslint-disable no-undef */
const last = require("./last");

describe(last, () => {
  it("returns null for an empty array", () => {
    expect(last([])).toBe(null);
  });

  describe("for arrays of length 1", () => {
    it("returns the single element of the array which is 3", () => {
      expect(last([3])).toBe(3);
    });

    it("returns the single element of the array which is 5", () => {
      expect(last([5])).toBe(5);
    });
  });

  describe("for arrays of length 2", () => {
    it("returns the second element which is 7", () => {
      expect(last([2, 7])).toBe(7);
    });

    it("returns the second element which is 24", () => {
      expect(last([1, 24])).toBe(24);
    });
  });
});
