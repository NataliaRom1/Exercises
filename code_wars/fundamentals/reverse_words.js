// Завершите функцию, которая принимает строку и переворачивает каждое слово в строке.Все пробелы в строке должны быть сохранены.

function reverseWords(str) {
  return str.split(" ")
    .map(el => el.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!")) //"sihT si na !elpmaxe"
// console.log(reverseWords("double  spaces")) //"elbuod  secaps"

