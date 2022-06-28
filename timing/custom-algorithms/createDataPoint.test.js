/* eslint-disable no-undef */
const createDataPoint = require("./createDataPoint");

describe(createDataPoint, () => {
  it("returns an average for the time taken of a callback from 1,000,000 iterations", () => {
    const mockCallback = jest.fn();
    const time = createDataPoint([1, 2, 3, 4, 5], mockCallback, 1000000);
    expect(mockCallback).toHaveBeenCalledTimes(1000000);
    expect(typeof time).toBe("number");
  });
});
