const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = inputs[0];
const [i, j, k] = inputs[1].split('');

console.log(+a * k);
console.log(+a * j);
console.log(+a * i);
console.log(+a * +inputs[1]);
