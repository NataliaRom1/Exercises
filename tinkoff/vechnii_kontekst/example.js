const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let total = 0;

rl.on('close', () => {
  console.log(total);
  process.exit(0);
});

rl.on('line', function (data) {
  data = data.split(' ');
  total = 0 //тут алгоритм рещения
});
Вот пример, в тестовых заданиях дал мне результат "ОК", но 0 баллов и 7 пройденных тестов(может задачу не доделал)



Вот решение задачи А + В на Node.js, как пример работы с входным / выходным потоком

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let total = 0;

process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
  data = data.split(' ');
  total += parseInt(data[0]) || 0;
  total += parseInt(data[1]) || 0;
});