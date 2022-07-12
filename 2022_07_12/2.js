// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.



function invert(array) {
    let inv = array.map((number) =>  (-1) * number);
    return inv;
 }

 invert([1,2,3,4,5,0]) 
