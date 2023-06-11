const fs = require('fs').readFileSync('/dev/stdin').toString();
let N = +fs;

let ret = 0;
let i = 1;
while (1) {
  if (N - i >= 0) {
    ret++;
    N -= i;
  } else break;
  i++;
}

console.log(ret);
