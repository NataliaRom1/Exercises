function numbers([line1, line2]) {
  line1 = line1.trim().split('\n').map(s => s.trim().split(/\s+/).map(Number));
  line2 = line2.trim().split('\n').map(s => s.trim().split(/\s+/).map(Number));

  line1 = line1[0];
  line2 = line2[0];

  let n = line1[0]; //количество чисел
  let k = line1[1]; //количество операций
 
  //определим разряды для каждого числа
  for (let i = 0; i < line2.length; i++) {
    let j = 0;
    while (line2[i] % 10 != 0) {
      j++
    }
    console.log(j)
  } 


}

// console.log(numbers(['5','  ','2'], ['1',' ',' ','2',' ',' ','1',' ',' ','3',' ',' ','5']));
console.log(numbers(['  5  2', '1  2  1  3  10']));
