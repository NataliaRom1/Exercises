var readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Накапливаем строки в список
function v1() {
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >= 2) {
      logic(lines[0], lines[1]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}




function logic(line1, line2) {
  let arr1 = line1.split(" ").map(num => +num);
  let arr2 = line2.split(" ").map(num => +num);

  let sum = arr1[0] * arr2[0] + arr1[1] * arr2[1] + arr1[2] * arr2[2];

  let max = arr2[0] + arr2[1] + arr2[2];

  let res = 0;
  for (let a = 0; a <= max; a++) {
    for (let b = 0; b <= max; b++) {
      for (let c = 0; c <= max; c++) {
        if (a + b + c == sum) {
          res++;
        }
      }
    }
  }

  console.log(res);
}

v1();

