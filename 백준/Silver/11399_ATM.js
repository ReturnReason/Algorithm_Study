const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = inputs[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const stk = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  stk.push(arr[i] + stk[i - 1]);
}

let result = 0;
stk.forEach((m) => (result += m));

console.log(result);
