// Ваша задача — написать функцию, которая увеличивает строку, чтобы создать новую строку.

// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой.число 1 должно быть добавлено к новой строке.
//   Примеры:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Внимание: Если в числе есть ведущие нули, следует учитывать количество цифр.

function incrementString(strng) {
  let num = strng.match(/[0-9]+$/); //достали числа только с конца, получили строку чисел

  if (num && num.length > 0) { //проверяем на пустоту
    //цикл начнет выполняться тольoко если в конце строки были числа
    
    num = num.join(''); //массив в строку
    let len = num.length; //длина числа с нулями
    num = String(+num + 1); //строку в число, увеличили на 1, число в строку

    return strng.replace(/[0-9]+$/, '') + num.padStart(len, "0"); // если были нули - добавили их к началу числа, если не было - число осталось неизменным
  } 
  return strng + "1";
}

console.log(incrementString("foo"))
console.log(incrementString("foobar23"))
console.log(incrementString("foo099"))
console.log(incrementString("f3o92o1"))
console.log(incrementString("foo00042"))

