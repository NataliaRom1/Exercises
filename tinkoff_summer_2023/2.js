function cheking(n, m, k) {
  // return Math.ceil(k * n / m);
  let res = `${(n * k) / m}`.split('.');
  (res.length > 1) ? (res = (+res[0] + 1)) : (res = +res[0]) 
  
  return res;
};

console.log(cheking(3, 2, 2)) //3
console.log(cheking(7, 3, 2)) //5