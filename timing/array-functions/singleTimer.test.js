/* eslint-disable no-undef */
const singleTimer = require("./singleTimer");

describe(singleTimer, () => {
  it("returns an average for the time taken of reverse() from 100 iterations", () => {
    const array = [1, 2, 3, 4, 5];
    const spy = jest.spyOn(array, "reverse");
    const time = singleTimer(array, 1);
    expect(spy).toHaveBeenCalledTimes(100);
    expect(typeof time).toBe("number");
  });

  it("returns an average for the time taken of sort() from 100 iterations", () => {
    const array = [1, 2, 3, 4, 5];
    const spy = jest.spyOn(array, "sort");
    const time = singleTimer(array, 2);
    expect(spy).toHaveBeenCalledTimes(100);
    expect(typeof time).toBe("number");
  });
});
