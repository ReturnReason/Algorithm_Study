/**
 * 1차 풀이
 */

const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function result(arr) {
  return [...new Set(arr.sort())].sort((a, b) => a.length - b.length);
}

console.log(result(inputs).join('\n'));

/**
 * 2차 풀이
 */

const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = inputs.slice(1);

arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else return +(a > b) || +(a === b) - 1;
});

console.log([...new Set(arr)].join('\n'));
