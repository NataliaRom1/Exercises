function decode(message, replaces) {
  let s_res = "";
  let pos = 0;
  
  while (pos < message.length) {
    for (let j = replaces.length-1; j >= 0; j--) {
      if (message.indexOf(replaces[j].from, pos) == pos) {
        s_res += replaces[j].to;
        pos += replaces[j].from.length;
        break;
      } 
      s_res += message.charAt(pos);
      pos += 1;
    }
  }
  return s_res;
}
console.log(decode('ab', [{ from: 'a', to: 'bar' }, { from: 'ab', to: 'foo' }])) //=== 'foo'
console.log(decode('Aa', [{ from: 'a', to: 'b' }])) //=== 'Ab'
console.log(decode('aA', [{ from: 'a', to: 'b' }])) //=== 'bA'