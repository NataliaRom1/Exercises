// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).
// Подсказка: не забудьте проверить наличие неправильных значений, таких как null/undefined

function countSheeps(arrayOfSheep) {
    let res = 0;
    for (let i=0; i<arrayOfSheep.length; i++){
        if (arrayOfSheep[i] == true) {
            res += 1;
        } else if (arrayOfSheep[i] == null || arrayOfSheep[i] == undefined || arrayOfSheep[i] == false){
            res +=0;
        } // НУЖЕН ЛИ ЭТОТ БЛОК ВООБЩЕ? ОН ЖЕ НИЧЕГО НЕ ДЕЛАЕТ ПОЛУЧАЕТСЯ
        // else if (arrayOfSheep[i] == null || arrayOfSheep[i] == undefined){
            // return "There is not a valid value, check your sheep!";
        // }
    } return res;
  }

  console.log(countSheeps([true,  true,  true,  false,
                           true,  true,  true,  true ,
                           true,  false, true,  false,
                           true,  false, false, true ,
                           true,  true,  true,  true ,
                           false, null, true,  true]));

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }