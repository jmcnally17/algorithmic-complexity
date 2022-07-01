/* eslint-disable no-undef */
const sort = require("./sort");

describe(sort, () => {
  it("returns an empty array when an empty array is passed in", () => {
    expect(sort([])).toEqual([]);
  });

  it("returns the array unchanged when it only contains one element", () => {
    expect(sort([3])).toEqual([3]);
  });

  describe("for two element arrays", () => {
    it("swaps round both elements when they are inputted in descending order", () => {
      expect(sort([4, 2])).toEqual([2, 4]);
    });

    it("returns the array unchanged when it is inputted the two elements in ascending order", () => {
      expect(sort([2, 4])).toEqual([2, 4]);
    });
  });

  describe("for three element arrays", () => {
    it("returns an unchanged array when it is inputted in ascending order", () => {
      expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("swaps round the first and second elements when they are in the wrong order", () => {
      expect(sort([2, 1, 3])).toEqual([1, 2, 3]);
    });

    it("swaps round the second and third elements when they are in the wrong order", () => {
      expect(sort([1, 3, 2])).toEqual([1, 2, 3]);
    });

    it("reverse the order of an array in descending order", () => {
      expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
    });
  });

  describe("for four element arrays", () => {
    it("returns an unchanged array when it is inputted in ascending order", () => {
      expect(sort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it("returns the first and second elements swapped round when they are in the wrong order", () => {
      expect(sort([2, 1, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it("returns the second and third elements swapped round when they are in the wrong order", () => {
      expect(sort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
    });

    it("returns the third and fourth elements swapped round when they are in the wrong order", () => {
      expect(sort([1, 2, 4, 3])).toEqual([1, 2, 3, 4]);
    });

    it("reverse the array when it is in descending order", () => {
      expect(sort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });
  });
});
