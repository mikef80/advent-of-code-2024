const { allIncreasing } = require("../solution");

describe("allIncreasing", () => {
  it("returns null if no input provided", () => {
    const actual = allIncreasing();
    expect(actual).toBeNull();
  });

  it("returns false if input not of type Array", () => {
    const input = "1, 2, 3, 4, 5";
    const actual = allIncreasing(input);
    expect(actual).toBeFalse();
  });

  /* it("returns false if any numbers are the same", () => {
    const actual = allIncreasing([1, 2, 2, 3, 4])
    expect(actual).toBeFalse()
  }); */
});
