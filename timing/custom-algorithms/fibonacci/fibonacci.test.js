/* eslint-disable no-undef */
const fibonacci = require("./fibonacci");

describe(fibonacci, () => {
  it("returns an empty array for 0 given as the parameter", () => {
    expect(fibonacci(0)).toEqual([]);
  });
});
