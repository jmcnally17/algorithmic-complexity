/* eslint-disable no-undef */
const singleFibTimer = require("./singleFibTimer");

describe(singleFibTimer, () => {
  it("returns an average for the time taken of a callback from 100 iterations", () => {
    const mockCallback = jest.fn();
    const time = singleFibTimer(5000, mockCallback, 100);
    expect(mockCallback).toHaveBeenCalledTimes(100);
    expect(typeof time).toBe("number");
  });
});
