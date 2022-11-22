// Возьмите 2 строки s1и s2 содержащие только буквы от a до z.Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы(каждая из которых взята только один раз) из s1 или s2.
//   Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  //объединили две строки в одну и сделали из них массив
  let str = s1.concat(s2);
  let newArr = Array.from(str); 
  //сделали сет из массива, чтобы исключить повторяющиеся буквы и обратно в массив
  newArr = [...new Set(newArr)];
 //отсортировали и объединили все элементы массива в строку
  let ans = newArr.sort().join("");

  return ans;
}

console.log(longest("axab", "xac")); //abcx
console.log(longest("abcdefghijklmnopqrstuvwxyz")); //abcdefghijklmnopqrstuvwxyz
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); //"abcdefklmopqwxy"



