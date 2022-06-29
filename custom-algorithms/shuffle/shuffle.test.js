/* eslint-disable no-undef */
const shuffle = require("./shuffle");

describe(shuffle, () => {
  it("uses the callback to run Math.random to randomlty pick elements of the array to move around", () => {
    const array = [1, 2, 3, 4, 5];
    const mockRandom = jest.fn();
    shuffle(array, mockRandom);
    expect(mockRandom).toHaveBeenCalledTimes(array.length);
  });
});
