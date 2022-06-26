/* eslint-disable no-undef */
const fibonacci = require("./fibonacci");

describe(fibonacci, () => {
  it("returns an empty array for 0 given as the parameter", () => {
    expect(fibonacci(0)).toEqual([]);
  });

  it("returns the number 0 in an array for 1 fibonacci number", () => {
    expect(fibonacci(1)).toEqual([0]);
  });
});
