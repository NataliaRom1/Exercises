// Дана последовательность чисел длинной N. Найти первое (левое) вхождение положительного числа X в нее или вывести -1, если число Х не встречалось.


// ДОДЕЛАТЬ


function findX(sequence, x) {
  ans = -1;
  for (let i = 0; i < sequence.length; i++) {
    if (ans == -1 && sequence[i] == x) {
      ans = i;
    }
  }
  return ans;
}

console.log(findX([1,3,5,7,3,2],3))