const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let n = inputs[1];
let cnt = 1;

while (n) {
  let strN = n.toString();
  if (n == inputs[0]) break;

  if (n % 2 === 0) {
    n = ~~(n / 2);
    cnt++;
  } else if (strN[strN.length - 1] == 1) {
    n = ~~(n / 10);
    cnt++;
  } else break;
}

if (n != inputs[0]) console.log(-1);
else console.log(cnt);
