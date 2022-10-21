function quadraticEquation(a,b,c) {
  // let a = 3;
  // let b = 13;
  // let c = -10;

  let d = b**2 - 4 * a * c;
  console.log(d)
  let res;

  if (a == 0) {
    if (b != 0) {
      res = (-c/b);
    } else if (b == 0 && c == 0) {
      res = 'Infinite number of solutions';
    }
  }
  else if (d < 0) {
    res = 'no solutions';
  } 
  else if (d == 0) {
    let x = (-b + Math.sqrt(d)) /(2 * a);

    res = x;
  } 
  else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    if (x1 < x2) {
      res = [x1,x2];
    } 
    else {
      res = [x2,x1];
    }
  }
  return res;
}

// console.log(quadraticEquation(3,13,-10));
// console.log(quadraticEquation(1,2,1)); //-1
// console.log(quadraticEquation(1,1,1)); //no
// console.log(quadraticEquation(0,1,1)); //-1
// console.log(quadraticEquation(0,0,1)); //no sol
// console.log(quadraticEquation(0,0,0)); //inf num
console.log(quadraticEquation(-5,4,1));