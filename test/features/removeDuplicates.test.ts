import { removeDuplicates } from "../../src/feature/sets/removeDuplicates";

const testData = [
  {
    ip: [1, 2, 3, 4, 5, 6],
    op: [1, 2, 3, 4, 5, 6],
  },
  {
    ip: [2, 2, 2, 2, 4],
    op: [2, 4],
  },
];

describe("Remove duplicates with stack", () => {
  testData.forEach((data) => {
    it("Should return same array if no duplicates found!", () => {
      expect(removeDuplicates(data.ip)).toEqual(data.op);
    });
  });
});
