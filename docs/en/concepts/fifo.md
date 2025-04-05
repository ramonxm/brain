# FIFO (First In First Out)

## Definition

Data management principle where the first element added is the first to be removed.

## Use Cases

- Queue operations
- Order processing systems
- Buffer management

## Implementation Example

```typescript
class Queue<T> {
  private items: T[] = [];

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}
```