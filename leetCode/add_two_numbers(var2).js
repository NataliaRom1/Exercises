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




var addTwoNumbers = function () {
  
  //переворачиваю список рукурсивно
  function printReverseList(list) {
    if (list.next) {
      printReverseList(list.next);
    }
    console.log(list);
    return list.value;
  }

  let a = printReverseList(l1);
  // l2 = printReverseList(l2);




};


console.log(addTwoNumbers(l1,l2)) //[7, 0, 8]
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])) //[7, 0, 8]
// console.log(addTwoNumbers([0], [0])) //[0]
// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])) //[8,9,9,9,0,0,0,1]