function romanToInt(s: string): number {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const numbers = s.split("").map((str) => dict[str]);

  return numbers.reduce(
    (acc, curr, index) => (curr < numbers[index + 1] ? acc - curr : acc + curr),
    0
  );
}
