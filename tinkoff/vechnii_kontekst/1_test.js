var readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function v3() {
  // задаем вопрос и получаем ответ
  const read = (query) => new Promise((resolve) => rl.question(query, resolve));
  //  read('').then(async (a) => {
  const l1 = await read('');
  mobile(l1);
  rl.close();
  //  });
  rl.on('close', () => process.exit(0));
}


function mobile(l1) {
  let res = 0;
  let arr = l1.split("  ");
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

v3();