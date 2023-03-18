const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = inputs.slice(1).map((v) => v.split(' ').map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let r = '';
arr.forEach((v) => {
  r += `${v[0]} ${v[1]}\n`;
});

console.log(r);
