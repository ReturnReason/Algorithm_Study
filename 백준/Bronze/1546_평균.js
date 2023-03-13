const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = Number(inputs[0]);
const n = inputs[1].split(' ').map(Number);
const max = Math.max(...n);
console.log(n.map((num) => (num / max) * 100).reduce((a, c) => a + c) / a);
