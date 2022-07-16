// Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой, разделяющей их.
// Это должно выглядеть так:
// Sam Harris=>S.H
// patrick feeney=>P.F

function abbrevName(name){
return name
.split(" ")
.map(word => word.substring(0,1).toUpperCase())
.join(".");    
}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("patrick feeney"));