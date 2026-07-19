import { sortArray } from "../../src/feature/arrays/sort";

const cases = [
  {
    ip: [1, 8, 5, 2, 4, 3, 9],
    op: [1, 2, 3, 4, 5, 8, 9],
  },
  {
    ip: [1, 1],
    op: [1, 1],
  },
];

describe("sort array", () => {
  cases.forEach(({ ip, op }) => {
    it(`test sorting ip: ${ip} and op: ${op}`, () => {
      expect(sortArray(ip)).toEqual(op);
    });
  });
});
