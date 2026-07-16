class Stack {
  top: number;

  constructor() {
    this.top = -1;
  }
}

describe("JS Stack without Array", () => {
  let stack = new Stack();

  it("should create a empty stack", () => {
    expect(stack.top).toBe(-1);
  });

  it.todo("should push an element to the stack");
});
