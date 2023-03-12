const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputs[0]);
let result = '';

for (let i = 0; i < n; i++) {
  let [a, b] = inputs[i + 1].split(' ').map(Number);
  result += `${a + b}\n`;
}

console.log(result);
