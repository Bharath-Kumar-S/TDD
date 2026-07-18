export default class Stack {
  top: number;
  items: { [key: number]: any };

  constructor() {
    this.top = -1;
    this.items = {};
  }

  push(element: any): void {
    this.top++;
    this.items[this.top] = element;
  }

  get peek(): any {
    return this.items[this.top];
  }

  pop(): any {
    if (this.top === -1) {
      throw new Error("Stack is empty");
    }
    const element = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return element;
  }
}
