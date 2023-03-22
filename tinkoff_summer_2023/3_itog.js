var readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Накапливаем строки в список
function v1() {
  const lines = [];
  rl.on("line", line => {
    if (line.length == 0) return;
    lines.push(line);
    if (lines.length >= 2) {
      findSubstring(lines[0], lines[1]);
      rl.close;
    }
  });
  rl.on('close', () => process.exit(0));
}

function findMin(pos_a, pos_b, pos_c, pos_d) {
  const numbers = [pos_a, pos_b, pos_c, pos_d]; 

  let minimum = numbers[0];
  for (const item of numbers) {
    if (item < minimum) {
      minimum = item;
    }
  }
  return minimum;
}

function findSubstring(line1, line2) {
  let n = +line1;
  let s = line2;

  let pos_a = -1;
  let pos_b = -1;
  let pos_c = -1;
  let pos_d = -1;
  let res = -1;

  for (let r = 0; r < n; r++) {

    if (s[r] == 'a') {
      pos_a = r
    };

    if (s[r] == 'b') {
      pos_b = r
    };

    if (s[r] == 'c') {
      pos_c = r
    };

    if (s[r] == 'd') {
      pos_d = r
    };

    let l = findMin(pos_a, pos_b, pos_c, pos_d);
    // Math.min([value1[, value2[, ...]]])
    
    let len = r - l + 1;
    if ((l != -1) && (res == -1 || len < res)) {
        res = len;
      }
    
  }
  console.log(res);
}

v1();

// console.log(findSubstring(12, 'aabbccddbadd')) //5
// console.log(findSubstring(16, 'aaaabbbbccccdddd')) //10
// console.log(findSubstring(12, 'dbbccca')) //7
// console.log(findSubstring(12, 'abcabac')) //-1