/* eslint-disable no-undef */
const subSequenceSum = require("./subSequenceSum");

describe(subSequenceSum, () => {
  describe("for an empty array passed in", () => {
    it("returns true for a target of 0", () => {
      expect(subSequenceSum([], 0)).toBe(true);
    });

    it("returns false for a target greater than 0", () => {
      expect(subSequenceSum([], 5)).toBe(false);
    });
  });

  describe("for arrays containing one element", () => {
    it("returns true for a target of 0", () => {
      expect(subSequenceSum([4], 0)).toBe(true);
    });

    it("returns true for a target equal to the element of the array", () => {
      expect(subSequenceSum([4], 4)).toBe(true);
    });

    it("returns false for a target that is not equal to the element of the array", () => {
      expect(subSequenceSum([3], 2)).toBe(false);
    });
  });

  describe("for arrays containing two elements", () => {
    it("returns true for a target equal to the second element", () => {
      expect(subSequenceSum([3, 7], 7)).toBe(true);
    });

    it("returns true for a target equal to the sum of both elements", () => {
      expect(subSequenceSum([3, 7], 10)).toBe(true);
    });

    it("returns false for a target that is not equal to either element or the sum of both", () => {
      expect(subSequenceSum([3, 7], 5)).toBe(false);
    });
  });
});
