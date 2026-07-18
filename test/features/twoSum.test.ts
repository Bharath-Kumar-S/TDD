import { twoSum } from "../../src/feature/maps/twoSum";

describe("Two sum tests", () => {
  const cases: [number[], number, number[]][] = [
    [[2, 7, 11, 15], 9, [0, 1]], // Standard positive case
    [[3, 2, 4], 6, [1, 2]], // Unsorted array
    [[3, 3], 6, [0, 1]], // Duplicate elements
    [[-1, -3, 4, 2], -1, [1, 3]], // Negative numbers
    [[0, 4, 3, 0], 0, [0, 3]], // Zero values
    [[1, 5, 8, 3], 11, [2, 3]], // Elements at the very end
    [[1, 3, 5], 9, [-1, -1]], // no values found for sum
  ];

  cases.forEach((item) => {
    it(`should return [${item[2]}] for [${item[0]}] and target ${item[1]}`, () => {
      expect(twoSum(item[0], item[1])).toEqual(item[2]); // Fixed: Uses the expected array from test data
    });
  });
});
