function logic(line1) {
  let arr1 = line1.split(" ").map(num => +num);
  let n = arr1[0];

  let res = 0;
  let res_a = 0;
  let res_b = 0;

  for (let a = 1; a < (n + 1) / 2; a++) {
    b = n - a;
    if (nok(a, b) < res || res == 0) {
      res = nok(a, b);
      res_a = a;
      res_b = b;
    }
  }
  // console.log(res);
  console.log(res_a + " " + res_b);
}
console.log(logic("3")); //2 //1 2
console.log(logic("6")); //3 //3 3
console.log(logic("9")); //6 //3 6


function nod(a, b) {
  var p = a % b
  while (p != 0) {
    a = b
    b = p
    p = a % b
  }
  return b
}

function nok(a, b) {
  let res_nok = a * b / nod(a, b);
  return res_nok;
}

// console.log(nok(3, 3));
// console.log(nok(1, 2));
// console.log(nok(3, 6));

