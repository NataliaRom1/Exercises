function documents(str1, str2, num) {
  let n = +str1[0]; //количество сотрудников
  let t = +str1[2]; //когда уходит торопящийся
  let x = +num; //номер торопящегося
  let res = 0;
  let arr2 = str2.split(" "); //массив из номеров этажей

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = +arr2[i];
  }

  //начинаю идти с этажа торопящегося сотрудника
  let start = +arr2[x-1]; //получаю номер стартового этажа и удаляю его из массива этажей
  console.log(arr2, start);
 
  // let max = Math.max.apply(null, arr2);
  // let min = Math.min.apply(null, arr2);
  let min = arr2[0];
  let max = arr2[arr2.length - 1];
  
  console.log(max,min)


  if (t >= (max - start) || t >= (start - min)) {
    res = max - min;
  } else {
    if ((max - start) < (start - min)) {
      res = (max - min + max - start);
    } else {
      res = (max - min + start - min);
    }
  }
  return res;
}

console.log(documents("5 5", "1 4 9 16 25", "2")); //24 пролета
console.log(documents("6 4", "1 2 3 6 8 25", "5")); //31 пролета
