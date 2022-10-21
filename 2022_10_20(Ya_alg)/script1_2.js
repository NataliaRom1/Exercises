// Дана строка (UTF-8). Найти самый часто встречающийся в ней символ. Если неск., то можно вывести любой.
// ВАРИАНТ 2 Время:O(N*K) Память:О(N+К)=O(N)
// Перебираем все символы, затем все позиции и в случае совпадения добавляем 1 к счетчику.

let s = 'abcccabb';
let ans = "";
let ansCounter = 0;
let mySet = new Set(s);

for (let now of mySet) {
  let nowCounter = 0;

  for (let j = 0; j < s.length; j++) {
    if (now == s[j]) {
      nowCounter += 1;
    }
  } 
  if (nowCounter > ansCounter) {
    ans = now;
    ansCounter = nowCounter;
  }
} 
console.log(ans);