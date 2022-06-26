/* eslint-disable no-undef */
const fibonacci = require("./fibonacci");

describe(fibonacci, () => {
  it("returns an empty array for 0 given as the parameter", () => {
    expect(fibonacci(0)).toEqual([]);
  });

  it("returns the number 0 in an array for 1 fibonacci number", () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  it("returns 0 and 1 for 2 fibonacci numbers", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });

  it("returns the first 3 fibonacci numbers", () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });
});
