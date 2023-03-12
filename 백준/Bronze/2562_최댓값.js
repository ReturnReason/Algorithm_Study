const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = -Infinity;
let idx;

inputs.map(Number).forEach((n, i) => {
  if (max < n) {
    max = n;
    idx = i + 1;
  }
});

console.log(`${max}\n${idx}`);
