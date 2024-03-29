var readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Накапливаем строки в список
function v1() {
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >= 3) {
      logic(lines[0], lines[1], lines[2]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}


function logic(line1, line2, line3) {
  let arr1 = line1.split(" ").map(num => +num);
  let arr2 = line2.split(" ").map(num => +num);
  let arr3 = line3.split(" ").map(num => +num);

  // for (let i = 0; i < arr2.length; i++) {
  //   arr2[i] = +arr2[i];
  // }

  let n = arr1[0]; //количество сотрудников
  let t = arr1[1]; //когда уходит торопящийся
  let x = arr3; //номер торопящегося
  let res = 0;

  //начинаю идти с этажа торопящегося сотрудника
  let start = arr2[x - 1]; //получаю номер стартового этажа

  let min = arr2[0];
  let max = arr2[arr2.length - 1];


  if (t >= (max - start) || t >= (start - min)) {
    res = max - min;
  } else {
    if ((max - start) < (start - min)) {
      res = (max - min + max - start);
    }
    else {
      res = (max - min + start - min);
    }
  }
  console.log(res);
}

v1();