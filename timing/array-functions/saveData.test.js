/* eslint-disable no-undef */
const saveData = require("./saveData");

describe(saveData, () => {
  it("saves 20 pairs of data points for plotting on a graph for timing reverse()", () => {
    const mockCallbackOne = jest.fn();
    const mockCallbackTwo = jest.fn();
    expect(saveData(1, mockCallbackOne, mockCallbackTwo).length).toBe(20);
    expect(mockCallbackOne).toHaveBeenCalledTimes(20);
    expect(mockCallbackTwo).toHaveBeenCalledTimes(20);
  });
});
