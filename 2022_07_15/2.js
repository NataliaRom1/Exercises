// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

// Пример: (Ввод --> Вывод)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    str = str.toLowerCase().split("");
    for (let i=0; i<str.length; i++){
        if( str.indexOf(str[i]) != str.lastIndexOf(str[i])) {
            return false
        } 
    } return true
    
  }
  console.log(isIsogram("Dercmatoglyphics"))

