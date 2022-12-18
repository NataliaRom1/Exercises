// Задание для иллюстрации.
// На вход: 2 строки, нужно найти сумму всех чисел.

const readline = require("readline");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});

// Накапливаем строки в список
function v1()
{
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >=2)
    {
      logic(lines[0], lines[1]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}

// Вложенный вызов (читаем одну строку, потом другую)
function v2()
{
  rl.once("line", line1 => {
    rl.once("line", line2 => {
      logic(line1, line2);
      rl.close;
    })
  });
  rl.on('close', () => process.exit(0));
}

// Ожидания и промисы
async function v3()
{
  // задаем вопрос и получаем ответ
  const read = (query) => new Promise((resolve) => rl.question(query, resolve));
//  read('').then(async (a) => {
    const l1 = await read('');
    const l2 = await read('');
    logic(l1, l2);
    rl.close();
//  });
  rl.on('close', () => process.exit(0));
}

function logic(line1, line2)
{
  let arr = line1.split(" ").concat(line2.split(" "));
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { sum += (+arr[i]); }
  console.log(sum)
}

v1();
//v2();
//v3();