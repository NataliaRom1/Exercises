// Перевернуть переданную строку.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function solution(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(solution('world')) //'dlrow'
console.log(solution('word')) //'drow'