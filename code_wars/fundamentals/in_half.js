// Вам дана строка S длины 4, состоящая из заглавных букв латинского алфавита.
// Определите, правда ли, что S состоит из двух различных букв, каждая из которых встречается
// дважды
// Вам нужно ответить на T независимых наборов входных данных

function twoPairsOfLetters(S) {
  let T = readline();
  let newStr = S.split('').sort().join('');

  if (newStr[0] == newStr[1] && newStr[2] == newStr[3] && newStr[1] != newStr[2]) {
      return "Yes"
    } return "No"
}

console.log(twoPairsOfLetters('ABBA')); //AABB //yes
console.log(twoPairsOfLetters('GOGO')); //yes
console.log(twoPairsOfLetters('FIRE')); //EFIR //no
console.log(twoPairsOfLetters('PPPP')); //no
