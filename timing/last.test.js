/* eslint-disable no-undef */
const last = require("./last");

describe(last, () => {
  it("returns null for an empty array", () => {
    expect(last([])).toBe(null);
  });
});
