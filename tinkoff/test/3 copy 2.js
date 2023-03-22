var readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


function v1() {
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >= 1) {
      logic(lines[0]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}


function logic(line1) {
  let arr1 = line1.split(" ").map(num => +num);
  let n = arr1[0];

  let res = 0;
  let res_a = 0;
  let res_b = 0;

  for (let a = 1; a < (n + 1) / 2; a++) {
    b = n - a;
    if (nok(a, b) < res || res == 0) {
      res = nok(a, b);
      res_a = a;
      res_b = b;
    }
  }
  // console.log(res);
  console.log(res_a + " " + res_b);
}


function nod(a, b) {
  var p = a % b
  while (p != 0) {
    a = b
    b = p
    p = a % b
  }
  return b
}

function nok(a, b) {
  let res_nok = a * b / nod(a, b);
  return res_nok;
}

v1();