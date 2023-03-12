const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputs[0]);
for (let i = 1; i <= n; i++) {
  console.log('*'.repeat(i));
}
