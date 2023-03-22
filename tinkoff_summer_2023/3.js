function findMin(pos_a, pos_b, pos_c, pos_d) {
  const numbers = [pos_a, pos_b, pos_c, pos_d]; // исходный массив

  // создадим переменную в которую будем сохранять текущее минимальное значение
  // установим в нее значение из первого элемента массива
  let minimum = numbers[0];
  for (const item of numbers) {
    if (item < minimum) {
      minimum = item; // если находим другое минимальное число, то сохраняем в переменную
    }
  }
  return minimum; // => 1
}

// n - длинна строки
// s - строка

function str(n, s) {
  // Позиций букв где встречались последний раз буквы a, b, c, d. Приравняем к -1 предполагая, что мы еще их не встретили 
  let pos_a = -1;
  let pos_b = -1;
  let pos_c = -1;
  let pos_d = -1;
  let res = -1;
  for (let r = 0; r < n; r++) { // Фиксируем правую границу подотрезка 

    // обновляем позицию где последний раз встретили 'a'
    if (s[r] == 'a') {
      pos_a = r
    };

    // обновляем позицию где последний раз встретили 'b'
    if (s[r] == 'b') {
      pos_b = r
    };

    // обновляем позицию где последний раз встретили 'c'
    if (s[r] == 'c') {
      pos_c = r
    };

    // обновляем позицию где последний раз встретили 'd'
    if (s[r] == 'd') {
      pos_d = r
    };

    let l = findMin(pos_a, pos_b, pos_c, pos_d);
    // Math.min([value1[, value2[, ...]]])

    let len = r - l + 1;
    if ((l != -1) && (res == -1 || len < res)) {
        res = len;
      }
    
  }
  return res;
}


  console.log(str(12, 'aabbccddbadd')) //5
  console.log(str(16, 'aaaabbbbccccdddd')) //10
  console.log(str(12, 'dbbccca')) //7
  console.log(str(12, 'abcabac')) //-1