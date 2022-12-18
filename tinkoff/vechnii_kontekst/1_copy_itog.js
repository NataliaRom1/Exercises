var readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function v1() {
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >= 1) {
      mobile(lines[0]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}

function mobile(line1) {
  let arr = line1.split("  ");
  let A = +arr[0];
  let B = +arr[1];
  let C = +arr[2];
  let D = +arr[3];

  if (D <= B) {
    res = A;
  } else {
    res = A + (D - B) * C;
  }

  console.log(res);
}

v1();
