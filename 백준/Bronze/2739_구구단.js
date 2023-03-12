const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputs[0]);
for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
