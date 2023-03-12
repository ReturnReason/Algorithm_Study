const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = 0;
for (let i = 1; i <= inputs[0]; i++) {
  result += i;
}
console.log(result);

/**
 * 등차수열 풀이
 * */
// const fs = require('fs');
// const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputs[0]);
console.log((n * (n + 1)) / 2);
