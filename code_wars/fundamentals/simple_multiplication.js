// Это ката об умножении заданного числа на восемь, если оно четное, и на девять в противном случае.

function simpleMultiplication(number) {
  number = Math.round(number);
  if (number % 2 == 0) {
    number *= 8;
  } else { number *= 9; }

  return number
}


console.log(simpleMultiplication(1,2));
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(-2));