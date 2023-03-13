const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < inputs[0]; i++) {
  const dv = inputs[i + 1].split(' ')[0];
  const sum = inputs[i + 1]
    .split(' ')
    .slice(1)
    .map(Number)
    .reduce((a, c) => a + c);
  const avg = sum / dv;
  const ret = inputs[i + 1]
    .split(' ')
    .slice(1)
    .map(Number)
    .filter((n) => n > avg);
  console.log(`${((ret.length / dv) * 100).toFixed(3)}%`);
}
