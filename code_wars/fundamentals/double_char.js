// Дана строки, вы должны вернуть строку, в которой каждый символ(с учетом регистра) повторяется один раз.

function doubleChar(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }
  return res;
}


console.log(doubleChar("String")) // "SSttrriinngg"
console.log(doubleChar("Hello World")) // "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ ")) // "11223344!!__  "