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
  let arr2 = line2.split(" "); //Массив слов в стоке
  let arr3 = line3.split(" "); //массив цветов

  // let n = arr1[0]; //количество букв
  let res = 0;

  // let num = arr2.length; //количество слов

  // перебираем слова в строке
  for (let i = 0; i < arr2.length; i++) {

    let len = arr2[i].length; //длинна слова
    let word = arr3[0].substring(0, len); //цвета для этого слова

    //перебираем буквы внтри маски цвета для слова
    for (let j = 0; j < word.length; j++) {
      // если есть хотя бы одна пара букв подряд, то останавливаем
      if (word[j] == word[j + 1])
        res += 1;
      break;
    }
    arr3[0] = arr3[0].replace(word, ""); //скоратили строку цветов на слово
  }
  console.log(res);
}

v1();










// 7
// Tinkoff
// BYBYBYB
// 0

// 27
// Algorithms and Data Structures
// BBBBBBBBBBBYBYYYYBBBBBBBBBB
// 3