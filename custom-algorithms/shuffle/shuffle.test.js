/* eslint-disable no-undef */
const shuffle = require("./shuffle");

describe(shuffle, () => {
  it("calls Math.random to randomly pick elements of the array to move around", () => {
    const array = [1, 2, 3, 4, 5];
    const random = jest.spyOn(Math, "random");
    shuffle(array);
    expect(random).toHaveBeenCalledTimes(5);
  });
});
