import Stack from "../src/feature/Stack";

describe("JS Stack without Array", () => {
  let stack: Stack;

  const addElementAndValidate = (element: any) => {
    stack.push(element);
    expect(stack.top).toBe(0);
    expect(stack.items).toEqual({ 0: element });
    expect(stack.peek).toBe(element);
  };

  beforeEach(() => {
    stack = new Stack();
  });

  it("should create a empty stack", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("should push an element to the stack", () => {
    addElementAndValidate(`🔥`);
  });

  it("should be able to pop an element from the stack", () => {
    // addElementAndValidate(`🚊`);
    addElementAndValidate(`🔥`);
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(`🔥`);
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
});
