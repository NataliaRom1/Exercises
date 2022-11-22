function monteCarloMethod(n) {

  // let n = 1000; //количество точек
  let r = 1; //радиус круга
  let n0 = 0; //количество попаданий в круг
  let res = 0;
  let norm = Math.PI.toFixed(5); //нормальное значение числа ПИ
  let sum = 0;
  let a;

  for (let i = 0; i < n; i++) {
    let x = Math.random(); //случайное значение от 0 до 1
    let y = Math.random();

    if (x ** 2 + y ** 2 <= r ** 2) {
      n0 += 1;
    }
    res = +((4 * n0 / n).toFixed(5));


  }
  return (`Количество точек - ${n};
Число ПИ полученное методом Монте-Карло: ${res};
"Нормальное" значение числа ПИ: ${norm}
`);
}

console.log(monteCarloMethod(10));
console.log(monteCarloMethod(100));
console.log(monteCarloMethod(1000));
console.log(monteCarloMethod(10000));
console.log(monteCarloMethod(100000));