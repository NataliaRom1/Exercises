function queue(h1, h2, h3, h4) {
  return ((h1 <= h2) && (h2 <= h3) && (h3 <= h4)) ||
    ((h1 >= h2) && (h2 >= h3) && (h3 >= h4)) ?
    'YES' : 'NO';
}

console.log(queue(1, 2, 3, 4));
console.log(queue(7, 6, 5, 5));
console.log(queue(4, 4, 4, 4));
console.log(queue(5, 2, 3, 1));