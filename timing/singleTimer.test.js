/* eslint-disable no-undef */
const singleTimer = require("./singleTimer");

describe(singleTimer, () => {
  it("returns an average for the time taken of a callback from 10 iterations", () => {
    const mockCallback = jest.fn();
    const time = singleTimer([1, 2, 3, 4, 5], mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(10);
    expect(typeof time).toBe("number");
  });
});
