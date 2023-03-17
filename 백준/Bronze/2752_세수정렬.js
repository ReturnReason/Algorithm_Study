const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(
  inputs
    .map(Number)
    .sort((a, b) => a - b)
    .join(' ')
);
