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

    it("returns 100 and 34 swapped around in the array", () => {
      expect(reverse([100, 34])).toEqual([34, 100]);
    });
  });

  describe("for arrays containing three elements", () => {
    it("returns the array [19, 4, 12] with 19 and 12 swapped round", () => {
      expect(reverse([19, 4, 12])).toEqual([12, 4, 19]);
    });

    it("returns the array [1, 2, 3] with 1 and 3 swapped round", () => {
      expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
  });

  describe("for arrays containing four elements", () => {
    it("returns the array [23, 4, 9, 31] with 23 and 31 swapped round and 4 and 9 swapped round", () => {
      expect(reverse([23, 4, 9, 31])).toEqual([31, 9, 4, 23]);
    });

    it("returns the array [1, 2, 3, 4] with 1 and 4 swapped round and 2 and 3 swapped round", () => {
      expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });
  });

  describe("for arrays of many elements", () => {
    it("returns the array in reverse order", () => {
      const array = [12, 3, 65, 87, 90, 2, 3, 4, 15, 10];
      expect(reverse(array)).toEqual([10, 15, 4, 3, 2, 90, 87, 65, 3, 12]);
    });
  });
});
