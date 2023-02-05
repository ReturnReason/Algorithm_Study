const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let num = 666;
let cnt = 1;

while (cnt !== +input) {
  num++;
  if (num.toString().includes('666')) cnt++;
}

console.log(num);
