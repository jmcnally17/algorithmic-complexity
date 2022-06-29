/* eslint-disable no-undef */
const duplicate = require("./duplicate");

describe(duplicate, () => {
  it("returns an empty list for an array with no repeating elements", () => {
    expect(duplicate(["hello", "there", "how", "are", "you"])).toEqual([]);
  });

  it("returns an array containing the string 'there' for an array where 'there' repeats", () => {
    expect(duplicate(["hello", "there", "and", "there"])).toEqual(["there"]);
  });

  it("returns an array of 2 repeating elements in the array", () => {
    expect(
      duplicate(["hello", "there", "how", "hello", "are", "are", "you"])
    ).toEqual(["hello", "are"]);
  });

  it("returns the array of repeating elements for a long array", () => {
    const arr = [
      "hello",
      "there",
      "today",
      "are",
      "there",
      "are",
      "now",
      "today",
      "you",
      "room",
      "room",
      "night",
      "night",
      "floor",
      "hello",
      "today",
    ];
    expect(duplicate(arr)).toEqual([
      "hello",
      "there",
      "today",
      "are",
      "room",
      "night",
    ]);
  });
});
