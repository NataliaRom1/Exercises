var readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function v1() {
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >= 1) {
      queue(lines[0]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}

function queue(line1) {
  let arr = line1.split(" ");

  let h1 = +arr[0];
  let h2 = +arr[1];
  let h3 = +arr[2];
  let h4 = +arr[3];

  console.log (((h1 <= h2) && (h2 <= h3) && (h3 <= h4)) ||
    ((h1 >= h2) && (h2 >= h3) && (h3 >= h4)) ?
    'YES' : 'NO');
}

v1();

// console.log(queue(1, 2, 3, 4));
// console.log(queue(7, 6, 5, 5));
// console.log(queue(4, 4, 4, 4));
// console.log(queue(5, 2, 3, 1));