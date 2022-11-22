function monteCarloMethod(n) {

  let r = 1; //радиус круга
  let norm = Math.PI.toFixed(5); //нормальное значение числа ПИ

  let z = 1000; //количество экспериментов
  let arrRes = [];

  for (let t = 0; t < z; t++) {
    // один экcперимент
    let n0 = 0; //количество попаданий в круг
    for (let i = 0; i < n; i++) {
      let x = Math.random(); //случайное значение от 0 до 1
      let y = Math.random();
      if (x ** 2 + y ** 2 <= r ** 2) {
        n0 += 1;
      }
    }
    arrRes.push((4 * n0 / n)); //массив из чисел пи
  }
  let a = arrRes.reduce((acc, item) => (acc + item)) / z; //среднее ар
  let sum = 0;
  arrRes.forEach(item => {sum += (item - a) ** 2});
  sum = (sum / z) ** (1 / 2);
 
  return (`Количество точек - ${n};
Число ПИ полученное методом Монте-Карло: ${a.toFixed(5)};
"Нормальное" значение числа ПИ: ${norm};
Среднеквадратичное отклонение: ${sum.toFixed(5) }
`);
}

console.log(monteCarloMethod(10));
console.log(monteCarloMethod(100));
console.log(monteCarloMethod(1000));
console.log(monteCarloMethod(10000));
console.log(monteCarloMethod(100000));


