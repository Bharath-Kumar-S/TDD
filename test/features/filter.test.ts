import { filter, notFilter } from "../../src/feature/arrays/filter";

describe("filter arrays test", () => {
  it("Filter", () => {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1], 1)).toEqual([1, 1, 1, 1]);
  });

  it("Not Filter", () => {
    expect(notFilter([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1], 1)).toEqual([
      2, 3, 4, 5, 6, 7, 8,
    ]);
  });
});
