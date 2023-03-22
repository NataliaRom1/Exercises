// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


let l1 = {
  value: 2,
  next: {
    value: 4,
    next: {
      value: 3,
      next: null
    }
  }
};

let l2 = {
  value: 5,
  next: {
    value: 6,
    next: {
      value: 4,
      next: null
    }
  }
};

// преобразуем связанный список в массив
function transformList(list) {
  let tmp = list;
  let arr = [];
  while (tmp) {
    arr += tmp.value;
    tmp = tmp.next;
  }
  arr = Array.from(arr); //получили массив сторк
  return arr;
}
let arr1 = transformList(l1);
let arr2 = transformList(l2);

// console.log(transformList(list1));
// console.log(transformList(list2));


var addTwoNumbers = function (arr1, arr2) {
  // console.log(l1,l2)
  arr1 = arr1.reverse(); //.map(elem => String(elem));
  arr2 = arr2.reverse(); //.map(elem => String(elem));
  // console.log(l1, l2)

  arr1 = +arr1.reduce((sum, elem) => sum += elem);
  arr2 = +arr2.reduce((sum, elem) => sum += elem);
  // console.log(l1, l2)
  // console.log(typeof(l1))


  let res = [].concat(arr1, arr2).reduce((sum, elem) => sum += elem);
  // console.log(res)
  res = Array.from(String(res)).reverse().map(elem => Number(elem));;
  // console.log(res)

  return res;
};

let res = addTwoNumbers(arr1, arr2)

// преобразуем массив в связанный список
function createList() {
  let resList = res.reduceRight((acc, n) => ({ value: n, rest: acc }), null);
  return resList;
}

createList(res);

// console.log(addTwoNumbers(l1, l2)) //[7, 0, 8]
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])) //[7, 0, 8]
// console.log(addTwoNumbers([0], [0])) //[0]
// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])) //[8,9,9,9,0,0,0,1]