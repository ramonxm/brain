# 📚 Complete Guide to Big O Notation

## Introduction
**Big O** is a way to measure algorithm efficiency in terms of **time** (speed) or **space** (memory) **as the input grows**.

Big O does **not** measure actual execution time — it measures **how time/memory grows** depending on input size.

---

# 🧠 Main Big O Complexities

## O(1) – Constant Complexity
> "You turn on a light by flipping the switch."

- ✅ Execution time doesn't depend on input size.
- ✅ Always performs the same number of steps.

---

## O(log n) – Logarithmic Complexity
> "Finding a name in the phone book by splitting the book in half each time."

- ✅ Each operation reduces the problem by half.
- ✅ Classic example: **Binary Search**.

---

## O(n) – Linear Complexity
> "Looking at each card in a deck to find the Ace of Spades."

- ✅ Execution time grows proportionally to input size.
- ✅ Example: **Iterating through a list**.

---

## O(n log n) – Quasilinear Complexity
> "Divide to conquer and then combine."

- ✅ Better than O(n²) but worse than O(n).
- ✅ Used in efficient sorting algorithms like **Merge Sort** and **Quick Sort** (on average).

---

## O(n²) – Quadratic Complexity
> "Comparing each student with every other student in a classroom."

- ✅ Each element is compared with every other element.
- ✅ Examples: **Bubble Sort**, **Selection Sort**.

---

## O(2ⁿ) – Exponential Complexity
> "Testing all possible combinations to solve a magic cube."

- ✅ Number of operations doubles with each added element.
- ✅ Examples:
  - **Subsets**: generating all subsets of a list.
  - **Knapsack Problem** (brute-force).

---

## O(n!) – Factorial Complexity
> "Arranging all possible orders for party guests."

- ✅ Tries all possible permutations.
- ✅ Examples:
  - **Traveling Salesman Problem** (brute-force).
  - **Generating all permutations** of a list.

---

# 📋 Complexity Summary Table

| Complexity | Name           | Growth                        | Practical Example                 |
|:-------------|:---------------|:------------------------------|:----------------------------------|
| O(1)         | Constant       | Fixed, doesn't change with n  | Access array item by index       |
| O(log n)     | Logarithmic    | Grows slowly                  | Binary Search                     |
| O(n)         | Linear         | Grows proportionally to n     | Iterate through array             |
| O(n log n)   | Quasilinear    | Between linear and quadratic  | Merge Sort, Quick Sort            |
| O(n²)        | Quadratic      | Grows quickly                 | Bubble Sort, Selection Sort       |
| O(2ⁿ)        | Exponential    | Grows absurdly fast           | Subsets, combination problems     |
| O(n!)        | Factorial      | Explosive growth              | Permutations, Traveling Salesman  |

---

# 📈 Visual Growth Chart of Complexities

Growth according to input size n:

```md
|
|                                         O(n!)
|                                     O(2^n)
|                                 O(n²)
|                             O(n log n)
|                          O(n)
|                       O(log n)
|__________O(1)____________________________________> n
```

- O(1) remains constant.
- O(log n) grows very slowly.
- O(n) grows proportionally.
- O(n log n) grows a bit faster.
- O(n²) grows very quickly.
- O(2ⁿ) and O(n!) grow absurdly and quickly become impractical.

---

# ✨ Tips to Memorize Big O

- 🔵 **Constant (O(1))** → "Direct access"
- 🟢 **Logarithmic (O(log n))** → "Dividing by half"
- 🟡 **Linear (O(n))** → "Proportional"
- 🟠 **Quasilinear (O(n log n))** → "Divide and conquer"
- 🔴 **Quadratic (O(n²))** → "Double comparisons"
- 🟣 **Exponential (O(2ⁿ))** → "Doubling combinations"
- ⚫ **Factorial (O(n!))** → "All possible orders" 