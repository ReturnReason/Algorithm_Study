const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = 0;
for (let i = 1; i <= inputs[0]; i++) {
  result += i;
}
console.log(result);
