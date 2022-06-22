/* eslint-disable no-undef */
const singleTimer = require("./singleTimer");

describe(singleTimer, () => {
  it("returns a number for the time taken of one iteration", () => {
    const mockCallback = jest.fn();
    const time = singleTimer([1, 2, 3, 4, 5], mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(typeof time).toBe("number");
  });
});
