/* eslint-disable no-undef */
const singleTimer = require("./singleTimer");

describe(singleTimer, () => {
  it("calls reverse() 100 times when 1 is passed as the second parameter", () => {
    const array = [1, 2, 3, 4, 5];
    const spy = jest.spyOn(array, "reverse");
    const time = singleTimer(array, 1);
    expect(spy).toHaveBeenCalledTimes(100);
    expect(typeof time).toBe("number");
  });

  it("calls sort() 100 times when 2 is passed as the second parameter", () => {
    const array = [1, 2, 3, 4, 5];
    const spy = jest.spyOn(array, "sort");
    const time = singleTimer(array, 2);
    expect(spy).toHaveBeenCalledTimes(100);
    expect(typeof time).toBe("number");
  });

  it("throws an error when 1 or 2 is not given as the second parameter", () => {
    const array = [1, 2, 3, 4, 5];
    expect(() => singleTimer(array, 10)).toThrow("Incorrect number entered for second parameter");
  });
});
