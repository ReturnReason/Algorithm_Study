const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = inputs[1].split('').map(Number);
console.log(nums.reduce((a, c) => a + c));
