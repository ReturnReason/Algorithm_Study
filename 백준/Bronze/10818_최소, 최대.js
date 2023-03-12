const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputs[0]);
const arr = inputs[1].split(' ').map(Number);

console.log(Math.min(...arr), Math.max(...arr));
