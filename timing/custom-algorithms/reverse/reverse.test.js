/* eslint-disable no-undef */
const reverse = require("./reverse");

describe(reverse, () => {
  it("returns a one element array unchanged", () => {
    expect(reverse([5])).toEqual([5]);
  });
});
