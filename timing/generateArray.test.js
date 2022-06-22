/* eslint-disable no-undef */
const generateArray = require("./generateArray");

describe(generateArray, () => {
  it("creates an array of one element", () => {
    const array = generateArray(1);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array.length).toBe(1);
  });

  it("creates an array of two elements", () => {
    const array = generateArray(2);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array.length).toBe(2);
  });

  it("creates and array of 20 elements", () => {
    const array = generateArray(200);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array.length).toBe(200);
  });

  it("creates and array of 10,000 elements", () => {
    const array = generateArray(10000);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array.length).toBe(10000);
  });
});
