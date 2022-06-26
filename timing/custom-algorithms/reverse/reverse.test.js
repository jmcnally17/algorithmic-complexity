/* eslint-disable no-undef */
const reverse = require("./reverse");

describe(reverse, () => {
  describe("for arrays containing one element", () => {
    it("returns an array with the number 5 unchanged", () => {
      expect(reverse([5])).toEqual([5]);
    });

    it("returns an array with the number 10 unchanged", () => {
      expect(reverse([10])).toEqual([10]);
    });
  });

  describe("for arrays containing two elements", () => {
    it("returns 2 and 19 swapped around in the array", () => {
      expect(reverse([2, 19])).toEqual([19, 2]);
    });
  });
});
