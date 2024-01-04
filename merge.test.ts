import merge from "./merge";

describe("merge function", () => {
  it("two sorted arrays", () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [2, 4, 6, 8, 10];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("sempty arrays", () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6, 8, 10];
    const result = merge(collection1, collection2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});
