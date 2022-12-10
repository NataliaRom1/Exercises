// Вам даны lengthи widthчетырехугольника.Многоугольник может быть прямоугольным или квадратным.
// Если это квадрат, вернуть его площадь.Если это прямоугольник, верните его периметр.

//   Пример(Ввод1, Ввод2-- > Выход):
// 6, 10 -- > 32
// 3, 3 -- > 9

const areaOrPerimeter = function (l, w) {
  let res = 0;
  if (l == w) {
    res = l * w;
  } else {
    res = 2 * l + 2 * w;
  }
  return res;
};

console.log(areaOrPerimeter(6, 10)); // 32
console.log(areaOrPerimeter(3, 3)); // 9
