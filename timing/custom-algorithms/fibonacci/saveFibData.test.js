/* eslint-disable no-undef */
const saveFibData = require("./saveFibData");

describe(saveFibData, () => {
  it("calls the callback functions to make the data points", () => {
    const mockCallbackOne = jest.fn();
    const mockCallbackTwo = jest.fn();
    expect(saveFibData(mockCallbackOne, 10, mockCallbackTwo).length).toBe(20);
    expect(mockCallbackTwo).toHaveBeenCalledTimes(20);
  });
});
