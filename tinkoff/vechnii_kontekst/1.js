let mobile = function (line1) {
  let res = 0;
  let arr = line1.split("  ");
  let A = +arr[0];
  let B = +arr[1];
  let C = +arr[2];
  let D = +arr[3];
  console.log(A, B, C, D);

  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = +arr[i];
  // }
  if (D <= B) {
    res = A;
  } else {
    res = A + (D - B) * C;
  }
  return res;
}

console.log(mobile('100  10  12  15'));
console.log(mobile('100  10  12  1'));