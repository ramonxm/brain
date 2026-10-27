---
sidebar_label: "Array"
description: "A sequence of elements stored in contiguous memory, with O(1) access by index."
---

# Array

An **array** stores a sequence of elements of the same type in **contiguous** memory positions. Since each element's position can be computed from its index, access is immediate.

## How it works

- **Indexed**: element `i` lives at address `start + i × element_size`
- **Fixed size**: set at creation, in most low-level languages
- **Homogeneous**: every element has the same type

Dynamic arrays (`list` in Python, `vector` in C++, `Array` in JavaScript) double their capacity when full, which makes appending O(1) amortized.

## Complexity

| Operation                   | Complexity      |
| :-------------------------- | :-------------- |
| Access by index             | O(1)            |
| Update by index             | O(1)            |
| Search by value             | O(n)            |
| Append                      | O(1) amortized  |
| Insert/remove in the middle | O(n)            |

## Implementation

```python
arr = [10, 20, 30, 40, 50]

print(arr[2])  # Output: 30

arr[1] = 25
print(arr)  # Output: [10, 25, 30, 40, 50]

if 40 in arr:  # linear search
    print("Found")

arr.append(60)  # insert at the end
arr.remove(30)  # remove by value, shifting the following elements
print(arr)  # Output: [10, 25, 40, 50, 60]
```

## Applications

- Collections with frequent access by position
- Building block for other structures (stacks, queues, heaps, hash tables)
- Matrices and buffers

## Pros and cons

### Advantages

- O(1) access by index
- Excellent cache usage, thanks to contiguous memory
- No extra memory overhead per element

### Disadvantages

- Fixed size for static arrays
- Insertions and removals in the middle cost O(n)
- Every element must have the same type (in typed languages)

## When to use

- When the number of elements is known or rarely changes
- When access by index is the most frequent operation

## Related

- [Linked list](./linked-list.md)
- [Stack](./stack.md)
- [Binary search](../algorithms/search/binary-search.md)
