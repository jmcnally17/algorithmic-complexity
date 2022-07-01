/* eslint-disable no-undef */
const saveData = require("./saveData");

describe(saveData, () => {
  it("calls the callback functions to make the data points", () => {
    const mockCallbackOne = jest.fn();
    const mockCallbackTwo = jest.fn();
    expect(saveData(1, 5000, mockCallbackOne, mockCallbackTwo).length).toBe(20);
    expect(mockCallbackOne).toHaveBeenCalledTimes(20);
    expect(mockCallbackTwo).toHaveBeenCalledTimes(20);
  });
});
