var readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function v1() {
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >= 1) {
      cheking(lines[0]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}

function cheking(line1) {
  let arr = line1.split(" ");

  let n = +arr[0];
  let m = +arr[1];
  let k = +arr[2];

  // return Math.ceil(k * n / m);
  let res = `${(n * k) / m}`.split('.');
  (res.length > 1) ? (res = (+res[0] + 1)) : (res = +res[0]) 
  
  console.log(res);
};

v1();

// console.log(cheking(3, 2, 2)) //3
// console.log(cheking(7, 3, 2)) //5