function logic(line1, line2) {
  let arr1 = line1.split(" ").map(num => +num);
  let arr2 = line2.split(" ").map(num => +num);

  let sum = arr1[0] * arr2[0] + arr1[1] * arr2[1] + arr1[2] * arr2[2];

  let max = arr2[0] + arr2[1] + arr2[2];

  let res = 0;
  for (let a = 0; a <= max; a++) {
    for (let b = 0; b <= max; b++) {
      for (let c = 0; c <= max; c++) {
        if (a + b + c == sum) {
          console.log(a, b, c)
          res++;
        }
      }
    }
  }

  console.log(res);
}

// logic('1 1 1', '1 0 2');
logic('1 2 3', '3 5 4');

