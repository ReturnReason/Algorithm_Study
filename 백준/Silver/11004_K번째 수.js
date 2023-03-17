const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = inputs[0].split(' ').map(Number);
const a = inputs[1].split(' ').map(Number);

a.sort((a, b) => a - b);
console.log(a[k - 1]);
