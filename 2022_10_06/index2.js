/**
* @param {string[]} field - описание поля в виде массива строк
* @param {string} moves - строка со всеми движениями змейки
* @returns {[number[], number]}
*/
const field = [
    "ooo------Y--AND------",
    "-----EXY--A--N---D--E",
    "-X-----Y--A-N---D----",
    "------EXY----A---N---",
    "--DE--X---------YA---",
    "-----ND---EXY--AN--D-",
    "----E-----X-Y----A--N",
    "D-----E-XY---AN---D--",
    "E--------------------",
    "-------X---Y------A-N",
    "----D-EX----------YA-",
    "--N-DEX--Y-A--N-----D",
    "E------X--Y----------",
  ];
  
  const moves = `R 12 D 2 R 2 U 1 R 2`;
  

  function eat_H(field, y, x1, x2) {
    const yandex = ['Y','A','N','D','E','X'];
    let len = 0;
    for (let x = x1; x <= x2; x++) {
      if( yandex.indexOf( field[y][x] ) >=0 ) { len++; }
    }
    return len;
  }
  function eat_V(field, y1, y2, x) {
    const yandex = ['Y','A','N','D','E','X'];
    let len = 0;
    for (let y = y1; y <= y2; y++) {
      if( yandex.indexOf( field[y][x] ) >=0 ) { len++; }
    }
    return len;
  }
  
  function solution(field, moves) {
    let len = 3;
    let pos = [0, 2];
    let arr = moves.split(' ');
    for (let i = 0; i < arr.length / 2; i++) {
      if     ( arr[2*i] == 'R' ) { let a = Number(arr[2*i+1]); len += eat_H(field, pos[0],   pos[1]+1, pos[1]+a); pos[1] += a; }
      else if( arr[2*i] == 'L' ) { let a = Number(arr[2*i+1]); len += eat_H(field, pos[0],   pos[1]-a, pos[1]-1); pos[1] -= a; }
      else if( arr[2*i] == 'D' ) { let a = Number(arr[2*i+1]); len += eat_V(field, pos[0]+1, pos[0]+a, pos[1]  ); pos[0] += a; }
      else if( arr[2*i] == 'U' ) { let a = Number(arr[2*i+1]); len += eat_V(field, pos[0]-a, pos[0]-1, pos[1]  ); pos[0] -= a; }
    }
    console.log([pos, len])
    return [pos, len]
  }
// }

//     return [[x, y], N]; // [x, y] - координаты головы змейки, N - размер змейки
// }

