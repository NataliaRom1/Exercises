function logic(line1) {
  let n = line1.split(" ").map(num => +num);
  let res = 0;
  let res_a = 0;
  let res_b = 0;
  for (let a = 1; a < n; a++) {
    for (let b = 1; b < n; b++) {
      if (a + b == n)
        // console.log(a + " " + b);
        res_a = a;
        res_b = b;
        console.log(res_a, res_b)
      
      if (nok(a, b) > nok(res_a, res_b)) {
        // console.log(res_a, res_b)
      }
      
    }
  }
  // console.log(res);
}
console.log(logic("3"));
// console.log(logic("6"));
// console.log(logic("9"));


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

