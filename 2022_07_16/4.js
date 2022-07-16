// Учитывая целое число, определите, является ли оно квадратным числом :
// В математике квадратное число или идеальный квадрат — это целое число, являющееся квадратом целого числа; другими словами, это произведение некоторого целого числа на самого себя.
// В тестах всегда будет использоваться некоторое целое число, так что не беспокойтесь об этом в языках с динамической типизацией.


var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    } return false;
  }

  console.log(isSquare(1))

// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }