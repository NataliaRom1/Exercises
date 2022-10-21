// Дана строка (UTF-8). Найти самый часто встречающийся в ней символ. Если неск., то можно вывести любой.
// ВАРИАНТ 3 Время:O(N+K)=O(N) Память:О(К)
// Заведем словарь, где ключом является символ, а значением - сколько раз он встретился. Если символ встретился впервые - создаем элементсловаря с ключом, совпадающим с этим символом и значением 0. Прибавляем к элементу словаря с ключом, совпадающим с этим символом, единицу.

let s = 'abcccabbb';
let ans = "";
let ansCounter = 0;
let dictionary = {};
// Object.create(null);

for (let now of s) {
  // console.log(now)
  if (!(now in dictionary)) {
    dictionary[now] = 1;
  } 
  else {
    dictionary[now] += 1;
    // console.log(dictionary[now]);
  }
}
for (let key in dictionary) {
  if (dictionary[key] > ansCounter) {
    ansCounter = dictionary[key];
    ans = key;
  }

} 

console.log(ans); //b
console.log(ansCounter)