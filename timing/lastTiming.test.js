/* eslint-disable no-undef */
const lastTiming = require("./lastTiming");

describe(lastTiming, () => {
  it("returns a number for timing last function of an empty array", () => {
    expect(typeof lastTiming([])).toBe("number");
  });
});
