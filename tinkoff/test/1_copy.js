function logic(line1, line2, line3) {
  let arr1 = line1.split(" ").map(num => +num);
  let arr2 = line2.split(" "); //Массив слов в стоке
  let arr3 = line3.split(" "); //массив цветов

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);

  let n = arr1[0]; //количество букв
  let res = 0;

  let num = arr2.length; //количество слов

  // перебираем слова в строке
  for (let i = 0; i < arr2.length; i++) {

    let len = arr2[i].length; //длинна слова
    // console.log(len + 'Длинна');
    let word = arr3[0].substring(0, len); //цвета для этого слова
    // console.log(word + "цвта для слова");

    //перебираем буквы внтри маски цвета для слова
    for (let j = 0; j < word.length; j++) {
      // если есть хотя бы одна пара букв подряд, то останавливаем
      if (word[j] == word[j + 1])
        res += 1;
        break;  
    }

    // res = num - res;
    arr3[0] = arr3[0].replace(word, ""); //скоратили строку цветов на слово
    // console.log(arr3 + "оставшиеся цвета");
  }
  console.log(res);
}

logic('27', 'Algorithms and Data Structures','BBBBBBBBBBBYBYYYYBBBBBBBBBB');
logic('7', 'Tinkoff','BYBYBYB');


// 7
// Tinkoff
// BYBYBYB
// 0

// 27
// Algorithms and Data Structures
// BBBBBBBBBBBYBYYYYBBBBBBBBBB
// 3










// 7
// Tinkoff
// BYBYBYB
// 0

// 27
// Algorithms and Data Structures
// BBBBBBBBBBBYBYYYYBBBBBBBBBB
// 3