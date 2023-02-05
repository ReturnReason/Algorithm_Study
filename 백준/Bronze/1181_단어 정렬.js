const fs = require('fs');
const [n, ...inputs] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function result(arr) {
  return [...new Set(arr.sort())].sort((a, b) => a.length - b.length);
}

console.log(result(inputs).join('\n'));
