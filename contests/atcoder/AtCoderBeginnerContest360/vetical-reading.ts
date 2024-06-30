import * as fs from "node:fs";

const [s, t] = fs
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ");

for (let i = 1; i < s.length; i++) {
  for (let j = 0; j < i; j++) {
    let tmp = "";

    for (let k = j; k < s.length; k += i) {
      tmp += s[k];
    }

    if (t === tmp) {
      console.log("Yes");
      process.exit();
    }
  }
}

console.log("No");
