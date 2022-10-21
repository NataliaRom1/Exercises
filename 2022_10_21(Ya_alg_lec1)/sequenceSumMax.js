let str = '2312';
let sequence = str.split('').map((elem) => Number(elem));


// сумма последовательности

let seqsum = 0;
for (let i = 0; i < sequence.length; i++) {
  seqsum += sequence[i]
}
console.log(seqsum);


// максимум последовательности

let seqmax;
if (sequence.length == 0) {
  console.log(0);
} 
else {
  seqmax = sequence[0];
}
for (let j = 1; j < sequence.length; j++) {
  if (sequence[j] > seqmax) {
    seqmax = sequence[j];
  }
}
console.log(seqmax)
