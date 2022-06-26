/* eslint-disable no-undef */
const saveData = require("./saveData");

describe(saveData, () => {
  it("saves 20 pairs of data points for plotting on a graph for timing a function", () => {
    const mockCallbackOne = jest.fn();
    const mockCallbackTwo = jest.fn();
    const mockCallbackThree = jest.fn();
    expect(
      saveData(mockCallbackOne, 10, mockCallbackTwo, mockCallbackThree).length
    ).toBe(20);
    expect(mockCallbackTwo).toHaveBeenCalledTimes(20);
    expect(mockCallbackThree).toHaveBeenCalledTimes(20);
  });
});
