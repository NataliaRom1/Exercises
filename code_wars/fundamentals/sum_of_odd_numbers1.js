function rowSumOddNumbers(row) {

  let last = 0;

  for (i = 1; i <= row; ++i) {
    last += i
  }
    last = last * 2 - 1
    first = last - (row - 1) * 2;
  res = 0;
  for (i = first; i <= last; i += 2) {
    res += i
  }
  return res;
}

console.log(rowSumOddNumbers(2)) //3 + 5 = 8
console.log(rowSumOddNumbers(3)) // 27
console.log(rowSumOddNumbers(10)) // 1000