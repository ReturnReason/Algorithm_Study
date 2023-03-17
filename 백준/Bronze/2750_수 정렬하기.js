const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
  inputs
    .slice(1)
    .sort((a, b) => a - b)
    .join('\n')
);
