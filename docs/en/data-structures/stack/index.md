# Stack

## Use Cases

- Function call management (call stack)
- Undo/Redo operations in editors
- Mathematical expressions evaluation
- Web page navigation (browser history)
- Parentheses validation in expressions

## Time Complexity

- Push/Pop: O(1)
- Peek: O(1)
- Search: O(n)

## Complexity

- Push/Pop: O(1)
- Search: O(n)

## Implementation Example

```typescript
class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

class ArrayStack<T> implements Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
}
```