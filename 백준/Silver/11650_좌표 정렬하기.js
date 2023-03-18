const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = inputs.slice(1).map((v) => v.split(' ').map(Number));

result.sort((a, b) => {
  if (a[0] === b[0]) return +(a[1] > b[1]) || +(a[1] === b[1]) - 1;
  else return +(a[0] > b[0]) || +(a[0] === b[0]) - 1;
});

let r = '';
result.forEach((v) => {
  r += `${v[0]} ${v[1]}\n`;
});

console.log(r);
