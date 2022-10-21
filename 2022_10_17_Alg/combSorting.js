// // исходный массив 
let array = [3,14,1,7,9,8,11,6,4,2]

function combSorting(arr) {
// получаем длину массива
const l = arr.length;
// оптимальное число для вычисления шага сравнения
const factor = 1.247;
// получаем точный шаг сравнения
let gapFactor = l / factor;
// пока шаг больше единицы
while (gapFactor > 1) {
    // округляем шаг до целого
    const gap = Math.round(gapFactor);
    // и организуем цикл как в пузырьковой сортировке
    for (let i = 0, j = gap; j < l; i++, j++) {
        // если сначала идёт большое число
        if (arr[i] > arr[j]) {
            // меняем их местами
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // выводим текущее состояние массива в консоль 
        // это необязательный шаг, он здесь для наглядности 
        console.log(arr);
    }
    // в конце цикла рассчитываем новый шаг
    gapFactor = gapFactor / factor;
}
}

combSorting(array);
console.log(array);


// function combSorting(arr) {
//   const l = arr.length;
//   const factor = 1.247;
//   let gapFactor = l / factor;
//   while (gapFactor > 1) {
//       const gap = Math.round(gapFactor);
//       for (let i = 0, j = gap; j < l; i++, j++) {
//           if (arr[i] > arr[j]) {
//               [arr[i], arr[j]] = [arr[j], arr[i]];
//           }
//       }
//       gapFactor = gapFactor / factor;
//   }
//   return arr;
// };
// combSorting(array);
// console.log(array);
