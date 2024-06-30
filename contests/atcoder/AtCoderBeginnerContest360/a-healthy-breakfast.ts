import * as fs from "node:fs";

const judgeInput = fs.readFileSync("/dev/stdin", "utf8");

function main(input: string) {
  const [firstChar, secondChar] = input.split("");

  if (firstChar === "R") {
    return "Yes";
  }

  if (secondChar === "M" || firstChar === "M") {
    return "No";
  }

  return "Yes";

}


console.log(main(judgeInput));

