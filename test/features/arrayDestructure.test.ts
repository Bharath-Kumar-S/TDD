import { destructure } from "../../src/feature/arrays/arrayDestructure";

describe("Test array destructure", () => {
  it("proper destructure", () => {
    const [x, y] = destructure();
    expect(x).toEqual(5);
    expect(y).toEqual(10);
  });
});
