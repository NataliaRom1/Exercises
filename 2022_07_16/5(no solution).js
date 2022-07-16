// Пит любит печь торты. У него есть рецепты и ингредиенты. К сожалению, он не силен в математике. Поможешь ему узнать, сколько тортов он сможет испечь, учитывая его рецепты?

// Напишите функцию cakes(), которая принимает рецепт (объект) и доступные ингредиенты (тоже объект) и возвращает максимальное количество пирожных, которые Пит может испечь (целое число). Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200). Ингредиенты, отсутствующие в объектах, можно считать равными 0.
//НЕ РЕШЕНА!!!

// function cakes(recipe, available) {
//    for(let key in recipe) {
//     return recipe[key] 
//    }

  
// }
// must return 2
// console.log(cakes()); 
// must return 0
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
let numberOfCakes;
// let recipe = {flour: 500, sugar: 200, eggs: 1};
let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
let available = {sugar: 500, flour: 2000, milk: 2000};
for(let key1 in available) {
    for(let key2 in recipe){
        if (key1 == key2){
            console.log("go ahead")
        } numberOfCakes = 0;       
    }
       }

       