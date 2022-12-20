const [line1, line2, line3] = require('readline')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(s => s.trim().split(/\s+/).map(Number));
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let res = 0;

process.stdin.on('end', () => { console.log(res); process.exit(0); });

rl.on("line", function (line1, line2, line3) {
  line1 = line1[0];
  line2 = line2[0];
  line3 = line3[0];
  let n = line1[0]; //количество сотрудников
  let t = line1[1]; //когда уходит торопящийся
  let x = line3; //номер торопящегося
  let res = 0;
  // let arr2 = str2.split(" "); //массив из номеров этажей

  // for (let i = 0; i < arr2.length; i++) {
  //   arr2[i] = +arr2[i];
  // }

  //начинаю идти с этажа торопящегося сотрудника
  let start = +line2.splice(x - 1, 1); //получаю номер стартового этажа и удаляю его из массива этажей

  let max = Math.max.apply(null, arr2);
  let min = Math.min.apply(null, arr2);
  // let max = line2[0];
  // let min = line2[line2.length -1];


  if (t >= (max - start) || t >= (start - min)) {
    res = max - min;
  } else {
    if ((max - min + max - start) < (max - min + start - min)) {
      res = (max - min + max - start);
    } else {
      res = (max - min + start - min);
    }
  }
  // rl.close();
})