# LIFO (Last In First Out)

## Definition

Data management principle where the last element added is the first to be removed.

## Use Cases

- Stack operations
- Undo/Redo functionality
- Browser history navigation

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
}
```