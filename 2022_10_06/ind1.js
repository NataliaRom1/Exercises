/**
* @param {number} N - целое число, количество сотрудников готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
*/

function yandex (N, staff, K) {
    let x = staff.sort((a, b) => b - a)
                .slice(0,K)
    	        .reduce((sum, value) => sum+value);    
    return x;
}
console.log(yandex(8,[5, 13, 8, 4, 4, 15, 1, 9],8))
// yandex(8,[14, 8, 15, 19, 2, 21, 13, 21, 12, 10, 8],5)




