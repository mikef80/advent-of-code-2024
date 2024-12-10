const { allIncreasing, allDecreasing } = require("../solution");

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

  it("returns false if any numbers are the same", () => {
    const input = [1, 2, 2, 3, 4];
    const actual = allIncreasing(input);
    expect(actual).toBeFalse();
  });

  it("returns false if numbers aren't all increasing", () => {
    const input = [1, 2, 4, 3, 5];
    const actual = allIncreasing(input);
    expect(actual).toBeFalse();
  });

  it("returns true if numbers are all increasing", () => {
    const input = [1, 2, 3, 4, 5];
    const actual = allIncreasing(input);
    expect(actual).toBeTrue();
  });
});

describe("allDecreasing", () => {
  it("returns null if no input provided", () => {
    const actual = allDecreasing();
    expect(actual).toBeNull();
  });

  it("returns false if input not of type Array", () => {
    const input = "1, 2, 3, 4, 5";
    const actual = allDecreasing(input);
    expect(actual).toBeFalse();
  });

  it("returns false if any numbers are the same", () => {
    const input = [1, 2, 2, 3, 4];
    const actual = allDecreasing(input);
    expect(actual).toBeFalse();
  });

  it("returns false if numbers aren't all decreasing", () => {
    const input = [5, 3, 4, 2, 1];
    const actual = allDecreasing(input);
    expect(actual).toBeFalse();
  });

  it("returns true if numbers are all decreasing", () => {
    const input = [5, 4, 3, 2, 1];
    const actual = allDecreasing(input);
    expect(actual).toBeTrue();
  });
});
