# 📦 Array

## Introduction

An **array** is a data structure that stores a fixed-size sequence of elements of the same type in contiguous memory locations.

## Key Properties
- **Indexed**: Each element can be accessed directly by its index
- **Fixed size**: The size is defined at creation and cannot be changed
- **Homogeneous**: All elements are of the same type

## Common Operations
- **Access**: O(1) - Direct access by index
- **Update**: O(1) - Direct update by index
- **Search**: O(n) - Linear search for an element
- **Insert/Delete**: O(n) - May require shifting elements

## Example (Python)

```python
# Creating an array
arr = [10, 20, 30, 40, 50]

# Accessing elements
print(arr[2])  # Output: 30

# Updating elements
arr[1] = 25
print(arr)  # Output: [10, 25, 30, 40, 50]

# Searching for an element
if 40 in arr:
    print("Found!")

# Inserting an element (at the end)
arr.append(60)

# Deleting an element (by value)
arr.remove(30)
print(arr)  # Output: [10, 25, 40, 50, 60]
```

## When to Use Arrays
- When you need fast, direct access to elements by index
- When the number of elements is known and fixed
- For implementing other data structures (stacks, queues, etc.)

## Limitations
- Fixed size (in most languages)
- Insertion and deletion can be costly (O(n))
- All elements must be of the same type

## Related Data Structures
- **Dynamic Array (List in Python, Vector in C++)**: Resizable version of an array
- **Linked List**: Allows efficient insertions/deletions but slower access 