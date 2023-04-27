const fs = require('fs');
const [inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stk = [];
let result = 0;

inputs.split('').map((v) => {
  if (v === '(') {
    stk.push(v);
  } else {
    if (stk.length) {
      stk.pop();
    } else result += 1;
  }
});

console.log(result + stk.length);
