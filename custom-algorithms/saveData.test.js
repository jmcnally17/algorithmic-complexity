/* eslint-disable no-undef */
const saveData = require("./saveData");

describe(saveData, () => {
  it("calls the callback functions to make the data points", () => {
    const mockCallbackOne = jest.fn();
    const mockCallbackTwo = jest.fn();
    const mockCallbackThree = jest.fn();
    expect(
      saveData(mockCallbackOne, 10, 5000, mockCallbackTwo, mockCallbackThree)
        .length
    ).toBe(20);
    expect(mockCallbackTwo).toHaveBeenCalledTimes(20);
    expect(mockCallbackThree).toHaveBeenCalledTimes(20);
  });
});
