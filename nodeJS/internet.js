function enternet(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }

  if (arr[3] <= arr[1]) {
    return arr[0];
  } else {
    return arr[0] + (arr[3] - arr[1]) * arr[2];
  }
}

console.log(enternet('100 10 12 15')) //160
console.log(enternet('100 10 12 1')) //100
// ABCD
// 0123
