// Дана строка (UTF-8). Найти самый часто встречающийся в ней символ. Если неск., то можно вывести любой.
//ВАРИАНТ 1 Время:O(N^2) Память:О(N)

let s = 'abcabb';
let ans = "";
let ansCounter = 0;

for (let i = 0; i < s.length; i++) {
  let nowCounter = 1;

  for (let j = i+1; j < s.length; j++) {
    if (s[i] == s[j]) {
      nowCounter += 1;
    }
  } 
  if (nowCounter > ansCounter) {
    ans = s[i];
    ansCounter = nowCounter;
  }
} 
console.log(ans);