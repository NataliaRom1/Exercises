function rowSumOddNumbers(row) {
  let last = 0;
  //определили количество чисел от вершины до нужной струки включительно
  for (i = 1; i <= row; ++i) {
    last += i
  }
  //получили значение последнего числа 
  last = last * 2 - 1
  //увидели что количество элементов в ряду равно номеру ряда и использовали алгоритм последовательности нечетных чисел(n,n+2,n+2*2,n+2*3...)
  first = last - (row - 1) * 2;
  res = 0;
  //суммируем все нечетные числа с первого до последнего
  for (i = first; i <= last; i += 2) {
    res += i
  }
  return res;
}

// console.log(rowSumOddNumbers(2)) //3 + 5 = 8
console.log(rowSumOddNumbers(3)) // 27
// console.log(rowSumOddNumbers(10)) // 1000