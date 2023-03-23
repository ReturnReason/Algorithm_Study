const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let k = +n.split(' ')[1];
const arr = inputs.map(Number).sort((a, b) => b - a);
let result = 0;

for (let a of arr) {
  if (!k) break;
  result += ~~(k / a);
  k %= a;
}

console.log(result);
