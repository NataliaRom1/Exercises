// var readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// let res = 0;
// rl.on("line", function (N) {
//   if (N % 2 == 0) {
//     res = N / 2;
//   } else if (N == 1) {
//     res = N;
//   } else {
//     res = (N + 1) / 2;
//   }
//   rl.close();
// });


// rl.on("close", () => {
//   console.log(res);
// });

function cake(N) {
  if (N % 2 == 0) {
    return N / 2;
  } else if (N == 1) {
    return N;
  } else {
    return (N + 1) / 2;
  }
}

console.log(cake(6)); //3
console.log(cake(5)); //3