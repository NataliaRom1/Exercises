// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
// Примеры ввода/вывода:
// XO("ooxx") => true
// XO("xooxx") => false


function XO(str) {
    return str.replaceAll(/x/gi, "").length == str.replaceAll(/o/gi, "").length;
}


console.log(XO("Xoxxoo"))