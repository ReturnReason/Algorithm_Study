const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim();

const arr = inputs.split('-');

let result = 0;

for (let i = 0; i < arr.length; i++) {
  const a = arr[i]
    .split('+')
    .map(Number)
    .reduce((a, c) => a + c);
  if (i === 0) result += a;
  else result -= a;
}

console.log(result);
