var readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let res = 0;
rl.on("line", function (arr) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }
  if (arr[3] <= arr[1]) {
    res = arr[0];
  } else {
    res = arr[0] + (arr[3] - arr[1]) * arr[2];
  }
  rl.close();
});


rl.on("close", () => {
  console.log(res.toString());
});