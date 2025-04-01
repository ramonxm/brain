# Array

## Array
An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
For example, in the array, `arr`, of size 5, we can calculate the memory location of each element `arr[i]` by using the following formula:
```
location(arr[i]) = base_value + i * size_of_element
```
Here, `base_value` is the memory location of the first element of the array `arr`, which is `location(arr[0])`. The size of each element is the same, which is the size of the data type used to store the elements.
## Array in Rust
In Rust, arrays are fixed-size collections of elements of the same type. The size of an array is determined at compile time and cannot be changed. Arrays are declared using square brackets `[]` and specifying the type of elements and the number of elements in the array. For example, the following code declares an array of 5 integers:
```rust
let arr: [i32; 5] = [1, 2, 3, 4, 5];
```
Here, `arr` is an array of 5 integers. The type of the array is `[i32; 5]`, which means an array of 5 integers. The elements of the array are initialized with the values 1, 2, 3, 4, and 5.
## Array in JavaScript
In JavaScript, arrays are dynamic collections of elements of the same type. The size of an array is not fixed and can be changed at runtime. Arrays are declared using square brackets `[]` and specifying the elements of the array. For example, the following code declares an array of 5 integers:
```js
let arr = [1, 2, 3, 4, 5];
```
Here, `arr` is an array of 5 integers. The elements of the array are initialized with the values 1, 2, 3, 4, and 5.
## Array in Python
In Python, arrays are dynamic collections of elements of the same type. The size of an array is not fixed and can be changed at runtime. Arrays are declared using square brackets `[]` and specifying the elements of the array. For example, the following code declares an array of 5 integers:
```python
arr = [1, 2, 3, 4, 5]
```
Here, `arr` is an array of 5 integers. The elements of the array are initialized with the values 1, 2, 3, 4, and 5.
## Array in C++
In C++, arrays are fixed-size collections of elements of the same type. The size of an array is determined at compile time and cannot be changed. Arrays are declared using square brackets `[]` and specifying the type of elements and the number of elements in the array. For example, the following code declares an array of 5 integers:
```cpp
int arr[5] = {1, 2, 3, 4, 5};
```
Here, `arr` is an array of 5 integers. The type of the array is `int[5]`, which means an array of 5 integers. The elements of the array are initialized with the values 1, 2, 3, 4, and 5.

