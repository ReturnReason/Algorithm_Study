const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = inputs.map((n) => n % 42);
console.log([...new Set(arr)].length);
