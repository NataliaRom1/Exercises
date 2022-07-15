// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
// Примеры ввода/вывода:
// XO("ooxx") => true
// XO("xooxx") => false


function XO(str) {
    return console.log( str.replaceAll("x", "").length == str.replaceAll("o", "").length);
}


XO("xx2oo2")