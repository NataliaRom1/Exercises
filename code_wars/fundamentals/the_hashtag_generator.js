// Маркетинговая команда тратит слишком много времени на ввод хэштегов.
// Давайте поможем им с нашим генератором хэштегов!

// Вот сделка:

// Он должен начинаться с хэштега ( #).
// Во всех словах первая буква должна быть заглавной.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат представляет собой пустую строку, она должна возвращаться false.

function generateHashtag(str) {
  let res = "";
  let arr = [];
  // добавить проверку
  if (typeof str !== "string" || /\t/.test(str) || /\n/.test(str) ) {
    return false;
  } else {
    arr = str.split(" ").filter(word => word != "");
  }

  if (arr.length == 0) {
    res = false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      res += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    res = "#" + res;
  }
  if (res.length > 140) {
    res = false;
  }
  return res;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata")); // "#HelloThereThanksForTryingMyKata";
console.log(generateHashtag("    Hello     World   ")); // "#HelloWorld";
console.log(generateHashtag("")); // false;
console.log(generateHashtag(3)); // false;
console.log(generateHashtag(" ")); // false;