const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const arr = input.map(Number).sort((a, b) => b - a);
console.log(arr.join(''));
